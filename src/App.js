import logo from "./logo.svg";
import "./App.css";
// import HeadNav from "./Components/Navbar/NavbarElements.js";
import HeadNav from "./Components/Navbar/index";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HeadNav />
      <h1>Hello this is my start with no end</h1>
      {/* <Button className="primary">Primary</Button> */}
      <button className="btn btn-primary ">This</button>
    </div>
  );
}

export default App;
