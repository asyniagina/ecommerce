import React from 'react'

import Head from './head'
import Header from './header'
import Products from './products'

const Home = () => {
  return (
    <div className="flex justify-center p4 bg-gray-600">
      <Head title="Main" />
      <Header caption="ECommerce Shop" />
      <Products />
</div>
  )
}

export default React.memo(Home)
