import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { getProducts } from '../../redux/actions'

function ProductList() {
    const dispatch=useDispatch()
    useEffect(()=>dispatch(getProducts(),[]))

    const AllProducts=useSelector((state)=>state.prod.Products.product)
    console.log(AllProducts,"ggggggggggggg")

  return (
    <div>
        { AllProducts && AllProducts.map((el)=>(
            <ProductCard el={el}/>
        ))}
    </div>
  )
}

export default ProductList
