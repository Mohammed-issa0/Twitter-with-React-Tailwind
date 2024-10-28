import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

function App() {
  return (
    <div className="s bg-dim-900">
      <div className="container mx-auto h-fit flex xl:max-w-[1200px]">
        <Left />

        <Middle />

        <Right />
      </div>
    </div>
  );
}

export default App;
