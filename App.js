import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/signin';

export default function App() {
  return (
    <>
    <SignIn />
      <StatusBar style="light" />
    </>
  );
}

