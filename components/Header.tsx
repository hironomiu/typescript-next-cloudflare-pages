import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex items-center border-b-[1px] h-16 shadow-md">
      <Link href="/">
        <a className="text-2xl font-bold ml-2">Super Blog!!</a>
      </Link>
    </div>
  )
}

export default Header
