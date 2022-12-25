import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/inventory")
      .then(function (response) {
        console.log(response.data);
        setInventory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>SKU</th>
          <th>Item Name</th>
          <th>Location</th>
          <th>Manufacturer</th>
          <th>Area</th>
          <th>Cost</th>
          <th>Stock</th>
          <th>Total Cost</th>
        </tr>
        {inventory.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.sku}</td>
              <td>{item.itemName}</td>
              <td>{item.location}</td>
              <td>{item.manufacturer}</td>
              <td>{item.area}</td>
              <td>{item.cost}</td>
              <td>{item.stock}</td>
              <td>{item.totalCost}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
