import React from 'react';
import { View, Text, Button } from 'react-native';

const Cart = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'green' }}>
      <Text>Cart</Text>
      <Button
        title="Botão Voltar Main"
        onPress={() => navigation.goBack()}
        color="gray"
      />
    </View>
  );
};

export default Cart;
