import React, { createContext, useContext, useState } from "react";

const App_useContext_tanpa = () => {
  const userInfo = { name: "Barnando" };
  return (
    <div>
      <Navbar user={userInfo} />
      <div>App_useContext</div>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
};

// export default App_useContext_tanpa;

const Navbar = props => {
  const { user } = props;
  return (
    <nav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>
          <ButtonProfile profile={user.name} />
        </li>
      </ul>
    </nav>
  );
};

const ButtonProfile = props => {
  const { profile } = props;
  return <button>Hallo {profile}</button>;
};

// dengan context, tidak memakai props
// normalnya UserContext ini di export, dan dipakai bersamaan dengan reducer, contoh redux
const UserContext = createContext(null);

const App_useContext_denganContext = () => {
  const userInfoState = { name: "Barnando" };
  const [userInfo, setUserInfo] = useState(userInfoState);

  // Provider => component yang memiliki data aslinya
  // component children yang ada di dalam Provider, itu semua bisa mengakses data dalam value dengan menggunakan useContext
  return (
    <UserContext.Provider value={userInfo}>
      <NavbarContext />
      <div>App_useContext</div>
      <InfoUserComp />
      <button onClick={() => setUserInfo(prev => ({ ...prev, name: "Nando" }))}>
        Ganti nama
      </button>
    </UserContext.Provider>
  );
};

const InfoUserComp = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default App_useContext_denganContext;

const NavbarContext = () => {
  // const { user } = props;
  return (
    <nav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>
          <ButtonProfileContext />
        </li>
      </ul>
    </nav>
  );
};

const ButtonProfileContext = () => {
  const {name} = useContext(UserContext);
  return <button>Hallo {name}</button>;
};
