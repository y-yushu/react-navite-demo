import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('User');

  return (
    <View style={[styles.box]}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 0}}
        onChangeText={text => onChangeText(text)}
        value={value}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default UselessTextInput;
