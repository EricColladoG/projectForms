import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Formulario from './components/Formulario';
import Resultados from './components/Resultados';

function App() {
  return (
    <Router>
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
