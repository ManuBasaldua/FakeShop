import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';
import './ProductDetail.css';
import {Spinner} from 'react-bootstrap';

const ProductDetail = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product)
    const {id, image, category, price, description, title} = product;
    
    const dispatch = useDispatch()
   

    const fetchProductDetail = async (id) => {
        const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
            console.log('Err', err);
        });

        dispatch(selectedProducts(res.data));
    }

    useEffect(()=> {
        if(productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId])
    return(
        <div  key={id}>
            {Object.keys(product).length === 0 ? (
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ): ( <div className='contenedor-card'>
                <img className='image2' src={image}/>
                    
                    <div className='contenedor-letters'>
                    
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <h3>{category}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                
            )}
            
        </div>
    )

}

export default ProductDetail;