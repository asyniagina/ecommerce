import React from 'react'

import Head from './head'
import Header from './header'
import Products from './products'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Head title="Main" />
      <Header caption="ECommerce Shop" />
      <Products />
</div>
  )
}

export default React.memo(Home)
