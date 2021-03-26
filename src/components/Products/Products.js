import React, { useCallback, useReducer } from "react";
import { Route } from "react-router-dom";

import ProductForm from "./ProductForm";
import Search from "./Search";
import ProductList from "./ProductList";
import NavBar from "../Nav/Navbar/NavBar";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.product;
    case "ADD":
      return [...state, action.product];

    default:
      throw new Error("Error");
  }
};

const Products = () => {
  // const [products, setProducts] = useState([]);
  const [products, dispatch] = useReducer(productReducer, []);

  const addProductHandler = (item) => {
    item = {
      title: item.title.trim(),
      amount: item.amount.trim(),
    };
    fetch(
      "https://react-hooks-front-cast-default-rtdb.firebaseio.com/products.json",
      {
        body: JSON.stringify(item),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        response.json().then((responseData) => {
          // setProducts((prevState) => {
          //   console.log(responseData);
          //   return [
          //     ...prevState,
          //     {
          //       id: responseData.name,
          //       ...item,
          //     },
          //   ];
          // });
          dispatch({
            type: "ADD",
            product: {
              id: responseData.name,
              ...item,
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setProductHandler = useCallback((item) => {
    dispatch({
      type: "SET",
      product: item,
    });
  }, []);

  return (
    <div className="App">
        <NavBar />
     
        <Route path="/add" exact>
          <ProductForm addProduct={addProductHandler} />
        </Route>

        <section>
          <Route path="/" exact>
            <Search onLoadProducts={setProductHandler} />
            <ProductList
              products={products}
              onRemoveItem={() => {
                console.log("Item Deleted");
              }}
            />
          </Route>
        </section>
      
    </div>
  );
};

export default Products;
