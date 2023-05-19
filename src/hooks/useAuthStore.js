import { useDispatch, useSelector } from 'react-redux';
import { newsletterApi } from '../api';
import { checkingCredentials, login, logout, subscribe } from '../store/auth';


export const useAuthStore = () => {

    const { status } = useSelector( state => state.auth);
    const dispath = useDispatch();

    const startLogin = async( { email, password} ) => {
        dispath( checkingCredentials() );
        try {
            const { data } = await newsletterApi.post('/login', { email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispath( login({ displayName: data.displayName, id: data.id }) );
            console.log(data);
        } catch(error) {
            const { response } = error;
            console.log(response);
            dispath( logout({errorMessage: response.data.msg}) )  
        }
    }


    const startRegister = async({email, password, name}) => {
        dispath( checkingCredentials() );
        try{
            const { data } = await newsletterApi.post('/register', { idRole: 1,name, email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispath( login({name: data.displayName, id: data.id, }) )
        }catch(error){
            const { response } = error;
            dispath( logout({errorMessage: response.data.msg}) )   
        }
    }

    const startSubscribe = async({email, name}) => {
        try{
            const { data } = await newsletterApi.post('/subscribe', { idRole: 2,name, email});
            dispath( subscribe({name: data.displayName, id: data.id, }) )
        }catch(error){
            const { response } = error;
            dispath( logout({errorMessage: response.data.msg}) )   
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispath( logout({errorMessage: null}))
    }


    return {
        status,

        startLogin,
        startRegister,
        startLogout,
        startSubscribe
    }

}


