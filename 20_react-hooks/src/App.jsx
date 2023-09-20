import React, { useState } from "react";

const App = () => {
  const nama = "Barnando";

  // state == data
  // let umur = 27;
  const [umur, setUmur] = useState(27);
  const [info, setInfo] = useState({
    pekerjaan: "Developer",
    hobby: "Beryanyi"
  });
  const asal = "solo";

  const handleEditUmur = () => {
    setUmur(umur + 1);
  };

  const handleGantiHobby = jenisHobby => {
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        hobby: jenisHobby
      };
    });
  };

  return (
    <div>
      <h1>Informasi Pegawai</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nama</td>
            <td>Umur</td>
            <td>Asal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{asal}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleEditUmur}>Tambah umur</button>
      <pre>{JSON.stringify(info, null, 2)}</pre>
      <button onClick={() => handleGantiHobby("Lukis")}>Hobby Lukis</button>
      <button onClick={() => handleGantiHobby("Makan")}>Hobby Makan</button>
    </div>
  );
};

export default App;
