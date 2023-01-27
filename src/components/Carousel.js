import React from 'react'
import {Carousel, Image, Col, } from 'react-bootstrap'

function Slider() {
  return (
    <div>
    <Col md={12}> 
    <Carousel>
      <Carousel.Item>
      <div style={{
            height:'100%',
            maxHeight:600,
            objectFit:'cover',
        }}>
        <Image
          className="d-block w-100"
          src={'/carousels/c1.png'}
          alt="First slide"
          /></div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{
            height:'100%',
            maxHeight:600,
            objectFit:'cover',
        }}>
        <Image
          className="d-block w-100"
          src={'/carousels/c2.png'}
          alt="Second slide"
        /></div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{
            height:'100%',
            maxHeight:600,
            objectFit:'cover',
        }}>
        <Image
          className="d-block w-100"
          src={'/carousels/c3.png'}
          alt="Third slide"
        /></div>
      </Carousel.Item>
    </Carousel>
    </Col> 
    </div>
  )
}

export default Slider