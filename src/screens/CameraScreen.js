import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import axios from 'axios';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Nous avons besoin d'accès à la caméra</Text>
        <Button onPress={requestPermission} title="Autoriser la caméra" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo prise:', photo);
        // Ici on va ajouter l'appel API pour identifier la plante
        setResult({
          plant: 'Tomate',
          health: 'Bonne santé',
          advice: 'Arroser régulièrement'
        });
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} />
      <View style={styles.buttonContainer}>
        <Button 
          title={loading ? "En cours..." : "📷 Prendre une photo"}
          onPress={takePicture}
          disabled={loading}
        />
      </View>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Plante: {result.plant}</Text>
          <Text style={styles.resultText}>État: {result.health}</Text>
          <Text style={styles.resultText}>Conseil: {result.advice}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  resultContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
