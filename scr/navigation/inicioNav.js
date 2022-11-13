import { Inicio, SeeUsers, SelectOptions, Sells } from "../screens";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "../constants/colors";
import { Lenguage } from "../constants/lenguage";
import { LogOut } from "../store/actions";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./styles";

const Stack = createNativeStackNavigator();

const InicioNav = () =>{

    const dispatch = useDispatch();

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    const onLogOut = () =>{
      dispatch(LogOut("", null, "", ""));
    };

    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen 
                name="Inicio" 
                component={Inicio} 
                options={{
                    title: "SNHU",
                    image: "./assets/snhu-logo-long-white.png",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>{msg.msgCerrarSesion}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SelecOptionNav" 
                component={SelectOptions} 
                options={{
                    title: "SNHU",
                    image: "./assets/snhu-logo-long-white.png",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>{msg.msgCerrarSesion}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SellsNav" 
                component={Sells} 
                options={{
                    title: "SHNU",
                    image: "./assets/snhu-logo-long-white.png",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>{msg.msgCerrarSesion}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SeeUsersNav" 
                component={SeeUsers} 
                options={{
                    title: "SNHU",
                    image: "./assets/snhu-logo-long-white.png",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>{msg.msgCerrarSesion}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default InicioNav;
