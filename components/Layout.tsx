import React from 'react'
import Header from './Header'

// TODO: 型
const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col w-screen m-2">
      <Header />
      {children}
    </div>
  )
}

export default Layout
