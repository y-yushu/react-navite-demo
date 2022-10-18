import * as React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Colors from '../../enum/colors'; // 颜色
import {Logo, Visible, Invisible} from '../../assets/icon/index';
import {LoginBG} from '../../assets/image/index'; // 背景图片

const Top = () => {
  const width = Dimensions.get('screen').width / 2;

  return (
    <View style={style.top}>
      <StatusBar hidden={true} />
      <Logo width={width} />
    </View>
  );
};

const Center = (props: {navigation: any}) => {
  // 密码是否可见
  const [show, setShow] = React.useState(true);
  // 去首页
  const toHome = () => props.navigation.replace('Home');

  return (
    <View style={style.center}>
      <TextInput style={style.input} placeholder={'请输入账号或手机号'} />
      <View>
        <TextInput
          style={style.input}
          placeholder={'请输入密码'}
          secureTextEntry={show}
        />
        <TouchableOpacity onPress={() => setShow(!show)} style={style.icon}>
          {show ? (
            <Invisible width={20} height={20} />
          ) : (
            <Visible width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>
      <Button title={'登录'} onPress={toHome} />
    </View>
  );
};

const Bottom = () => {
  // 复选框
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <View style={style.bottom}>
      <CheckBox
        checkBoxColor={Colors.green}
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
  return (
    <ImageBackground style={style.container} source={LoginBG}>
      <Top />
      <Center {...props} />
      <Bottom />
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  top: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width * 0.8,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 5,
    borderColor: Colors.gray,
    borderWidth: 0.5,
    elevation: 1,
    backgroundColor: Colors.white,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottom: {
    height: 45,
    alignItems: 'center',
  },
  bottomText1: {
    paddingLeft: 4,
  },
  bottomText2: {
    color: Colors.green,
    textDecorationLine: 'underline',
  },
});

export default App;
