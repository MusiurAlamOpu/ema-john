import "./App.css";
import Header from "./components/Header/Header.js";
import Shop from "./components/Shop/Shop.js";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  return <div>
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/Shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/manage-inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
