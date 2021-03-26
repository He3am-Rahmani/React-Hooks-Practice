import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Products from "./components/Products/Products";

const App = (props) => {
  return (
    <Router>
      <Products />
    </Router>
  );
};

export default App;
