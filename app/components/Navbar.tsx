import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="p-[16px] font-aleo">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width="40" height="40" />
        </Link>
        <div className="flex gap-4 flex-row">
          <Link href="/flights" className="px-4 py-2 hover:bg-indigo-400 rounded">
            Planes
          </Link>
          <Link href="/" className="px-4 py-2 hover:bg-indigo-400 rounded">
            Nosotros
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
