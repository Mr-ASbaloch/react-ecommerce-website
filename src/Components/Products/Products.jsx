import React, { useEffect, useState } from "react";
import getAllProducts, { addToCart, getProductByCategory } from "../../APi";
import { useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  Rate,
  Select,
  Spin,
  Typography,
  message,
} from "antd";
// import Category from "../../Pages/Category/Category";
// import Column from "antd/es/table/Column";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("a-z");
  const param = useParams();

  useEffect(() => {
    (param?.CategoryId
      ? getProductByCategory(param.CategoryId)
      : getAllProducts()
    )
      .then((response) => {
        setLoading(true);
        setItems(response.products);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [param]);

  const getSortedItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (order === "a-z") {
        return a.title > b.title ? 1 : a.title === b.title ? 0 : -1;
      }
      if (order === "z-a") {
        return a.title < b.title ? 1 : a.title === b.title ? 0 : -1;
      }

      if (order === "low-High") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      }

      if (order === "high-Low") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Set the container height to 100% of the viewport
        }}
      >
        <Spin spinning size="large" />
      </div>
    );
  }

  return (
    <>
      <Typography.Text className="ml-2 mr-3 font-bold">
        View Items sorted by :
      </Typography.Text>
      <Select
        onChange={(value) => {
          setOrder(value);
        }}
        defaultValue={"a-z"}
        options={[
          {
            label: "Alphabytically A-Z",
            value: "a-z",
          },
          {
            label: "Alphabytically Z-A",
            value: "z-a",
          },
          {
            label: "Price Low to High ",
            value: "low-High",
          },
          {
            label: "Price High to Low ",
            value: "high-Low",
          },
        ]}
        placeholder="filter values  "
        className=" mt-3 w-2/12"
      ></Select>
      <div className="flex mt-2 ">
        <div></div>
        <List
          className="m-5"
          grid={{ column: 3 }}
          renderItem={(product, index) => {
            return (
              <>
                <Badge.Ribbon
                  text={`${product.discountPercentage}  %`}
                  color="lime-inverse"
                  className="mx-3 px-2"
                >
                  <Card
                    key={index}
                    title={product.title}
                    cover={
                      <Image
                        src={product.thumbnail}
                        className="!h-[250px] !w-[250px] m-auto object-cover  "
                      />
                    }
                    actions={[
                      <Rate value={product.rating} allowHalf disabled />,
                      <AddToCartButton item={product} />,
                    ]}
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
                          <Typography.Text className="flex font-bold mt-2">
                            {" "}
                            Stock: {product.stock}
                          </Typography.Text>
                        </Typography.Paragraph>
                      }
                      description={
                        <Typography.Paragraph
                          ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "More",
                          }}
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
          dataSource={getSortedItems()}
        ></List>
      </div>
    </>
  );
};

const AddToCartButton = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const addToCarts = () => {
    setLoading(true);
    addToCart(item.id).then((response) => {
      message.success(`${item.title} Successfully added to cart`);
      setLoading(false);
    });
  };
  return (
    <>
      <Button
        type="link"
        className="bg-fuchsia-200 font-semibold"
        onClick={addToCarts}
        loading={loading}
      >
        {" "}
        Add to cart{" "}
      </Button>
    </>
  );
};

export default Products;
