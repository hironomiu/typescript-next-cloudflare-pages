import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-screen m-2">
      <Header />
      {children}
    </div>
  )
}

export default Layout
