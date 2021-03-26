import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";

import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadProducts } = props;
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  
  useEffect(() => {
    // if(searchInput!==''){ 
    setTimeout(() => {
      if ( searchInput === '' || searchInput === inputRef.current.value) {
        const query =
          searchInput.trim().length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchInput.trim()}"`;
        fetch(
          `https://react-hooks-front-cast-default-rtdb.firebaseio.com/products.json${query}`
        )
          .then((response) => {
            response.json().then((responseData) => {
              const loadedProducts = [];

              for (let item in responseData) {
                loadedProducts.push({
                  id: item,
                  title: responseData[item].title,
                  amount: responseData[item].amount,
                });
              }

              onLoadProducts(loadedProducts);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
    }, 500);
  }
  ,[inputRef,searchInput,onLoadProducts]);


  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input
            ref={inputRef}
            type="text"
            value={searchInput}
            onChange={(event)=>{setSearchInput(event.target.value)}}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
