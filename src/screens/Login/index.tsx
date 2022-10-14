import * as React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {Logo} from '../../assets/icon/index';
// 背景图片
const image = require('../../assets/image/w_bg.png');

const Top = (props: {width: number}) => {
  return (
    <View style={style.top}>
      <Logo width={props.width / 2} />
    </View>
  );
};

const Center = (props: {width: number}) => {
  const inp2 = {
    ...style.input,
    width: props.width * 0.8,
  };
  const inp1 = {
    ...inp2,
    letterSpacing: 1,
  };

  return (
    <View style={style.center}>
      <TextInput style={inp1} placeholder={'请输入账号或手机号'} />
      <TextInput
        style={inp2}
        placeholder={'请输入密码'}
        secureTextEntry={true}
      />
      <Button title={'登录'} />
    </View>
  );
};

const Bottom = () => {
  // 复选框
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <View style={style.bottom}>
      <CheckBox
        style={style.bottomCheckBox}
        checkBoxColor={'#27BE8F'}
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}
        rightTextView={
          <Text style={style.bottomText1}>
            已阅读并同意
            <Text style={style.bottomText2}>
              《智笔课堂服务协议和隐私政策》
            </Text>
          </Text>
        }
      />
    </View>
  );
};

const App = (props: any) => {
  // 屏幕宽度
  const {width} = useWindowDimensions();

  const toPage = () => {
    props.navigation.navigate('Test1');
  };
  console.log(toPage);

  return (
    <ImageBackground style={style.container} source={image}>
      <Top width={width} />
      <Center width={width} />
      <Bottom />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 2,
  },
  input: {
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
    elevation: 1.5,
    backgroundColor: '#ffffff',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomCheckBox: {
    marginBottom: 20,
  },
  bottomText1: {
    paddingLeft: 4,
  },
  bottomText2: {
    color: '#27BE8F',
    textDecorationLine: 'underline',
  },
});

export default App;
