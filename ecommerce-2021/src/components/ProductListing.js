import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  //const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        .catch((err) => {
            console.log('Err', err)
        })
        dispatch(setProducts(res.data))
    }

    useEffect(()=> {
        fetchProducts();
    }, [])
   
    return(
        <div className='container'>
            <ProductComponent/>
        </div>
    )

}

export default ProductListing;