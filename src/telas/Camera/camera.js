import React, {useState} from 'react';
import { View, Image , TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import estilos from './styles/estilos'
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AntDesign } from '@expo/vector-icons';
import Texto from '../../componentes/Texto';
import Header from "../../componentes/Header.js";

import defaultImage from '../../../assets/def_prof.png'
import BackButton from '../../componentes/BackButton';

export default function TesteCamera() {

  //CAMERA
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = React.useRef(null);
  const [viewCamera, setViewCamera] = useState(false);

  const [text, onChangeText] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');

  const [registro, setRegistro] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Texto style={{ textAlign: 'center', fontSize: 24, marginVertical: 25 }}>Por favor, autorize a utilização da sua câmera.</Texto>
        <TouchableOpacity style={{backgroundColor: 'black', width: 150, borderRadius: 15, padding: 10}} onPress={requestPermission}>
          <Texto style={{color: 'white', textAlign: 'center'}}>Autorizar o uso da câmera</Texto>
        </TouchableOpacity>
      </View>
    );
  }

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      console.log("tirou foto");
      setCapturedImage(uri);
      console.log(uri);
      //Guarda a imagem no AsyncStorage
      await AsyncStorage.setItem('Foto', uri);

      setViewCamera(false);
    }
  }

  function toggleCameraType() {''
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const inverteExpandir = () => {
    setViewCamera(!viewCamera);
  };

  async function addUser(id, nome, email, senha, img) {
        
    const addUser = [{
        id: id,
        nome: nome,
        email: email,
        img: img,
        senha: senha
    }]

    const userSalvo = await AsyncStorage.getItem('user');
    if (userSalvo !== null) {
        const user = JSON.parse(userSalvo);

        user.push({id: id, nome: nome, email: email, img: img, senha: senha});
        const userAtualizado = JSON.stringify(user);
        await AsyncStorage.setItem('user', userAtualizado);
        Alert.alert("Usuário cadastrado com sucesso!");

        console.log(user);

    } else {
        const userAtualizado = JSON.stringify(addUser);
        
        await AsyncStorage.setItem('user', userAtualizado);
        Alert.alert("Usuário cadastrado com sucesso!");
        console.log('Inseriu usuário');
    }
}

  return <>
    { !viewCamera && <Header></Header>}
    {viewCamera &&
      <View style={estilos.container}>
        <Camera style={estilos.camera} type={type} ref={cameraRef}>
          <BackButton acao={inverteExpandir} color={'white'}></BackButton>
          <View style={estilos.test}>
            <View style={estilos.buttonContainer}>
              <TouchableOpacity style={estilos.button} onPress={toggleCameraType}>
                <AntDesign name="retweet" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={estilos.botaoFoto} onPress={tirarFoto}>
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
    }
    {!registro && !viewCamera && <View style={estilos.profileContainer}>
      <Texto style={estilos.titleText}>Crie seu perfil, e aproveite as ofertas da Doce Pimenta</Texto>

      <View style={estilos.imageContainer}>
        {/* <Image style={estilos.imagePic} source={{uri: capturedImage}}></Image> */}
        { capturedImage !== '' ? <Image source={{uri: capturedImage}} /> :null}
      </View>
      <TouchableOpacity style={estilos.botaoCamera} onPress={inverteExpandir}>
        <Text style={estilos.botaoText}>Tirar foto</Text>
      </TouchableOpacity>

      <View style={estilos.form}>
        <View style={estilos.inputWrap}>
          <Texto style={estilos.inputLabel}>Nome:</Texto>
          <TextInput
            style={estilos.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Insira seu nome"
          />
        </View>
        <View style={estilos.inputWrap}>
          <Texto style={estilos.inputLabel}>Email:</Texto>
          <TextInput
            style={estilos.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Insira o seu email"
            keyboardType="email-address"
            autoCapitalize='none'
          />
        </View>
        <View style={estilos.inputWrap}>
          <Texto style={estilos.inputLabel}>Senha:</Texto>
          <TextInput
            style={estilos.input}
            onChangeText={onChangeSenha}
            value={senha}
            placeholder="Insira a sua senha"
            secureTextEntry= {true}
            autoCapitalize='none'
          />
        </View>
        <TouchableOpacity style={estilos.botaoCamera} onPress={()=>{addUser(1, text, email, senha, capturedImage), setRegistro(true)}}>
          <Text style={estilos.botaoText}>Criar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>}

    { registro &&
      <View style={estilos.loggedInfo}>
        <Texto style={estilos.titleText}>Seu perfil na Doce Pimenta:</Texto>
        <Image style={estilos.imagePic} source={{uri: capturedImage}}></Image>
        <Texto style={estilos.infoLabel}>{text}</Texto>
        <Texto style={estilos.infoLabel}>{email}</Texto>
      </View>
    }

    {/* Nome, 📍Endereço, Email, utilizando AsyncStorage */}
    {/* {capturedImage && <Image source={{uri: capturedImage}} style={{flex: .45}}></Image>} */}
  </>
} 