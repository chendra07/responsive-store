import logo from "./logo.svg";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.css";

//component
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/footer.component";
import Services from "./pages/services/services.component";
import Products from "./pages/Products/Products.component";
import SignUp from "./pages/SignUpPage/SignUp.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
