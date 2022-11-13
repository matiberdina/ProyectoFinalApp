import { Dimensions, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

const { widht, heigth } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 5,
        paddingRight: 10,
    },
    textDescription:{
        fontFamily: "Oswald-Bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15,
    },
    textInfo:{
        fontFamily: "Oswald-Medium",
        marginLeft: 40,
    },
}) 