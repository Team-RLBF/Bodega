import React from "react";
import { useSelector } from "react-redux";
import ShoppingContainer from "./ShoppingContainer/ShoppingContainer.jsx";
import { TabsContainer } from "./TabsContainer/TabsContainer.jsx";
import { Header } from "./Header/Header.jsx";
import PantryContainer from "./PantryContainer/PantryContainer.jsx";

const App = () => {
  const { displayShopping, displayPantry } = useSelector((state) => state.ui);
  console.log("displayShopping", displayShopping);

  return (
    <div className="container mx-auto bg-gray-200">
      <Header />
      <TabsContainer />
      {displayShopping && <ShoppingContainer />}
      {displayPantry && <PantryContainer />}
    </div>
  );
};

export default App;
