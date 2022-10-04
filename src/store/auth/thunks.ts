import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";



export const checkingAuthentication = (email: string,password: string) => {
    return async function ( dispatch: any ){
      
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async function ( dispatch: any ){
      
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        console.log({result})
    }
}


