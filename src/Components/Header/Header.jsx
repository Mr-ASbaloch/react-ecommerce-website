import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div>
    
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
              { label: "Men's Watches", key: "mens- Watches" },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              { label: "Women's Dresses", key: "women-dresses" },
              { label: "Women's Shoes", key: "women- shoes" },
              { label: "Women's Watches", key: "women-watches" },
              { label: "Women's Bags", key: "women-bags" },
              { label: "Women's Jewellery", key: "women-jewellery" },
            ],
          },

          { label: "Fragrances", key: "fragrances  " },
        ]}
     


        className='bg-slate-200  text-xl text-blue-800'
     
     ></Menu>
   
    </div>
  );
};

export default Header;
