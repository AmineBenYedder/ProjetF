import React from 'react'
import {Card,CardBody,CardSubtitle,CardTitle,CardText} from 'reactstrap'


function UserProductCard(el) {
  return (
    <div>
      <Card style={{width: '18rem'}}>
<CardBody>
  <CardTitle tag="h5"> {el.name}</CardTitle>
  <CardSubtitle className="mb-2 text-muted" tag="h6">  {el.price} </CardSubtitle>
</CardBody>
<img alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
<CardBody>
  <CardText>{el.description} </CardText>
</CardBody>
</Card>
    </div>
  )
}

export default UserProductCard
