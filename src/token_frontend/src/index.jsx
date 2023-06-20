import ReactDOM from 'react-dom/client'
import React from 'react'
import App from "./components/App";

const init = async () => { 
  const root = ReactDOM.createRoot( document.getElementById("root"));
  root.render(
    
      <App />
    
  );
}

init();


