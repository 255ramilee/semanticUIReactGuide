import React from "react";
import ReactDOM from "react-dom";
import {Container} from "semantic-ui-react";

import Accordion from "./accordion";

const App = ({ children }) => (
    <Container>  
      {children}
    </Container>
  );


ReactDOM.render(
    <App>
      <Accordion />
    </App>,
document.getElementById("root")
);