import React,{useState} from 'react'
import {FlatList,SafeAreaView,View, StyleSheet,ScrollView} from 'react-native' 
import {MyButton,InputText,LisItem} from './src/components/index'

function  List (props) {
    
        const data = [{note : '' ,  isDone : Boolean },]
    
        const
            [entry , setEntry] = useState(""),
            [list , setlist] = useState(data),
    
    changeText = (text) => {
        setEntry (text)
    
    }
 
    addList =()=> {
    
        let newlist = [...list]
        newlist.push({note : entry})
        setlist(newlist)
    
    }


    upDateDone =(i)=>{
       
        let newlist = [...list]
        newlist.map((item,index) => {
            if(index==i){
            return  item.isDone=true 
            }
              
        })
        setlist(newlist)
      
    }



    return(

        <SafeAreaView >
           
            <View style ={styles.inputStyle}>
                
                <InputText  myChange={changeText} placeholder="Notunuz" />
                <MyButton Click = {addList} myTittle ="Ekle" />
            
            </View>
            
            <ScrollView>
            
                <View style={styles.listStyle}>

                    <FlatList 
                    keyExtractor = {(item,index) => index.toString()}
                    data = {list}
                    renderItem = {({ item,index}) => <LisItem listData = {item} upDate = {() => upDateDone(index) }/> }
                    />

                </View>

            </ScrollView>

        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    listStyle : {
        marginHorizontal : 25,
        marginBottom : 20
    },
    
    inputStyle : {
        flexDirection : 'row',
        justifyContent :'space-between'
    }
    
})
export default List