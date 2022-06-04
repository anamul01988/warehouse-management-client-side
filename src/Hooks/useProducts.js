import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://damp-dusk-59308.herokuapp.com/inventory')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts];
};

export default useProducts;