import React from 'react'
import Header from './Header'

// TODO: 型
const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
