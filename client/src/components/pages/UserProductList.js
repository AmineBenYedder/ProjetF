import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProductCard from './UserProductCard'
import { getProducts } from '../../redux/actions'

function UserProductList() {

    const dispatch=useDispatch()
    useEffect(()=>dispatch(getProducts(),[]))

    const AllProducts=useSelector((state)=>state.prod.Products.product)

  return (
    <div>
       { AllProducts && AllProducts.map((el)=>(
            <UserProductCard el={el}/>
        ))}
    </div>
  )
}

export default UserProductList
