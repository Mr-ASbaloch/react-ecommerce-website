import React, { useEffect, useState } from "react";
import getAllProducts from "../../APi";
import { Card, List } from "antd";


const Products = () => {
  const [items, setItems] = useState([ ""]);

  useEffect(() => {
  getAllProducts().then ((response)=>{
setItems(response.products)
  }).catch((error)=>{
console.log(error);
  })
  }, []);

  return (
    <div>
    <List
      renderItem={(product, index) =>{
        return <>
        <Card key={index}  title={product.title}/>
        </>
      }}
      dataSource={items}>

    </List>
   
    </div>
  );
};

export default Products;
