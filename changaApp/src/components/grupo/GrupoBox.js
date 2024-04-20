import React, { useDebugValue } from 'react'
import {View,Text,StyleSheet, Image, TextInput,TouchableWithoutFeedback,Button, SafeAreaView, KeyboardAvoidingView,Keyboard, Platform, FlatList,} from "react-native"
import pic from "../../assets/20230123_213701.jpg"
import { resetGrupo } from '../../features/grupoSlice'
import { useDispatch } from 'react-redux'


function BubbleMessage({author,message}){
        return(
            <View
            style={{
                maxWidth:"80%",
                borderRadius:15,
                padding:10,
                alignSelf:author === "user"? "flex-start":"flex-end",
                backgroundColor:author === "user"? "#121212" : "#007AFF",
            }}>
                <Text style={{
                    color:author === "user"? "#f6f6f6" : "#222"
                }}>{message}</Text>
            </View>
        )
}

const GrupoBox = ({grupo}) => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                    alt='group pic'
                    source={pic}
                    style={styles.pic}/>
                    <Text style={styles.title}>{grupo.club.toUpperCase()}</Text>
                    <Text style={styles.title}>{grupo.division}</Text>
                </View>
                <KeyboardAvoidingView
                style={{flex:1}}
                
                keyboardVerticalOffset={Platform.OS === "ios" ? "padding" : undefined}
                behavior='padding'>
                <FlatList
                style={{flex:1}}
                data={conversation}
                keyExtractor={(_,index)=>index.toString()}
                renderItem={({ item })=> <BubbleMessage author={item.author} message={item.message} />} 
                contentContainerStyle={{paddingHorizontal:10, gap:10}}
                />
                <Button title='reset' onPress={()=>dispatch(resetGrupo())}></Button>
            <TextInput 
                placeholder='Enter a message'
                style={{
                    padding:15,
                    color:"#000",
                    borderRadius:10
                }}
            />
                </KeyboardAvoidingView>
            </View>            
        </SafeAreaView>
    )
}

const conversation = [
    {author:"bot",message:"sijdisjdisdjisdj"},
    {author:"user",message:"helloo how are u"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
    {author:"bot",message:"fine hbu"},
    {author:"user",message:"fine hbu"},
]

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#f6f6f6"
    },
    header:{
        backgroundColor:"#c9c9c9",
        marginBottom:25,
        flexDirection:"row",        
        alignContent:"center",
        alignItems:"center",

    },
    title:{
        padding:15,
    },
    pic:{
        width:40,
        height:40,
        borderRadius:20
    }
});

export default GrupoBox