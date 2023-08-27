import React, { useEffect, useState } from "react";
import  { addToCart, getProductByCategory } from "../../APi";
import { useParams } from "react-router-dom";
import { Badge, Button, Card, Image, List, Rate, Spin, Typography, message } from "antd";
// import Category from "../../Pages/Category/Category";
// import Column from "antd/es/table/Column";

const Products = () => {
  const [items, setItems] = useState([]);
const [loading ,setLoading] =useState (false)
 const param= useParams()

  useEffect(() => {
    setLoading (true)
    getProductByCategory(param.CategoryId).then((response) => {
        setItems(response.products);
        setLoading(false)
      })
    
      .catch((error) => {
        console.log(error);
      });
  }, [param]);

  if (loading)
  {
   return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set the container height to 100% of the viewport
      }}
    >
      <Spin spinning size="large" />
    </div>
  );
  }

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
                actions={[ <Rate value={product.rating} allowHalf disabled/> , <AddToCartButton item={product}/> ]}
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

const AddToCartButton =({item}) =>{
  const [loading, setLoading]= useState(false)
   const addToCarts =()=>{
    setLoading (true)
    addToCart(item.id).then((response)=>{
     message.success(`${item.title} Successfully added to cart`)
 setLoading(false)
    })
   }
  return <>
   <Button type="link"   className='bg-fuchsia-200 font-semibold'  onClick={addToCarts} loading={loading } > Add to cart </Button>
   </>
 
}




export default Products;


