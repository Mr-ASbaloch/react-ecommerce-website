import { Badge, Drawer, Menu } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className="flex justify-between  items-center font-semibold h-[50px] px-5  text-2xl text-blue-800">
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          { label: "Home", key: "" },
          {
            label: "Men",
            key: "men",
            children: [
              { label: "Men's Shirts", key: "mens-shirts" },
              { label: "Men's Shoes", key: "mens-shoes" },
              { label: "Men's Watches", key: "mens-Watches" },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              { label: "Women's Dresses", key: "womens-dresses" },
              { label: "Women's Shoes", key: "womens-shoes" },
              { label: "Women's Watches", key: "womens-watches" },
              { label: "Women's Bags", key: "womens-bags" },
              { label: "Women's Jewellery", key: "womens-jewellery" },
            ],
          },

          { label: "Fragrances", key: "fragrances  " },
        ]}
        className="flex  items-center h-[50px] text-2xl font-light w-full"
      />
      <h1 className="  flex items-center mr-5 w-full capitalize text-orange-800 font-bold ">
        Mr-baloch store
      </h1>
      <Addcart />
    </div>
  );
};

function Addcart() {
  const [cart, setCart] = useState(false);
  return (
    <div>
      <Badge onClick={ ()=>{
        setCart(true)
      }} 
      style={{margin:'4px'}}
      count={6}>
        <AiOutlineShoppingCart
          size={30}
        
          className=" flex  items-center  mt-2 mr-2 capitalize text-[red] font-bold cursor-pointer "
        />
      </Badge>
      <Drawer open={cart} onClose={()=>{
        setCart(false)
      }}> </Drawer>
    </div>
  );
}

export default Header;
