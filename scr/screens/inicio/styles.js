import { Dimensions, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerdark:{
        flex: 1,
        backgroundColor: Colors.black,
    },
    containerDecoration:{
        width: width,
        height: height *0.04,
        backgroundColor: Colors.grey,
    },
    containerTitle:{
        alignItems: "center",
        //marginTop: 10,
        width: width,
        height: height * 0.06,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle:{
        fontSize: 16,
        fontFamily: "Oswald-Bold",
    },
    containerScrollButton:{
        //marginTop: height * 0.007,
    },
    containerButton:{
        //backgroundColor: Colors.green,
        alignItems: "center",
    },
    containerRowButton:{
        flexDirection: "row",
        flex: 1,
    },
    description:{
        flex: 1,
        justifyContent: "center",
        marginLeft: width * 0.1,
    },
    icon:{
        justifyContent: "center",
        marginRight: height * 0.01,
    },
    button:{
        height: height * 0.15,
        width: width * 0.87,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: height * 0.03,
    },
    textOption:{
        fontSize: 16,
        fontFamily: "Oswald-Bold",
        color: Colors.white,
        marginVertical: 5,
    },
    textDescription:{
        fontSize: 12,
        fontFamily: "Inter-Regular",
        color: Colors.white,
        marginVertical: 5,
    },
})