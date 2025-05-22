import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  if (!permission?.granted) {
    return <View><Button title="Permitir Câmera" onPress={requestPermission} /></View>;
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        onCameraReady={() => setIsCameraReady(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
});
