import { Text, View } from "react-native";

import { Lenguage } from "../../constants/lenguage";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const RenderItemSells = ({item}) =>{

        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];

    return(
        <View style={styles.container}>

                <Text style={styles.textDescription}>{msg.msgNombreAlumno}:</Text>
                <Text style={styles.textInfo}>{item.nombreAlumno}</Text>


                <Text style={styles.textDescription}>{msg.msgApellidoAlumno}:</Text>
                <Text style={styles.textInfo}>{item.apellidoAlumno}</Text>

                <Text style={styles.textDescription}>{msg.msgFechaDeNac}:</Text>
                <Text style={styles.textInfo}>{item.fechaDeNacimiento}</Text>

                <Text style={styles.textDescription}>{msg.msgDNI}:</Text>
                <Text style={styles.textInfo}>{item.DNI}</Text>

                <Text style={styles.textDescription}>{msg.msgCalle}:</Text>
                <Text style={styles.textInfo}>{item.calle}</Text>

                <Text style={styles.textDescription}>{msg.msgNumeroCel}:</Text>
                <Text style={styles.textInfo}>{item.numeroCel}</Text>

                <Text style={styles.textDescription}>{msg.msgProducto}:</Text>
                <Text style={styles.textInfo}>{item.producto}</Text>

                <Text style={styles.textDescription}>{msg.msgObser}:</Text>
                <Text style={styles.textInfo}>{item.observaciones}</Text>

        </View>
    )
}

export default RenderItemSells;