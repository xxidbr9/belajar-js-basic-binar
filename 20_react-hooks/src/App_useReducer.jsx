import React, { useReducer } from "react";
import { dummyState } from "./dummy";
// init => nilai awal dari reducer
// action => data yang dikirim di dalam argument dispatch
const reducer = (init, action) => {
  console.log(init, action);

  // return harus seusai data init
  return {
    ...action.payload
  };
};

const initialState = { nama: "Barnando" };

const CONSTANT_TYPES = {
  EDIT_AGE: "EDIT_AGE",
  EDIT_NAME: "EDIT_NAME",
  EDIT_CITY: "EDIT_CITY",
  EDIT_COMPANY: "EDIT_COMPANY"
};

const reducerBestPractice = (initState, action) => {
  switch (action.type) {
    case CONSTANT_TYPES.EDIT_AGE: {
      return {
        ...initState,
        age: action.payload
      };
    }

    case CONSTANT_TYPES.EDIT_CITY: {
      return {
        ...initState,
        city: action.payload.city
      };
    }

    case CONSTANT_TYPES.EDIT_NAME: {
      return {
        ...initState,
        name: action.payload
      };
    }

    default:
      return initState;
  }
};

const initialStateBestPractice = {
  name: "Barnando",
  age: 27,
  city: "Solo",
  company: "Binar"
};

const App_useReducer = () => {
  // dispatch => mirip seperti set State
  // const [data, dispatch] = useReducer(reducer, initialState);
  const combineData = { ...initialStateBestPractice, ...dummyState };
  const [data, dispatch] = useReducer(reducerBestPractice, combineData);

  return (
    <div>
      <div>App_useReducer</div>

      <button
        onClick={() =>
          dispatch({ type: "TAMBAH", payload: { nama: "Nando" } })
        }>
        Handle Rubah Data
      </button>
      <div>
        <button
          onClick={() =>
            dispatch({ type: CONSTANT_TYPES.EDIT_AGE, payload: data.age + 1 })
          }>
          Tambah Umur 1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: CONSTANT_TYPES.EDIT_CITY,
              payload: { city: "Bandung" }
            })
          }>
          Ganti Kota Bandung
        </button>
        <button
          onClick={() =>
            dispatch({
              type: CONSTANT_TYPES.EDIT_CITY,
              payload: { city: "Jakarta" }
            })
          }>
          Ganti Kota Jakarta
        </button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App_useReducer;
