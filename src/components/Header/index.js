import React from 'react';

import { View, Button, Text, Alert } from 'react-native';

const Header = () => {
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text>Home</Text>
      <Button
        title="Botao Ola"
        onPress={() => Alert.alert('Ola')}
        color="gray"
      />
    </View>
  );
};

export default Header;
