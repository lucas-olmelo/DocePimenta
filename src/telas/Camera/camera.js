import React, {useState,  useEffect} from 'react';
import { View, StyleSheet, Image, Button , TouchableOpacity, Text} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View >
      <Camera  type={type} ref={cameraRef}>
        <View >
          <TouchableOpacity  onPress={toggleCameraType}>
            <Text >Alternar Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={tirarFoto}>
            <Text >Tirar Foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedImage && <Image source={{uri: capturedImage}} style={{flex: 1}}></Image>}
    </View>
  );
} 