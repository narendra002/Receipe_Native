import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='p-10'>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Click Me!</Text>
    </View>
    </SafeAreaView>
  );
}