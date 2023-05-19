import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NewsletterRoutes } from '../newsletter/routes/NewsletterRoutes'
import { useAuthStore } from '../hooks'


export const AppRouter = () => {

  const { status } = useAuthStore();


  return (
    <Routes>
      {
        ( status === 'authenticated')
        ? <Route path="/*"  element={ <NewsletterRoutes /> }/>
        : <Route path="/auth/*"  element={ <AuthRoutes /> }/>
      }
    </Routes>
  )
}
