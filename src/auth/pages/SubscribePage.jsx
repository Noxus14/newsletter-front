import { Link as RouterLink} from 'react-router-dom'
import { Alert, Box, Button, Grid, Link, Modal, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useAuthStore } from '../../hooks';
import { useSelector } from 'react-redux';

const formData = {
  email: 'test@gmail.com',
  displayName: 'Cesar Martinez'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],

}

export const SubscribePage = () => {

    const { startSubscribe } = useAuthStore();
    const [formSubmitted, setFormSubmitted ] = useState(false);
  
    const { status, errorMessage } = useSelector( state => state.auth);

    const [ open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { 
      displayName, email, onInputChange, formState,
      isFormValid, displayNameValid, emailValid 
    } = useForm(formData, formValidations);
  
  
    const onSubmit = ( event )=> {
      event.preventDefault();
      setFormSubmitted(true)
      if( !isFormValid) return;
      startSubscribe({email, name: displayName});
      handleOpen();
      console.log(formState)
    }

  return (
    <AuthLayout title="Subscribirse">
    <form onSubmit={ onSubmit } >
          <Grid container>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Subscripción realizada.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                La persona { displayName } ha sido subscrita con el siguiente correo: { email }
              </Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Regresar
              </Link>
            </Box>
          </Modal>

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
                    Subscribirse
                  </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>No deseas subscribirte?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Regresar
              </Link>
            </Grid>

          </Grid>
      </form>
   </AuthLayout>
  )
}
