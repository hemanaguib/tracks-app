import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation})=> {
    return <>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
    <Button 
            title= "Go to Track details"
            onPress={()=> navigation.navigate('TrackDetails')}
    />
    </>    
};

const styles = StyleSheet.create({

});

export default TrackListScreen ;