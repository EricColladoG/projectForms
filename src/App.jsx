/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import MyForm from './components/MyForm';
import './index.css'; // Asegúrate de importar tu archivo de estilos

const App = () => {
  return (
    <div className="app-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/world.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="form-title">
        <h1>Formulario</h1>
      </div>
      <div className="form-container">
        <MyForm />
      </div>
    </div>
  );
};

export default App;
