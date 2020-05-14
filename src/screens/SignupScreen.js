import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../componants/spacer';
import {Context} from "../context/AuthContext";
import { color } from 'react-native-reanimated';

const SignupScreen = ({navigation})=> {
    const {state, signup} = useContext(Context);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3 style={styles.text}>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer />
        <Input
            placeholder='Email'
            leftIcon={{ type: 'font-awesome', name: 'envelope-open' }}
            autoCapitalize="none"
            autoCorrect= {false}
            value={email}
            onChangeText={setEmail}
        />
        <Input
            secureTextEntry
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect= {false}
        />
        
        {state.errorMessage?
        <Spacer>
        <Text style={{fontSize: 16, color:'red'}}>{state.errorMessage}</Text>
        </Spacer>
        :null}

        <Spacer>
            <Button 
            title="Sign Up" 
            onPress={()=>{
                signup({email, password})}
            }
            />
        </Spacer>
    </View>
};

SignupScreen.navigationOptions = ()=> {
    return {
        headerShown: false    
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    text:{
        textAlign: 'center'
    }
});

export default SignupScreen ;