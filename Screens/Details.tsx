import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { API_KEY, BASE_URL, IMAGE_BASE_URL, VIDEO_URL } from "../constants/Constants";
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { Result, VideosDataClass } from "../interface/VideosDataClass";
import { Trailers } from "../components/Trailers";
import ReadMore from '@fawazahmed/react-native-read-more';
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Details = ({navigation, route}) =>{
    const { 
        title, 
        poster_path , 
        vote_average, 
        overview, 
        release_date, 
        id, 
        backdrop_path,
    } = route.params;
    const [fetchVideo, setFetchVideo] = useState<Result[]>([])
    const [isThrillerLoading, setIsThrillerLoading] = useState(false)
    const [like, setLike] = useState(false)

    const [imageState, setImageState] = useState(poster_path)
    

    


    useEffect(() => {
        setIsThrillerLoading(true)
        axios.get<VideosDataClass>(`${BASE_URL}movie/${id}/${VIDEO_URL}`).then(function (response) {
            setFetchVideo(response.data.results)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            setIsThrillerLoading(false)
        })
    }, [])

    const changeSaveIconHandler = () => {
        setLike(!like)
    }

    const saveToDB = async () => {
        await AsyncStorage.setItem("IMAGE-KEY", imageState)
        setImageState(poster_path)
    }


    const saveMovieHandler = () => {
        changeSaveIconHandler()
        saveToDB()
    }



    return(
        <View style = {styles.container}>
            
            <ImageBackground
                imageStyle = {{opacity : 0.9}}
                style = {styles.image}
                source = {{uri : IMAGE_BASE_URL+poster_path}}/>
            <AntDesign name="arrowleft" size={24} color="white" style = {styles.backArrow} onPress = {() => navigation.goBack()}/>
            <TouchableOpacity  style = {styles.love} onPress = {saveMovieHandler}>
                <AntDesign name= {like ? "heart" : "hearto"} size={24} color="white"  />
            </TouchableOpacity>
            

            <View style = {styles.section}>
                <View style = {styles.titleContainer}>
                    <View>
                        <Text style = {styles.bold}>{title}</Text>
                        <Text>{release_date}</Text>
                    </View>

                    <View style = {styles.vote}>
                        <Text>{JSON.stringify(vote_average)}</Text>
                    </View>
                    
                </View>

                <View>
                    <Text style = {styles.bold}>Overview</Text>
                    <ReadMore  numberOfLines={3} style = {{textAlign : "justify"}}>{overview}</ReadMore>
                    
                </View>

                <View>
                    <Text style = {styles.bold}>Thrillers</Text>
                </View>

                {isThrillerLoading ? <ActivityIndicator size = "large" color = "red"/> : null} 
                    
                    <FlatList showsVerticalScrollIndicator = {false}
                        data = {fetchVideo}
                        keyExtractor = {(item) => `key-${item.id}`}
                        renderItem = {(item) => {
                            return(
                                <Trailers
                                    name = {item.item.name}
                                    backdrop_path = {backdrop_path}
                                    key = {item.item.key}
                                    id = {item.item.key}
                                    
                                />
                            )
                        }}/>
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
        justifyContent : "space-between",
    },

    vote : {
        padding : 10,
        backgroundColor : "red",
        borderRadius : 50
    },

    bold : {
        fontSize : 20,
        fontWeight : "bold"
    },

    love : {
        position : "absolute",
        right : 0,
        top : Constants.statusBarHeight,
        padding : 15,
        zIndex : 1
    }

})