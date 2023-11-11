import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {

    },
    Card: {
        marginVertical:25,
        padding: 15,
        width: 250,
        height:100,
        borderRadius:10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgb(47, 154, 235)'
    },
    appName:{
        textAlign:'center',
        fontSize:20,
        fontWeight:"700",
        color:'rgb(47, 154, 235)'
    },
    cardTitle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:"700"
    },
    cardDescription:{
        textAlign:'center',
        fontSize:12,
        fontWeight:"400"
    }

})