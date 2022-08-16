import React from 'react'
import { useRouter } from 'next/router'

const Item = () => {

 const {
  query: { productId}
 } = useRouter()
  return (
    <div>{productId}</div>
  )
}

export default Item