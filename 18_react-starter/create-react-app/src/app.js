import React from "react";

// import global / semua isi css
import "./styles/global.style.css";

// import module / spesifict style
import styles from "./app.module.css";
import Button from "./components/button";

const App = () => {
  return (
    <div className='app-style'>
      <h1 className={styles.heading}>Hello world</h1>
      <Button gaya={{ background: "red", color: "white" }}>Okay Semua</Button>
    </div>
  );
};

export default App;
