import { Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useAuthStore } from '../../hooks';
import { useSelector } from 'react-redux';

const formData = {
  email: 'test@gmail.com',
  password: '123456',
  displayName: 'Cesar Martinez'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  password: [ (value) => value.length >= 8, 'El password debe de tener mas de 8 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],

}

export const RegisterPage = () => {

  const { startRegister } = useAuthStore();
  const [formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth);

  const { 
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid 
  } = useForm(formData, formValidations);


  const onSubmit = ( event )=> {
    event.preventDefault();
    setFormSubmitted(true)
    if( !isFormValid) return;
    startRegister({email, password, name: displayName})
    //console.log(formState)
  }

  return (
   <AuthLayout title="Registro">
    <form onSubmit={ onSubmit } >
          <Grid container>

          <Grid item xs={ 12 } sx={ {mt: 2} }>
                <TextField 
                  label="Nombre completo" 
                  type="text"
                  placeholder='Nombre completo'
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange } 
                  error = { !!displayNameValid && formSubmitted }
                  helperText={ displayNameValid }
                />
            </Grid>

            <Grid item xs={ 12 } sx={ {mt: 2} }>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder='correo@gmail.com'
                  fullWidth 
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  error = { !!emailValid && formSubmitted}
                  helperText={ emailValid }
                  />
            </Grid>

            <Grid item xs={ 12 } sx={ {mt: 2} }>
                <TextField 
                  label="Contraseña" 
                  type="password"
                  placeholder='Contrase;a'
                  fullWidth 
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  error = { !!passwordValid && formSubmitted}
                  helperText={ passwordValid }
                  />
            </Grid>

            <Grid container spacing={ 2 } sx={{mb:2, mt: 1}}>
                
                <Grid item 
                  xs={ 12 }
                  display = { !!errorMessage ? '':'none'}
                >
                  <Alert severity = 'error' >{ errorMessage }</Alert>
                </Grid>
                
                <Grid item xs={ 12 }  sm={ 6 }>
                  <Button 
                    type="submit"
                    variant='contained' 
                    fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
      </form>
   </AuthLayout>
  )
}
