import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { IMAGE_BASE_URL } from "../constants/Constants";
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';


export const Details = ({navigation, route}) =>{
    const { title, poster_path , original_title, vote_average, overview, release_date} = route.params;

    return(
        <View style = {styles.container}>
            
            <ImageBackground
                imageStyle = {{opacity : 0.9}}
                style = {styles.image}
                source = {{uri : IMAGE_BASE_URL+poster_path}}/>
            <AntDesign name="arrowleft" size={24} color="white" style = {styles.backArrow} onPress = {() => navigation.goBack()}/>

            <View style = {styles.section}>
                <View style = {styles.titleContainer}>
                    <View>
                        <Text>{title}</Text>
                        <Text>{release_date}</Text>
                    </View>

                    <View style = {styles.vote}>
                        <Text>{JSON.stringify(vote_average)}</Text>
                    </View>
                    
                </View>

                <View>
                    <Text>Overview</Text>
                    <Text style = {{textAlign : "justify"}}>{overview}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : Constants.statusBarHeight
    },

    backArrow : {
        position : "absolute",
        top : Constants.statusBarHeight,
        padding : 15,
        zIndex : 1
    },

    section : {
        padding : "5%"
    },

    image : {
        height : 281,
        resizeMode : "cover"
    },

    titleContainer:{
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },

    vote : {
        padding : 10,
        backgroundColor : "red",
        borderRadius : 50
    }

})