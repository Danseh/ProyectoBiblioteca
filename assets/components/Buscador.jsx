import React, { useState } from 'react';

const Buscador = ({ setJsonData }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const getInfo = async () => {
    try {
      const url = `http://127.0.0.1:8000/api/libros?titulo=${searchKeyword}`;
      let respuesta = await fetch(url);
      let data = await respuesta.json();
      console.log(data);
      setJsonData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword.length === 0) {
      return;
    }
    getInfo();
  }

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  }
  

  return (
    <form className="formBuscador" onSubmit={handleSubmit}>
      <input type="search" value={searchKeyword} onChange={handleChange} name="inputBuscador" className="form-control" id="inputBuscador" />
      <button type="submit" name="btnBuscar" className="btn btn-primary mt-0 ml-2" id="btnBuscar">Buscar por Título</button>
    </form>
  )
}

export default Buscador