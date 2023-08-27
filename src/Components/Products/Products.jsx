import React, { useEffect, useState } from "react";
import getAllProducts from "../../APi";
import { Badge, Button, Card, Col, Image, List, Rate, Typography } from "antd";
import Column from "antd/es/table/Column";

const Products = () => {
  const [items, setItems] = useState([""]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setItems(response.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex ">
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <>
            <Badge.Ribbon text={`${product.discountPercentage}  %`} color="lime-inverse" className='mx-3 px-2'>
              <Card
                key={index}
                title={product.title}
                cover={
                  <Image
                    src={product.thumbnail}
                    className="!h-[250px] !w-[250px] m-auto object-cover "
                  /> 
                }
                actions={[ <Rate value={product.rating} allowHalf disabled/> , <AddToCartButton/> ]}
             >
              
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      {" "}
                      Price :${product.price} {""}
                      <Typography.Text delete type="danger">
                        {" "}
                        ${product.discountPercentage} off
                      </Typography.Text>
                      <Typography.Text className='flex font-bold mt-2'> Stock: {product.stock}</Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "More" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
              </Badge.Ribbon>
            </>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  )

   

}

const AddToCartButton =() =>{
  return <>
   <Button type="link" > Add to cart </Button>
   </>
 
}




export default Products;


