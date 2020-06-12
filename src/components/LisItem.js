import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const LisItem = props => {
   
  return(
        
    props.listData.note ? 

        <TouchableOpacity style ={styles.container} onPress ={props.upDate} >
       
            <View style={styles.noteStyle}>
                    <View style={styles.dot} />
                    <Text style={styles.textStyle}>{props.listData.note}</Text>
            </View> 
            
            <Text>
                    {
                        props.listData.isDone ? "Yapıldı" : "Yapılmadı!"
                    }
            </Text>  

        </TouchableOpacity>

    : null
    
    )
}
const styles = StyleSheet.create({

    container : {
        flex : 1,
        flexDirection:'row',
        alignItems : 'center',
        backgroundColor:'#f5f5f5',
        borderRadius : 25,
        justifyContent:'space-between',
        paddingRight: 10,
        margin : 5,
    
   },
    
   noteStyle : {
        flex: 4,
        flexDirection:'row' ,
        alignItems:'center',
        margin:7,
        marginLeft : 15,
    
    },

     dot : {
        backgroundColor:'black',
        width: 12,
        height: 12,
        borderRadius : 10
    },


     textStyle : {
        flex : 1 ,
        fontSize : 18,
        fontStyle :'italic',
        marginLeft : 10,
        color : '#424242'
    }

})



export  {LisItem}