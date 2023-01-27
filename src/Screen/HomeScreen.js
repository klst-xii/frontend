import React from 'react'
import products from '../products'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'
import Slider from '../components/Carousel'

function HomeScreen() {
  
  return (
    <div>
      <Slider/>    
      <div class='text-center' variant='light'>
        <br/>
        <h2>Latest Products</h2>
    
      </div>

        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen