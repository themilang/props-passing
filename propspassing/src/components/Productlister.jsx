import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Productlister = ({products}) => {
    console.log(products)
  return (
    <>
    {  

    products.map((prod)=>{
        return  <div className="d-flex ">
        <Card className=' mt-3 ms-3 bg-dark  text-white' key={prod.id} style={{ width: '14rem' , display:'flex' , justifyContent:'space-around' }}>
    
        <Card.Img variant="top" src={prod.thumbnail}/>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
        {prod.description}
          </Card.Text>
          <Button variant="primary">Pre-Book</Button>
        </Card.Body>
      </Card>
        
      </div>

    })
    
}
</>

  );
};

export default Productlister