"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type DemoUser = {
  email: string;
  name: string;
  phone: string;
  password: string;
};

export type DemoOrder = {
  id: string;
  date: string;
  status: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
};

type StoredOrder = DemoOrder & { email: string };

type SessionUser = { email: string; name: string; phone: string };

type AuthValue = {
  ready: boolean;
  user: SessionUser | null;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (name: string, phone: string) => void;
  changePassword: (current: string, next: string) => Promise<void>;
  orders: DemoOrder[];
  placeOrder: (items: { name: string; qty: number; price: number }[], total: number) => void;
  library: string[];
  addFormation: (slug: string) => void;
};

const K_USERS = "io_demo_users";
const K_SESSION = "io_demo_session";
const K_ORDERS = "io_demo_orders";
const K_LIBRARY = "io_demo_library";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode — ignore */
  }
}

const AuthContext = createContext<AuthValue | null>(null);

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth doit être utilisé dans <AuthProvider>");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);
  const [orders, setOrders] = useState<DemoOrder[]>([]);
  const [library, setLibrary] = useState<string[]>([]);

  useEffect(() => {
    const email = read<string | null>(K_SESSION, null);
    if (email) {
      const users = read<Record<string, DemoUser>>(K_USERS, {});
      const u = users[email];
      if (u) {
        setUser({ email: u.email, name: u.name, phone: u.phone });
        setOrders(read<StoredOrder[]>(K_ORDERS, []).filter((o) => o.email === email));
        setLibrary(read<{ email: string; slug: string }[]>(K_LIBRARY, []).filter((e) => e.email === email).map((e) => e.slug));
      }
    }
    setReady(true);
  }, []);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    const key = email.trim().toLowerCase();
    if (password.length < 12) throw new Error("Le mot de passe doit contenir au moins 12 caractères.");
    const users = read<Record<string, DemoUser>>(K_USERS, {});
    if (users[key]) throw new Error("Un compte existe déjà avec cet e-mail.");
    users[key] = { email: key, name: name.trim(), phone: "", password };
    write(K_USERS, users);
    write(K_SESSION, key);
    setUser({ email: key, name: name.trim(), phone: "" });
    setOrders([]);
    setLibrary([]);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const key = email.trim().toLowerCase();
    const users = read<Record<string, DemoUser>>(K_USERS, {});
    const u = users[key];
    if (!u || u.password !== password) throw new Error("E-mail ou mot de passe incorrect.");
    write(K_SESSION, key);
    setUser({ email: u.email, name: u.name, phone: u.phone });
    setOrders(read<StoredOrder[]>(K_ORDERS, []).filter((o) => o.email === key));
    setLibrary(read<{ email: string; slug: string }[]>(K_LIBRARY, []).filter((e) => e.email === key).map((e) => e.slug));
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(K_SESSION);
    } catch {
      /* ignore */
    }
    setUser(null);
    setOrders([]);
    setLibrary([]);
  }, []);

  const updateProfile = useCallback(
    (name: string, phone: string) => {
      if (!user) return;
      const users = read<Record<string, DemoUser>>(K_USERS, {});
      if (users[user.email]) {
        users[user.email].name = name.trim();
        users[user.email].phone = phone.trim();
        write(K_USERS, users);
      }
      setUser({ ...user, name: name.trim(), phone: phone.trim() });
    },
    [user],
  );

  const changePassword = useCallback(
    async (current: string, next: string) => {
      if (!user) throw new Error("Vous n'êtes pas connecté.");
      const users = read<Record<string, DemoUser>>(K_USERS, {});
      const u = users[user.email];
      if (!u || u.password !== current) throw new Error("Mot de passe actuel incorrect.");
      if (next.length < 12) throw new Error("Le nouveau mot de passe doit contenir au moins 12 caractères.");
      u.password = next;
      write(K_USERS, users);
    },
    [user],
  );

  const placeOrder = useCallback(
    (items: { name: string; qty: number; price: number }[], total: number) => {
      if (!user) return;
      const all = read<StoredOrder[]>(K_ORDERS, []);
      const order = {
        email: user.email,
        id: `IO-${Date.now().toString(36).toUpperCase()}`,
        date: new Date().toISOString(),
        status: "En attente de validation",
        items,
        total,
      };
      all.push(order);
      write(K_ORDERS, all);
      setOrders(all.filter((o) => o.email === user.email));
    },
    [user],
  );

  const addFormation = useCallback(
    (slug: string) => {
      if (!user) return;
      const all = read<{ email: string; slug: string }[]>(K_LIBRARY, []);
      if (!all.some((e) => e.email === user.email && e.slug === slug)) {
        all.push({ email: user.email, slug });
        write(K_LIBRARY, all);
      }
      setLibrary(all.filter((e) => e.email === user.email).map((e) => e.slug));
    },
    [user],
  );

  return (
    <AuthContext.Provider
      value={{
        ready,
        user,
        signup,
        login,
        logout,
        updateProfile,
        changePassword,
        orders,
        placeOrder,
        library,
        addFormation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
