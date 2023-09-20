import React, { useEffect, useState } from "react";

// import global / semua isi css
import "./styles/global.style.css";

// import module / spesifict style
import styles from "./app.module.css";
import Button from "./components/button";

const App = () => {
  const [state, setState] = useState(0);
  const [dataApi, setDataApi] = useState();

  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await resp.json();
  };
  useEffect(() => {
    fetchData().then(resp => setDataApi(resp));
  }, []);
  return (
    <div className='app-style'>
      <h1 className={styles.heading}>Hello world</h1>
      <div>{state}</div>
      <button
        onClick={() => {
          setState(state + 1);
        }}>
        Tambah
      </button>
      <Button gaya={{ background: "red", color: "white" }}>Okay Semua</Button>
      <pre>{JSON.stringify(dataApi, null, 2)}</pre>
    </div>
  );
};

export default App;
