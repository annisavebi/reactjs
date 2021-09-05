import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { useEffect, useState } from "react";
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
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
