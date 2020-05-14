import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";


const authReducer = (state, action) => {

    switch (action.type) {
        case "add_error":
          return { ...state, errorMessage: action.payload };
        case "signup":
          return { errorMessage: "", token: action.payload };
        default:
          return state;
      }
    };
const signup = dispatch=> async ({email, password})=> {
        try {
            const response = await trackerApi.post('/signup',{ email, password});
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({type: 'signup', payload: response.data.token});

            navigate('Signin');
        } catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong on signup'
            });
        }
    };


const signin = dispatch=>{
    return ({email, password})=>{
        //try to signin
        // Handle success by updating state
        // handle failure by showing error message somehow
    };
};

const signout = dispatch => {
    return ()=> {
        //Somehow signout
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    { signout, signin, signup},
    {token: null, errorMessage: ''}
);