import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";


function storeData(inputBook){
  console.log(inputBook);
  alert("Success!");
}

function updateData(inputBook){
  console.log(inputBook);
  alert("Updated!")
}

function deleteData(book){
  console.log(book);
  alert("Deleted!")
}

function App() {
  const [books, setBooks] = useState([
    { _id: 1, title: "Silent Majority", author: "Hirate Yurina", price: 200000, stock: 9 },
    { _id: 2, title: "Nobody's Fault", author: "Morita Hikaru", price: 150000, stock: 12},
  ]);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route path="/" exact>
          <Home
          bookList={books} 
          />
        </Route>

        <Route path="/books" exact>
          <Books 
          bookList={books} 
          store={storeData} 
          update={updateData} 
          remove={deleteData}
          />
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
