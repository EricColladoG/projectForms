/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import useFormStore from './formStore';


const MyForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { formData, setFormData, resetFormData } = useFormStore();

  const onSubmit = (data) => {
    setFormData(data);  // Guarda los datos en el store de Zustand
    console.log(data);
    reset();
    resetFormData();  // Reinicia los datos en el store
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { required: 'El nombre es obligatorio' })}
        label="Nombre"
        variant="filled"
        margin="normal"
        color="success"
        fullWidth
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
        value={formData.name}  // Asigna el valor desde el store
        onChange={(e) => setFormData({ name: e.target.value })}  // Actualiza el valor en el store
      />
      <TextField
        {...register('lastname', { required: 'El apellido es obligatorio' })}
        label="Apellido"
        variant="filled"
        margin="normal"
        color="success"
        fullWidth
        error={!!errors.lastname}
        helperText={errors.lastname ? errors.lastname.message : ''}
        value={formData.lastname}
        onChange={(e) => setFormData({ lastname: e.target.value })}
      />
      <TextField
        {...register('email', { 
          required: 'El correo electrónico es obligatorio',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Formato de correo electrónico no válido'
          }
        })}
        label="Email"
        variant="filled"
        margin="normal"
        fullWidth
        color="success"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
        value={formData.email}
        onChange={(e) => setFormData({ email: e.target.value })}
      />
      <TextField
        {...register('password', { 
          required: 'La contraseña es obligatoria',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres'
          }
        })}
        label="Contraseña"
        type="password"
        variant="filled"
        margin="normal"
        fullWidth
        color="success"
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ''}
        value={formData.password}
        onChange={(e) => setFormData({ password: e.target.value })}
      />
      
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default MyForm;
