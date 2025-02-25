import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SUMMER NIGHT FESTIVAL</Text>
      <Text>the best of music in one event! #comingsoon</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D91656',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
