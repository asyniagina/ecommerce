import React from 'react'

import Head from './head'
import Header from './header'

const Cart = () => {
  return (
    <div className="flex flex-col">
      <Head title="Cart" />
      <Header caption="ECommerce Shop" />
</div>
  )
}

export default React.memo(Cart)