import React from "react";
import { SubModal } from "./containers/SubModal/SubModal";

function App() {
  return (
    <div className="App">
      <div className="screen">
        <SubModal defaultTab="review" />
      </div>
    </div>
  );
}

export default App;
