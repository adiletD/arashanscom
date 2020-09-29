import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


function HomeScreen (props){

    //Definition of hook
    //useState --> from react taken
    const [products,setProduct] = useState([]);

    //to fetch data from server
    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            //the object that is returned by axios has 
            //property of "data"
            setProduct(data);
        }

        fetchData();
        return () => {
          //  
        };    
    }, []); //the "effect" line is run only at
    //componentDidMount
    
    /*
    componentDidMount() is a hook that gets
     invoked right after a React component 
     has been mounted aka after the first 
     render() lifecycle. (everything after the 
        "return below")
    */  



    return  <ul className="products">
    {
        products.map(product => //now it is products itself                     
    
    <li key={product._id}> 
            <div className="product">
            <Link to={'/product/' + product._id}>
                <img src={product.image} alt="kaplak" className="product-image"/>
            </Link>
                
            <div className="product-name">
                    <Link to={'/product/' + product._id}>
                        {product.name}
                    </Link>
            </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews ) </div>
            </div>  
        </li>
    )};
        

       
    </ul>


}

export default HomeScreen;

