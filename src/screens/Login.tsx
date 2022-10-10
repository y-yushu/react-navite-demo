import * as React from 'react';
import {
  View,
  Text,
  // Button,
  // Switch,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
// import {Checkbox} from '@ant-design/react-native';
// import CheckBox from 'react-native-check-box';
import Logo from '../assets/icon/logo.svg';
// 背景图片
const image = require('../assets/image/w_bg.png');

const HomeScreen = (props: any) => {
  const {width} = useWindowDimensions();
  // const [isChecked, setIsChecked] = React.useState(false);

  const toPage = () => {
    props.navigation.navigate('Test1');
  };
  console.log(toPage);

  return (
    <ImageBackground style={style.container} source={image}>
      <View style={style.top}>
        <Logo width={width / 2} />
      </View>
      <View style={style.center}>
        <Text>Home Test1</Text>
      </View>
      <View style={style.bottom}>
        <View>
          {/* <Checkbox onChange={() => change()}>Checkbox</Checkbox> */}
          <Text>已阅读并同意 </Text>
          <Text>《智笔课堂服务协议和隐私政策》 </Text>
        </View>
        {/* <Button title="跳转" onPress={() => toPage()} /> */}
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 6,
    backgroundColor: 'green',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default HomeScreen;
