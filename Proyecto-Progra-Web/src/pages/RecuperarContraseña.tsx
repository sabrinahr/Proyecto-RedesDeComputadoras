import React from 'react';
import '../tailwind.css';
import { useNavigate } from 'react-router-dom';

const RecuperarContraseña: React.FC = () => {

  const navigate = useNavigate();
  
  const redirectClick = () => {
    navigate('/');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col items-center border-none rounded-xl bg-white p-10 pb-5">
        <h1 className="text-3xl font-bold text-gray-700 mb-10">Nueva contraseña</h1>
        <input className="border border-gray-400 rounded px-4 py-2 w-64 w-84 my-2" type="text" placeholder="Nueva contraseña"/>
        <input className="border border-gray-400 rounded px-4 py-2 w-64 w-84 my-2" type="text" placeholder="Re-escribir nueva contraseña"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-84 mt-7 hover:bg-blue-600 active:bg-blue-700 cursor-pointer transition duration-200" type="button" onClick={redirectClick}>Aceptar</button>
      </div>
    </div>
  );
};

export default RecuperarContraseña;