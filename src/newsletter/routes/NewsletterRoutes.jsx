import { Navigate, Route, Routes } from 'react-router-dom'
import { NewsletterPage } from '../pages/NewsletterPage'

export const NewsletterRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <NewsletterPage /> } />

             <Route path='/*' element= {<Navigate to="/" />} />
        </Routes>
      )
}
