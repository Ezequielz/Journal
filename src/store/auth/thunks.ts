import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";



export const checkingAuthentication = (email: string,password: string) => {
    return async function ( dispatch: any ){
      
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async function ( dispatch: any ){
      
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        // delete result.ok
        dispatch(login( result ))
    }
}


