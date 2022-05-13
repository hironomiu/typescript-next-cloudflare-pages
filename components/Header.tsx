import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex">
      <Link href="/">
        <a className="text-2xl font-bold">Super Blog!!</a>
      </Link>
    </div>
  )
}

export default Header
