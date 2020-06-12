import React from 'react'
import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'

const MyButton = props => {
   
    return (

        <TouchableOpacity style={styles.buttonStyle} onPress ={props.Click}>
        
            <Text style={styles.textStyle}>{props.myTittle}</Text>
        
        </TouchableOpacity>
    
    )

}

const styles = StyleSheet.create({

buttonStyle : {

    backgroundColor : 'gray',
    width: Dimensions.get("window").width * 2/5,
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent:'center',
    borderRadius : 15,
    margin : 8,
   
   
},
  
textStyle : {
    fontWeight : 'bold',
    fontSize : 15,
    color : 'white'
  
}          
})
export {MyButton}