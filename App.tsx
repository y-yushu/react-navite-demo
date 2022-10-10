import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Index from './components/ActivityIndicator'; // 加载
// import Index from './components/Button'; // 按钮
// import Index from './components/FlatList'; // 列表
// import Index from './components/Image'; // 图片
// import Index from './components/ImageBackground'; // 图片背景
// import Index from './components/KeyboardAvoidingView'; // 键盘防遮挡
// import Index from './components/Modal'; // 弹窗
// import Index from './components/Pressable'; // 操作交互 长按/防误触
// import Index from './components/RefreshControl'; // 下拉刷新
// import Index from './components/ScrollView'; // 滚动视图
// import Index from './components/SectionList'; // 分组列表
// import Index from './components/StatusBar'; // 状态栏
// import Index from './components/Switch'; // 开关
// import Index from './components/Text'; // 文本
// import Index from './components/TextInput'; // 输入框
// import Index from './components/TouchableHighlight'; // 触摸高亮
// import Index from './components/TouchableOpacity'; // 触摸降低透明度
// import Index from './components/TouchableWithoutFeedback'; // 触摸无效果
// import Index from './src/components/Animated'; // 动画

import Login from './src/screens/Login';
import Test1 from './src/screens/test1';
import Test2 from './src/screens/test2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Test1" component={Test1} />
        <Stack.Screen name="Test2" component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
