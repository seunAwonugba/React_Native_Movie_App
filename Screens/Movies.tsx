import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { MoviesInterface, Result } from "../interface/MoviesDataClass";
import axios from 'axios';
import { API_URL, BASE_URL } from "../constants/Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { MoviesCard } from "../components/MoviesCard";
import Constants from 'expo-constants';




export const Movies = ({navigation}) =>{

    const [apiResultDataClass, setApiResultDataClass] = useState<Result[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true) 
        axios.get<MoviesInterface>(BASE_URL+API_URL).then((response) => {
            setApiResultDataClass(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])
    
    
    //Note render item take extra (item)
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Catch up</Text>
                {isLoading ?<ActivityIndicator size = "large" color = "red"/> : null}
                    <FlatList showsVerticalScrollIndicator = {false} 
                        data = {apiResultDataClass} 
                        keyExtractor = {(item) => `key-${item.id}`} 
                        renderItem = {(item) => {return(
                        <MoviesCard
                            adult = {item.item.adult}
                            backdrop_path = {item.item.backdrop_path} 
                            genre_ids = {item.item.genre_ids} 
                            id = {item.item.id} 
                            original_language = {item.item.original_language} 
                            original_title = {item.item.original_title} 
                            overview = {item.item.overview} 
                            popularity = {item.item.popularity}
                            poster_path = {item.item.poster_path}
                            release_date = {item.item.release_date}
                            title = {item.item.title}
                            video = {item.item.video}
                            vote_average = {item.item.vote_average}
                            vote_count = {item.item.vote_count}
                        />)}}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent : "center",
        alignItems : "center",
        paddingTop : Constants.statusBarHeight,
    },

    text : {
        fontSize : 24,
        fontWeight : "bold",
        paddingVertical : 10

    }
})