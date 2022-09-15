import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  const arr = new Array(40).fill(0);
  const [sub, setSub] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{paddingBottom: 20}}
        stickyHeaderIndices={[sub]}>
        {arr.map((_, i: number) => {
          return (
            <View key={i}>
              <Button
                title={'下标' + i}
                onPress={() => {
                  setSub(i);
                }}
                color="#108b96"
              />
              <View style={[styles.line]} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  line: {
    height: 10,
  },
});

export default App;
