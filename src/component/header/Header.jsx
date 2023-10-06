
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Header = () => {
  const pathname = usePathname();

  return (
  <div>

      <div className="header flex justify-center gap-5 uppercase bg-orange-400 p-5">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
          <Link  href="#category" >
            Category
          </Link>
          <Link href="#features">
            Features
          </Link>
        <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href="/blog" scroll={false}>blog</Link>
        <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">contact</Link>
        <Link className={`link ${pathname === '/write' ? 'active' : ''}`} href="/write">write</Link>
        <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">login</Link>
    </div>

  </div>
  )
}

export default Header