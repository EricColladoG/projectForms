import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormStore } from '../store/useFormStore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';

const Resultados = () => {
  const registros = useFormStore((state) => state.registros);
  const navigate = useNavigate();

  const handleNuevoRegistro = () => {
    navigate('/');
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px', width: '60%', margin: '0 auto' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Datos Registrados
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Correo Electrónico</b></TableCell>
            <TableCell><b>Edad</b></TableCell>
            <TableCell><b>Fecha de Nacimiento</b></TableCell>
            <TableCell><b>Estado Civil</b></TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {registros.map((registro, index) => (
            <TableRow key={index}>
              <TableCell>{registro.nombre}</TableCell>
              <TableCell>{registro.correo}</TableCell>
              <TableCell>{registro.edad}</TableCell>
              <TableCell>{registro.fechaNacimiento}</TableCell>
              <TableCell>{registro.estadoCivil}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button variant="contained" color="warning" onClick={handleNuevoRegistro}>
          Nuevo Registro
        </Button>
      </Box>
    </TableContainer>
  );
};

export default Resultados;
