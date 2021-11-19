    import React, { useEffect, useState } from "react";
    import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
    import Constants from 'expo-constants';
    import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_BASE_URL } from "../constants/Constants";

    export const SavedMovies = () => {
        const [passedMovie, setPassedMovie] = useState("")



        const getMovie = async () => {
            try {
            const value = await AsyncStorage.getItem('IMAGE-KEY');
            if (value !== null) {
                setPassedMovie(value)
            }
            } catch (error) {
            console.log(error)
            }
        };

        useEffect(() => {
            getMovie()
        }, [])

        return(
            <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.text}>Favourite Movies</Text>
                
                    <Image style = {styles.image} source={{uri: IMAGE_BASE_URL+passedMovie}}/>

                    {
                        !passedMovie.length ?
                        <View style = {styles.emptyContainer}>
                            <Text style = {styles.emptyText}>No movie</Text>
                        </View> : null
                    }
                
                
                
            </View>
            </ScrollView>
        )
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent : "center",
            alignItems : "center",
            paddingTop : Constants.statusBarHeight,
            flex : 1
        },

        text : {
            fontSize : 24,
            fontWeight : "bold",
            paddingVertical : 10

        },

        emptyContainer : {
            flex : 1,
            alignItems : "center",
            justifyContent : "center",
            position : "absolute"
        },

        emptyText: {
            fontSize : 24


        },

        image : {
            width : 312,
            height : 513,
            resizeMode : "cover",
            borderRadius : 20
        }




    })