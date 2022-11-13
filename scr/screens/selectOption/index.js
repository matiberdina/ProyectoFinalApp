import { Alert, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ModalCustom, PickerProduct } from "../../components";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Lenguage } from "../../constants/lenguage";
import { insertSells } from "../../store/actions";
import { styles } from "./styles";

const SelectOptions = () =>{

    
    const userId = useSelector((state)=> state.auth.userId)
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        nombreAlumno: "", apellidoAlumno: "", fechaDeNacimiento: "", DNI: "", calle: "", numeroCel: "",
        producto: "", observaciones: "",
    });

        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];

    const [textInputFocus, setTextInputFocus] = useState(0)
    const [isModalOn, setIsModalOn] = useState(false);
    const [mensage, setMensage] = useState("");

    const onHandleSubmit = () =>{
        if (!inputs.nombreAlumno || !inputs.apellidoAlumno || !inputs.fechaDeNacimiento || !inputs.DNI || !inputs.calle || !inputs.numeroCel || !inputs.producto ) {
            setMensage(msg.msgCamposSinComplete);
            setIsModalOn(!isModalOn)
        } else {
            dispatch(insertSells(userId, inputs))
            setInputs({});
            setMensage(msg.msgDatosEnviados);
            setIsModalOn(!isModalOn)
        }
        
    };

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{msg.msgDatosGenerales}</Text>
            </View>
            <ScrollView>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgNombreAlumno}</Text>
                        <TextInput 
                            style={textInputFocus === 1 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={40}
                            value={inputs.nombreAlumno}
                            onChangeText={(text)=> setInputs({...inputs, nombreAlumno: text})}
                            autoCapitalize="none"
                            autoCorrect={false}  
                            onFocus={()=> setTextInputFocus(1)}
                            onEndEditing={()=> setTextInputFocus(0)}            
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgApellidoAlumno}</Text>
                        <TextInput 
                            style={textInputFocus === 2 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={40}
                            value={inputs.apellidoAlumno}
                            onChangeText={(text)=> setInputs({...inputs, apellidoAlumno: text})}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={()=> setTextInputFocus(2)}
                            onEndEditing={()=> setTextInputFocus(0)}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgFechaDeNac}</Text>
                        <TextInput 
                            style={textInputFocus === 3 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder="ejemplo xx/xx/xxxx"
                            maxLength={11}
                            value={inputs.fechaDeNacimiento}
                            onChangeText={(text)=> setInputs({...inputs, fechaDeNacimiento: text})}
                            autoCapitalize="none"
                            autoCorrect={false}  
                            onFocus={()=> setTextInputFocus(3)}
                            onEndEditing={()=> setTextInputFocus(0)}            
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgDNI}</Text>
                        <TextInput 
                            style={textInputFocus === 4 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={9}
                            keyboardType="numeric"
                            value={inputs.DNI}
                            onChangeText={(text)=> setInputs({...inputs, DNI: text})}
                            autoCapitalize="none"
                            autoCorrect={false}    
                            onFocus={()=> setTextInputFocus(4)}
                            onEndEditing={()=> setTextInputFocus(0)}          
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgCalle}</Text>
                        <TextInput 
                            style={textInputFocus === 5 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            value={inputs.calle}
                            onChangeText={(text)=> setInputs({...inputs, calle: text})}
                            autoCapitalize="none"
                            autoCorrect={false}    
                            onFocus={()=> setTextInputFocus(5)}
                            onEndEditing={()=> setTextInputFocus(0)}          
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgNumeroCel}</Text>
                        <TextInput 
                           style={textInputFocus === 6 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder="Sin +54"
                            maxLength={20}
                            value={inputs.numeroCel}
                            onChangeText={(text)=> setInputs({...inputs, numeroCel: text})}
                            autoCapitalize="none"
                            autoCorrect={false}     
                            onFocus={()=> setTextInputFocus(6)}
                            onEndEditing={()=> setTextInputFocus(0)}         
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgProducto}</Text>
                        <PickerProduct selectFirst={inputs} setSelectSecond={setInputs} />
                    </View>
                    
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgObser}</Text>
                        <TextInput 
                            style={textInputFocus === 7 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            value={inputs.observaciones}
                            onChangeText={(text)=> setInputs({...inputs, observaciones: text})}
                            autoCapitalize="none"
                            autoCorrect={false}       
                            onFocus={()=> setTextInputFocus(7)}
                            onEndEditing={()=> setTextInputFocus(0)}       
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={onHandleSubmit}
                        >
                            <Text style={styles.submit}>{msg.msgSubmit}</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
            <ModalCustom isModalOn={isModalOn} setIsModalOn={setIsModalOn} mensaje={mensage}/>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default SelectOptions;