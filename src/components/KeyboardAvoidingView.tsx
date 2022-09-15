import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.container, styles.color2]}>
        <Text style={styles.header}>Header0</Text>
      </View>
      <View style={[styles.container, styles.color1]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Header</Text>
              <TextInput placeholder="Username" style={styles.textInput} />
              <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  color1: {
    backgroundColor: 'pink',
  },
  color2: {
    backgroundColor: 'green',
  },
});

export default KeyboardAvoidingComponent;
