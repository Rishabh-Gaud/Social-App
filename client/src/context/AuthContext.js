import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user:{
        "profilePicture": "person/5.jpeg",
        "coverPicture": "",
        "followers": [],
        "followings": ["60f95bde3db3f5263808ccf9","60fd0c18cf59b937f83bc430"],
        "isAdmin": false,
        "_id": "60f95c1f3db3f5263808ccfb",
        "username": "gaud",
        "email": "test1@gmail.com",
       
        "desc": "this is rishabh profile"
    },
    isfetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{
            user:state.user,
            isfetching:state.isfetching,
            error:state.error,
            dispatch,
            
        }}>
{children}
        </AuthContext.Provider>
    )
}