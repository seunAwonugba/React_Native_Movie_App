import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

export const SavedMovies = () => {
    const [fav, setFav] = useState()
    const emptyFavList = () => {
        return(
            <View style = {styles.emptyContainer}>
                <Text>
                    Your Favourite list is empty
                </Text>

            </View>
        )
    }



    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Favourite Movies</Text>

            <FlatList
                data = {fav}
                keyExtractor = {(item) => `key-${item.id}`} 
                renderItem = {(item) => {
                    return(
                        <>
                        </>
                    )
                }}
                ListEmptyComponent = {emptyFavList()}/>
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

    },

    emptyContainer: {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
})