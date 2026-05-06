import * as Location from 'expo-location';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LocationScreen() {
  const [locationText, setLocationText] = useState('Press the button to get your current location.');
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setLocationText('Location permission was denied.');
      setLoading(false);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setLocationText(
      `Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude}`
    );

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Location Tool</Text>
      <Text style={styles.description}>
        This screen uses the Expo Location library to request permission and display the device location.
      </Text>

      <Button title={loading ? 'Loading...' : 'Get My Location'} onPress={getLocation} />

      <Text style={styles.result}>{locationText}</Text>
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
  result: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 24,
  },
});