
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';


const Header = () => {
  const pathname = usePathname();
  const {data,status} = useSession();
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
{
  status == "authenticated" ? <>
  <Link className={`link ${pathname === '/account' ? 'active' : ''}`} href="/account">{data?.user?.name}</Link>
  <span> <img src={data?.user?.image} height="25" width="25" alt="user img" /> </span>
  <button onClick={()=>signOut()}>logout</button>
  </>:<>
  <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">login</Link>
  </>
}
    </div>

  </div>
  )
}

export default Header