import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Pages/home';
import { Routes } from './src/Routes/routes';
import { useCallback, useEffect } from 'react';
import { connectToDatabase, createTables } from './src/database/db';

export default function App() {
  return (
    <Routes />
  );
}
