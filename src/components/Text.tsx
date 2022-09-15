import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");

  const onPressTitle = () => {
    setTitleText(e => e + 'P');
  };

  return (
    <View>
      <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{'This is not really a bird nest.'}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.baseText2}>
          I am bold
          <Text style={styles.innerText}> and red</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  baseText2: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default TextInANest;
