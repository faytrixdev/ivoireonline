import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  className = "h-9",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="Ivoire Online — Accueil" className="shrink-0">
      <Image
        src="/images/ivoire-online-logo.png"
        alt="Ivoire Online"
        width={547}
        height={134}
        priority={priority}
        className={`${className} w-auto`}
      />
    </Link>
  );
}
