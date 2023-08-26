import React from 'react'

const GetAllProducts = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
}

export default GetAllProducts