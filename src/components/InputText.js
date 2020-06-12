import React from 'react'
import {TextInput,View,StyleSheet, Dimensions} from 'react-native'

const InputText = props =>{
   
    return (
            
            <View style={styles.container}>
               
                <TextInput
                
                placeholder ={props.placeholder}
                onChangeText = {props.myChange}
                autoCapitalize="none"
               
               />
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#babdbe',
        borderRadius : 15,
        margin : 10,
        paddingLeft : 10,
        paddingRight : 10,
        fontSize : 15,
        width : Dimensions.get('window').width / 2,
        fontWeight : 'bold'
        
    }
})
export  {InputText}