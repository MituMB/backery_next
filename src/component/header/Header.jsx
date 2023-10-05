import Link from 'next/link'

const Header = () => {
  return (
  <div>

      <div className="header flex justify-center gap-5 uppercase bg-orange-400 p-5">
        <a href="">home</a>
        <a href="">blog</a>
        <a href="">contact</a>
        <a href="">write</a>
        <Link href="/login">login</Link>
    </div>

  </div>
  )
}

export default Header