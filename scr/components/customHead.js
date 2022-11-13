import { Dimensions, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/colors";
import { useSelector } from "react-redux";

const { height, width} = Dimensions.get("window");

const CustomHead = () =>{

    return(
        <View style={style.container}>
            <Text style={style.textHead}>SNHU</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: width,
        height: height * 0.06,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    textHead:{
        color: "#fff",
        fontSize: 24,
        fontFamily: "Oswald-Bold",
    },
})

export default CustomHead;