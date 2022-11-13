import { Dimensions, StyleSheet } from "react-native";

import { Colors } from "../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    textBoton:{
        color: Colors.white,
        fontFamily: "Oswald-Medium",
        
    },
})