import React from 'react'
import {Card,CardBody,CardSubtitle,CardTitle,CardText,Button} from 'reactstrap'
import { useDispatch } from 'react-redux'
import ProductEdit from './ProductEdit'
import { deleteProduct } from '../../redux/actions'

function ProductCard({el}) {
  const dispatch=useDispatch()
  const Deletehandler=()=>{
      dispatch(deleteProduct(el._id))
  }

  return (
    <div>
    <Card style={{width: '18rem'}}>
<CardBody>
  <CardTitle tag="h5"> {el.name}</CardTitle>
  <CardSubtitle className="mb-2 text-muted" tag="h6">  Last updated 3 mins ago </CardSubtitle>
</CardBody>
<img alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
<CardBody>
  <CardText>{el.description} </CardText>
    <ProductEdit el={el}/>
    <Button color="danger" onClick={Deletehandler}>DELETE</Button>
</CardBody>
</Card>
</div>
  )
}

export default ProductCard

