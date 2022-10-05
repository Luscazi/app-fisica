import { useState, useEffect } from 'react';
import API from '../Services/API';

const useCategorias = (expoToken) => {
  const [carregando, setCarregando] = useState(false);
  const [categorias, setCategorias] = useState([]);

  async function atualizar() {
    await expoToken;
    setCarregando(true);
    const { data } = await API.get(`categoria/${expoToken._W.data}`);
    setCategorias(data);
    setCarregando(false);
  }

  useEffect(() => {
    atualizar();
  }, []);

  return { carregando, categorias, atualizar };
};

export default useCategorias;
