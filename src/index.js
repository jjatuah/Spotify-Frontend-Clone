import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import {BrowserRouter as Router} from "react-router-dom";
import {DataLayer} from "./components/DataLayer"
import reducer,{initialState} from "./reducer"



ReactDOM.render(<div>
 <DataLayer initialState={initialState} reducer={reducer}> 
  <Router>
    <App></App>
  </Router>
 </DataLayer>
</div>, document.getElementById("root"));



