import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks/useForm';
import { checkingAuthentication } from '../../store/auth';
import { useMemo, useState } from 'react';
import { useAuthStore } from '../../hooks';


const formData = {
  email: 'test@gmail.com',
  password: '13245678'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  password: [ (value) => value.length >= 8, 'El password debe de tener mas de 8 letras'],
}

export const LoginPage = () => {

  const { startLogin } = useAuthStore();

  const [formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)
    if( !isFormValid) return;
    startLogin({ email, password})
    //console.log({ email, password})
    dispatch( checkingAuthentication() )
  }


  return (
   <AuthLayout title="Login">
    <form onSubmit={ onSubmit }>
          <Grid container>
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
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 }  sm={ 6 }>
                  <Button variant='contained' fullWidth>
                    <Google />
                    <Typography sx={{ml:1}}> Google</Typography>
                  </Button>
                </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear cuenta
              </Link>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/subscribe'>
                Subscribirse
              </Link>
            </Grid>

          </Grid>
      </form>
   </AuthLayout>
  )
}
