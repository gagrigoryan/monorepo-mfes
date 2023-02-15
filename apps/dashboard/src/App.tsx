import React from "react";
import Header from "./components/Header";
import Button from "Widgets/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <Button isDark />
    </div>
  );
}

export default App;
