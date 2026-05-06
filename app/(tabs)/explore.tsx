import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expo Camera Tool</Text>
        <Text style={styles.description}>Checking camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expo Camera Tool</Text>
        <Text style={styles.description}>
          This screen uses the Expo Camera library to request permission and display a live camera preview.
        </Text>
        <Text style={styles.button} onPress={requestPermission}>
          Grant Camera Permission
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Camera Tool</Text>
      <CameraView style={styles.camera} facing="back" />
      <Text style={styles.description}>Camera preview is active.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#111827',
    color: '#ffffff',
    padding: 14,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  camera: {
    height: 360,
    borderRadius: 16,
    overflow: 'hidden',
  },
});