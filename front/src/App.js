import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [test, setTest] = useState([]);
  useEffect(() => {
    async function lalala() {
      const response = await axios.get("http://localhost:8080/");
      setTest(response.data);
      console.log(test);
    }
    lalala();
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>cow ID</th>
            <th>age</th>
            <th>gender</th>
            <th>health</th>
            <th>caretaker_id</th>
            <th>doc_id</th>
            <th>room_no</th>
          </tr>
        </thead>
        {test.map((cow) => (
          <tbody>
            <td>{cow.cow_id}</td>
            <td>{cow.age}</td>
            <td>{cow.gender}</td>
            <td>{cow.health}</td>
            <td>{cow.caretaker_id}</td>
            <td>{cow.doc_id}</td>
            <td>{cow.room_no}</td>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
