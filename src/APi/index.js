import React from 'react'

export default function getAllProducts() {
  return  fetch('https://dummyjson.com/products').then(res => res.json())
   
}
