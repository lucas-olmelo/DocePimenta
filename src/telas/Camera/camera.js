import React, {useState,  useEffect} from 'react';
import { View, StyleSheet, Image, Button , TouchableOpacity, Text} from 'react-native';
import estilos from './styles/estilos'
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TesteCamera() {

  //CAMERA
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = React.useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View >
        <Text style={{ textAlign: 'center' }}>Por favor, autorize a utilização da sua camera.</Text>
        <Button onPress={requestPermission} title="Autorizar o uso da camera" />
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
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={estilos.container}>
      <Camera style={estilos.camera} type={type} ref={cameraRef}>
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
      {capturedImage && <Image source={{uri: capturedImage}} style={{flex: 1}}></Image>}
    </View>
  );
} 