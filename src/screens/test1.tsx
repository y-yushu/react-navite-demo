import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen(props: any) {
  const toPage = () => {
    props.navigation.navigate('Test2');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Test1</Text>
      <Button title="跳转" onPress={() => toPage()} />
    </View>
  );
}

export default HomeScreen;
