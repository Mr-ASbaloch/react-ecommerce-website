import { Badge, Button, Drawer, Form, Input, Menu, Table, message } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../APi";
import FormItem from "antd/es/form/FormItem";

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
  const [cartItems, setCartItems] = useState([]);
  const [checkCart, setCheckCart] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  });
  return (
    <div>
      <Badge
        onClick={() => {
          setCart(true);
        }}
        style={{ margin: "4px" }}
        count={6}
      >
        <AiOutlineShoppingCart
          size={30}
          className=" flex  items-center  mt-2 mr-2 capitalize text-[red] font-bold cursor-pointer "
        />
      </Badge>
      <Drawer
        open={cart}
        onClose={() => {
          setCart(false);
        }}
        title="Your Cart"
      >
        <Button
          onClick={() => {
            setCheckCart(true);
          }}
          type="primary"
          className="bg-black mb-2"
        >
          Check Out Your Cart
        </Button>
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return (
                  <>
                    <span>${value}</span>
                  </>
                );
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (value) => {
                return (
                  <>
                    <span>${value}</span>
                  </>
                );
              },
            },
          ]}
          dataSource={cartItems}
          pagination={false}
        ></Table>
      </Drawer>
      <Drawer
        open={checkCart}
        onClose={() => {
          setCheckCart(false);
        }}
        placement="left"
        title="Confirm Your order "
      >
        <Form
          onFinish={(values) => {
            console.log(values);
            message.success(
              `Congratulations  "${name.toUpperCase()} ", You successfully confirmed your order`
            );
          }}
        >
          <FormItem label="Full Name:" required>
            <Input
              placeholder="Enter your full name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormItem>
          <FormItem label="Email:" required>
            <Input
              type="email"
              placeholder="Enter your unique email"
              required
            />
          </FormItem>
          <FormItem label="Full Address:" required>
            <Input placeholder="Enter your full Address" required />
          </FormItem>
          <Button
            onSubmit={() => {}}
            htmlType="submit"
            type="primary"
            className="text-black w-2/3 m-auto font-semibold bg-slate-400"
          >
            Confirm Your Order
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default Header;
