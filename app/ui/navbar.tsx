import Link from "next/link";
import Image from "next/image";

const links: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "¿Quienes somos?" },
    { href: "/location", label: "Ubicacion" },
    { href: "/contact", label: "Contacto" },
  ];

function Navbar() {
    return (
        <div className="navbar bg-base-100 flex items-center gap-4">
            <Image src="/entrega_El-Poi-Logotipo-imprenta-blanco.png" alt="logo" width={60} height={60} />
            {
                links.map((link) => (
                    <Link key={link.href} href={link.href} className="btn btn-ghost text-xl">{link.label}</Link>
                ))
            }
        </div>
    );
}

export default Navbar;