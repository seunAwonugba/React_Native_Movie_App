import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Result } from "../interface/VideosDataClass";
import YoutubePlayer from "react-native-youtube-iframe";

export const Trailers : React.FC<Result> = ({
    name,
    id
}) => {
    
    return(
        <View style = {styles.container}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={`${id}`}
            />
                
            <Text style = {styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginBottom : 10,
    }, 
    name : {
        flexWrap : "wrap",
        width : "100%"
    },
})