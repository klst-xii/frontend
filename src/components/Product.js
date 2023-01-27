import React from 'react'
import {Card, Container, CardGroup} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <Container>
    <CardGroup>
    <Card className='my-3 p-3 rounded'>
        <Link to={`products/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body>
            <Link to={`products/${product._id}`}>
                <Card.Title as ='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as ='div'>
                <Rating
                    value={product.rating}
                    text={product.numReviews}
                />     
            </Card.Text>

    <Card.Text as='h4'>${product.price}</Card.Text>        
        </Card.Body>
    </Card>
    </CardGroup>
    </Container>
  )
}

export default Product