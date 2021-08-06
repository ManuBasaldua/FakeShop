import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './ProductComponent.css'
import { CardGroup, Card, Col} from 'react-bootstrap';


const ProductComponent = () =>{
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return(
            <div className='contenedor'>
            <CardGroup style={{ width: '25rem' }} className='container'>
                <Card style={{ width: '1em', height: '50%' }}  className='cards'>
                    <Link to={`/product/${id}`}>
                    <Card.Img variant="top" src={image} alt={title} className='image'/>
                    
                    <Card.Body>
                        <Card.Title className='title'>{title}</Card.Title>
                    
                        <Card.Text>
                        {price} 
                        <br></br>
                        {category}
                        </Card.Text>
                    </Card.Body>
                    </Link>
                </Card>
            </CardGroup>
            </div>
           
        )
    })
     
    return(
        <>{renderList}</>
        
            
        
    )

}

export default ProductComponent;