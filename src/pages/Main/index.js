import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'blue' }}>
      <Text>Main</Text>
      <Button
        title="Botao Cart"
        onPress={() => navigation.navigate('Cart')}
        color="gray"
      />
    </View>
  );
};

export default Main;
