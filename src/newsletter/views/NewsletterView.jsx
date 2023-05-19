import { Send } from "@mui/icons-material"
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { TableListUserSubs } from "../components"
import { useForm, useNewsletterStore } from "../../hooks"
import { useState } from "react"



const formData = {
    fromUser: "Newsletter APP :)",
    toUser: "noxus14@gmail.com",
    subject: "Ejemplo de asunto de correo",
    text: "Plaintext version of the message",
    html: "aqui va el html"
  }
  

export const NewsletterView = () => {

    const [ open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   const { startSendNewsletter } = useNewsletterStore();

   const {fromUser,toUser, subject, text, html, onInputChange} = useForm(formData);

   const onSend = (  ) => {
    handleOpen();
    startSendNewsletter({ fromUser,toUser, subject, text, html})

  }

  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
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
            Envio de email exitoso
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            su correo se envio a {toUser}
          </Typography>
        </Box>
      </Modal>

        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>{new Date().toDateString()}</Typography>
        </Grid>

        <Grid item>
            <Button 
                onClick={ onSend }
                color="primary" 
                sx={{ padding: 2}}
            >
            <Send sx={ { fontSize: 30, mr: 1 } } />
                Enviar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type='text'
                variant="filled"
                fullWidth
                placeholder="from"
                label='fromUser'
                sx={{ border: 'none', mb:1}}
                value={ fromUser }
                onChange={ onInputChange }
            />

            <TextField 
                type='text'
                variant="filled"
                fullWidth
                placeholder="Destinatarios"
                label='toUser'
                sx={{ border: 'none', mb:1}}
                value={ toUser }
                onChange={ onInputChange }
             
            />
             <TextField 
                type='text'
                variant="filled"
                fullWidth
                placeholder="subject"
                label='subject'
                sx={{ border: 'none', mb:1}}
                value={ subject }
                onChange={ onInputChange }
            />

            <TextField 
                type='text'
                variant="filled"
                fullWidth
                multiline
                placeholder="texto"
                label='text'
                minRows={ 3 }
                sx={{ border: 'none', mb:1}}
                value={ text }
                onChange={ onInputChange }
            />

            <TextField 
                type='text'
                variant="filled"
                fullWidth
                multiline
                placeholder="html"
                label='html'
                minRows={ 5 }
                sx={{ border: 'none', mb:1}}
                value={ html }
                onChange={ onInputChange }
            />
        </Grid>

        
      {/*** TODO: verificar porque se rompe
       * <TableListUserSubs />  */} 

    </Grid>
  )
}
