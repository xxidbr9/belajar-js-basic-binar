import React, { useEffect, useState } from "react";

const App_useEffect = () => {
  const [nilaiPKN, setNilaiPKN] = useState(0);

  // effect samping
  useEffect(() => {
    if (nilaiPKN % 2 === 0) {
      alert("Nilai Genap");
    }
  }, [nilaiPKN]); // [] dependency -> data yang di pantau perbuhannya

  return (
    <div>
      <div>Nilai PKN Anda {nilaiPKN}</div>
      <button onClick={() => setNilaiPKN(prev => prev + 1)}>
        Tambah Nilai
      </button>
      {nilaiPKN % 2 == 0 && <UnMountComponent />}
      <div>{nilaiPKN % 2 == 0 ? "Genap" : "Ganjil"}</div>
    </div>
  );
};

export default App_useEffect;

// unmount => component hilang dari dom
const UnMountComponent = () => {
  // clean up function,
  // sebelum component hilang, maka return ini jalan
  useEffect(() => {
    alert("Hello muncul");
    return () => {
      // return function ini berjalan ketika component yang sekarang, unmount
      alert("unmount / re render / render ulang");
    };
  }, []);

  return <div>Hello</div>;
};
