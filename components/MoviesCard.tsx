import React from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { IMAGE_BASE_URL } from "../constants/Constants";
import { Result } from "../interface/MoviesDataClass";
import { useNavigation } from '@react-navigation/native';



export const MoviesCard : React.FC<Result> = ({
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count
}) => {

    const navigation = useNavigation();

    return(
        <TouchableWithoutFeedback onPress = {() => 
            navigation.navigate("Details",
                {
                    title : title,
                    poster_path : poster_path, 
                    original_title : original_title, 
                    vote_average : vote_average, 
                    overview: overview, 
                    release_date : release_date, 
                    id : id, 
                    backdrop_path : backdrop_path,
                    popularity : popularity
                })}>
            <View style ={styles.container}>
                <Image source = {{uri : IMAGE_BASE_URL+poster_path}} style = {styles.image}/>  
                <Text style = {styles.bold}>{title}</Text>       
            </View>
        </TouchableWithoutFeedback>     
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom : 20,
        alignItems : "center",
        justifyContent : "center",
    
    },

    image : {
        width : 312,
        height : 513,
        resizeMode : "cover",
        borderRadius : 20
    },
    bold : {
        fontSize : 20,
        fontWeight : "bold",
    }
})