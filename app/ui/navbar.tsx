import Link from 'next/link';
import Image from 'next/image';

const links: { href: string; label: string }[] = [
  { href: '/', label: 'NOSOTROS' },
  { href: '/gallery', label: 'GALERÍA' },
  { href: '/location', label: 'UBICACIÓN' },
  { href: '/contact', label: 'CONTACTO' },
];

function Navbar() {
  return (
    <main className="navbar bg-base-100 flex items-center gap-2 md:gap-5 lg:gap-10 bg-accent md:h-[90px] h-[350px] flex-col md:flex-row">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={60}
        priority
        className="ml-1 md:ml-5"
      />
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="btn btn-ghost text-xl cursor-pointer"
        >
          {link.label}
        </Link>
      ))}
      <Image
        src="/name.png"
        alt="logo"
        width={100}
        height={60}
        priority
        className="md:ml-auto md:mr-10 md:w-[125px]"
      />
    </main>
  );
}

export default Navbar;
