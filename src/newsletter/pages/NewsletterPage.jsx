import { IconButton, Typography } from '@mui/material';
import { NewsletterLayout } from '../layout/NewsletterLayout';

import { AddOutlined } from '@mui/icons-material';
import { NewsletterView } from '../views';


export const NewsletterPage = () => {
  return (
    <NewsletterLayout>

      <NewsletterView />

    <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover':{ backgroundColor: 'error.main', opacity: 0.8},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>

    </NewsletterLayout>
  )
}
