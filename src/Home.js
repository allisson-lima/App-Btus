import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import {Modalize} from 'react-native-modalize'



export default function Cal() {

    const modalizeRef = useRef(null);
    
    function ValidarModal() {
        if((m2, pessoa, eletro) == ''){
            alert('🚫 Preencha o campo vazio ');
        }else{
            modalizeRef.current?.open();
            
        }
        
      }



    // function onOpen(){
    //     modalizeRef.current?.open();
        
    // }


    const [m2, setM2] = useState('');
    const [pessoa, setPessoa] = useState('');
    const [eletro, setEletro] = useState('');

    function handleSubmit(result){
        const metro = m2 * 600;
        const ser = pessoa * 600;
        const aparelho = eletro * 600;
        const btus = metro + ser + aparelho;
        // alert('A potência ideal deverá possuir ' + (btus) + 'Btus');
         if(result){
            return(<View style={{alignItems: 'center', justifyContent: 'center', marginTop: -695}} scrollEnabled={false}>
               
                <Text style={style.Title1}>A potência ideal deverá possuir:</Text>
               <Text style={style.Subtitle}> {btus} btus</Text>
                </View>)
        }
    }
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={style.container}>
            
                <Modalize 
                ref={modalizeRef}
                snapPoint={400}
                modalHeight={400}
                
                 >
                
                <View style={{ flex: 1, }}>
                <LottieView  style={{alignItems: 'center', 
        justifyContent: 'center', height: '100%', width: '100%', flex: 1}}
                    source={require('../assets/modal.json')}
                    autoPlay
                    loop={true}
                    speed={1}
                />
                            {handleSubmit(true)}
                            <LottieView  style={{alignItems: 'center', 
        justifyContent: 'center', height: '75%', width: '100%', top: -30, }}
                    source={require('../assets/emoji.json')}
                    autoPlay
                    loop={true}
                    speed={1}
                />
                </View>

                </Modalize>
            

                <View style={style.containerL}>
                <LottieView  style={style.LottieImage}
                    source={require('../assets/home.json')}
                    autoPlay
                    loop={true}
                    speed={1}
                />
                </View>

                <Text style={style.Title}>
                Cálculo de Btu
                </Text>

                <TextInput
                style={style.input}
                value={m2}
                onChangeText={ (m2) => setM2(m2) }
                placeholder="Total de Área em m2"
                keyboardType="numeric"
                maxLength={4}
                />

                <TextInput
                style={style.input}
                value={pessoa}
                onChangeText={ (pessoa) => setPessoa(pessoa)}
                placeholder="Total de pessoas no ambiente"
                keyboardType="numeric"
                maxLength={4}
                />
                <TextInput
                style={style.input}
                value={eletro}
                onChangeText={ (eletro) => setEletro(eletro) }
                placeholder="Total de Eletroeletrônicos"
                keyboardType="numeric"
                maxLength={4}
                />
                <TouchableOpacity 
                style={style.button}
                onPress={ () =>{ValidarModal();Keyboard.dismiss()}}
                
                >
                    <Text style={style.buttonTexte} >Calcular</Text>
                </TouchableOpacity>

            </View>
            </TouchableWithoutFeedback>
        );
    }

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#09022D',
        width: '100%',
        alignItems:'center'
    },
    containerL:{
        height: '25%', width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 25
    },
    LottieImage:{
        height: '100%',
        width: '100%' , 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    Title:{
        color: '#fff', 
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'arial',
        letterSpacing: 2
    },
    Title1:{
        color: '#3E8DEF', 
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'arial',
        letterSpacing: 2,
        textAlign: 'center'
    },
    Subtitle:{
        color: 'red', 
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'arial',
        letterSpacing: 2,
        textAlign: 'center'
    },
    input:{
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        fontSize: 23,

    },
    button:{
        backgroundColor: '#3E8DEF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        width: '90%',
        padding: 10,
        borderRadius: 15
    },
    buttonTexte:{
        fontSize: 25,
        color: '#fff'
    }
});