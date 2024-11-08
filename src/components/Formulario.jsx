import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography, MenuItem } from '@mui/material';
import { useFormStore } from '../store/useFormStore';

const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  correo: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  edad: Yup.number().positive('La edad debe ser un numero positivo').integer('La edad debe ser un numero en'),
  fechaNacimiento: Yup.date().nullable().min(new Date(1900, 0, 1)),
  estadoCivil: Yup.string().required('El estado civil es obligatorio'),

});

const estadosCiviles = [
    { value: 'soltero', label: 'Soltero' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Divorciado' },
    { value: 'viudo', label: 'Viudo' },
  ];

const Formulario = () => {
  const addRegistro = useFormStore((state) => state.addRegistro);
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    addRegistro(values); 
    resetForm(); 
    navigate('/resultados'); 
  };

  return (
    <Formik
      initialValues=
      {{ 
        nombre: '', 
        correo: '', 
        edad:'',
        fechaNacimiento: '',
        estadoCivil: 'soltero'
    }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
        <Typography variant="h3" component="h1" gutterBottom>
            Bienvenido
        </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="300px" margin="0 auto">
            <Field
              as={TextField}
              label="Nombre"
              name="nombre"
              variant="outlined"
              error={touched.nombre && Boolean(errors.nombre)}
              helperText={touched.nombre && errors.nombre}
              fullWidth
            />
            <Field
              as={TextField}
              label="Correo Electrónico"
              name="correo"
              type="email"
              variant="outlined"
              error={touched.correo && Boolean(errors.correo)}
              helperText={touched.correo && errors.correo}
              fullWidth
            />
            <Field
              as={TextField}
              label="Edad"
              name="edad"
              type="number"
              variant="outlined"
              error={touched.edad && Boolean(errors.edad)}
              helperText={touched.edad && errors.edad}
              fullWidth
            />
             <Field
              as={TextField}
              label="Fecha de Nacimiento"
              name="fechaNacimiento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={touched.fechaNacimiento && Boolean(errors.fechaNacimiento)}
              helperText={touched.fechaNacimiento && errors.fechaNacimiento}
              fullWidth
            />
   <Field
              as={TextField}
              label="Estado Civil"
              name="estadoCivil"
              select
              variant="outlined"
              error={touched.estadoCivil && Boolean(errors.estadoCivil)}
              helperText={touched.estadoCivil && errors.estadoCivil}
              fullWidth
            >
              {estadosCiviles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
            <Button variant="contained" color="primary" type="submit">
              ENVIAR
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
