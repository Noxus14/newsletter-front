import { useDispatch } from "react-redux"
import { newsletterApi } from "../api";
import { sendNewsletter, listUserNewsletter } from '../store/newsletter'

export const useNewsletterStore = () => {
  
    const dispath = useDispatch();


    const startSendNewsletter = async ( {category = 'Testeo', fromUser, toUser, subject, text, html} ) => {

        try{
        const { data } = await newsletterApi.post('/send', { category,fromUser, toUser, subject, text, html});
        //dispath( sendNewsletter(data) )
       // console.log(data);

        }catch(error){
            const { response } = error;
            console.log(response);
        }


    }

    const startListUserNewsletter = async () => {
        try {   
            const { data } = await newsletterApi.get('/listUserNewsLetter');
            dispath( listUserNewsletter( { listUser: data } ) );
           // console.log(data);

        }catch(error){
            const { response } = error;
            console.log(response);
        }
    }
  
  
  
    return {
        startSendNewsletter,
        startListUserNewsletter
    }
}
