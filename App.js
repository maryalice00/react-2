import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";
import SnackDetail from "./SnackDetail";
import DrinkDetail from "./DrinkDetail";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snacksData = await SnackOrBoozeApi.getSnacks();
        const drinksData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacksData);
        setDrinks(drinksData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/snacks" exact>
            <Menu items={snacks} title="Snacks" />
          </Route>
          <Route path="/snacks/:id">
            <SnackDetail items={snacks} />
          </Route>
          <Route path="/drinks" exact>
            <Menu items={drinks} title="Drinks" />
          </Route>
          <Route path="/drinks/:id">
            <DrinkDetail items={drinks} />
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
