import React from "react";
import SideBar from "./Inventory.SideBar.js";
import InventoryHeader from "../Components/Inventory.Header";

import "../Css/Inventory.css";

function Inventory() {
  return (
    <div>
      <InventoryHeader />
      <SideBar />
    </div>
  );
}

export default Inventory;
