import React, {useState} from "react";

import { Lenguage } from "../../constants/lenguage";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PickerProduct = ({selectFirst, setSelectSecond}) =>{

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    return(
        <View style={styles.container}>
            <Picker
                mode="dropdown"
                style={styles.picker}
                selectedValue={selectFirst.producto}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectSecond({...selectFirst, producto: itemValue})}
            >
                <Picker.Item  label={msg.msgSeleccioneUna} value="Seleccione una..." enabled={false} />
                <Picker.Item  label="Licenciatura en Administracion de Empresas" value="Licenciatura en Administracion de Empresas" />
                <Picker.Item  label="Licenciatura en Administracion de Negocios" value="Licenciatura en Administracion de Negocios" />
                <Picker.Item  label="Licenciatura en Administracion - Finanzas" value="Licenciatura en Administracion - Finanzas" />
                <Picker.Item  label="Licenciatura en Administracion - Contabilidad" value="Licenciatura en Administracion - Contabilidad" />
                <Picker.Item  label="Licenciatura en Comunicacion" value="Licenciatura en Comunicacion" />
                <Picker.Item  label="Licenciatura en Mercadotecnia" value="Licenciatura en Mercadotecnia" />
                <Picker.Item  label="Licenciatura en Mercadotecnia Digital" value="Licenciatura en Mercadotecnia Digital" />
                <Picker.Item  label="Licenciatura en Psicologia" value="Licenciatura en Psicologia" />
            </Picker>
        </View>
    );
};

export default PickerProduct;