import "./App.css";
import { Router, Link } from "@reach/router";

import Main from "./views/Main";
import Create from "./views/Create";
import Detail from "./views/Detail";
import Edit from "./views/Edit";

function App() {
  return (
    <div className="container mt-4">
      <Router>
        <Main default path="/" />
        <Create path="/pets/new" />
        <Detail path="/pets/:id" />
        <Edit path="/pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
