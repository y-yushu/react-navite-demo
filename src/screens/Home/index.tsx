import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import Colors from '../../enum/colors'; // 颜色
import {
  IconWeilianjie,
  IconYilianjie,
  IconHourglass,
  IconTime,
  IconNodata,
} from '../../assets/icon/index'; // 图标
import {
  HomeBG,
  IconKetang,
  IconCuotiji,
  IconZizhulianxi,
  IconZuoye,
} from '../../assets/image/index'; // 图片

// 上半部分
const Top = (): React.ReactElement => {
  const imh = Image.resolveAssetSource(HomeBG).height;
  const imw = Image.resolveAssetSource(HomeBG).width;
  const width = Dimensions.get('window').width;
  const height = (imh * width) / imw;
  const size = Math.floor(width / 6);
  const buddhaSize = Math.floor(width / 8);

  return (
    <ImageBackground
      style={{width, height, paddingHorizontal: 15}}
      source={HomeBG}>
      <StatusBar backgroundColor={Colors.green} />
      {/* 用户信息 */}
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TopLeft buddhaSize={buddhaSize} />
        <TopRight />
      </View>
      {/* 功能菜单 */}
      <TopBottom size={size} />
    </ImageBackground>
  );
};

// 头像&用户名
const TopLeft = ({buddhaSize}: {buddhaSize: number}): React.ReactElement => {
  const user = {
    icon: 'https://tupian.qqw21.com/article/UploadPic/2020-6/20206282251172471.jpg',
    name: '张娟娟',
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: buddhaSize,
          height: buddhaSize,
          borderRadius: buddhaSize / 2,
          borderWidth: 1.5,
          borderColor: Colors.white,
        }}
        source={{
          uri: user.icon,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          fontWeight: '800',
          color: Colors.white,
        }}>
        {user.name}
      </Text>
    </View>
  );
};

// 笔连接状态
const TopRight = (): React.ReactElement => {
  const [type, setType] = React.useState(false);

  return (
    <TouchableOpacity
      style={{
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
      }}
      activeOpacity={0.8}
      // 后续改为跳转连接页面
      onPress={() => setType(!type)}>
      <View
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.white,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: Colors.green,
        }}>
        {type ? (
          <IconYilianjie width={14} height={14} />
        ) : (
          <IconWeilianjie width={14} height={14} />
        )}
      </View>
      <View
        style={{
          width: 40,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {type ? (
          <Text style={{color: Colors.blue, fontSize: 10}}>{'已连接'}</Text>
        ) : (
          <Text style={{color: Colors.red, fontSize: 10}}>{'未连接'}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

// 功能宫格
const TopBottom = ({size}: {size: number}): React.ReactElement => {
  const list = [
    {
      uri: IconKetang,
      title: '互动课堂',
    },
    {
      uri: IconZuoye,
      title: '作业',
    },
    {
      uri: IconCuotiji,
      title: '错题集',
    },
    {
      uri: IconZizhulianxi,
      title: '自主练习',
    },
  ];
  const Item = ({uri, title}: {uri: any; title: string}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={{width: size, height: size}} source={uri} />
        <Text
          style={{
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.white,
      }}>
      {list.map(e => (
        <Item key={e.title} uri={e.uri} title={e.title} />
      ))}
    </View>
  );
};

// 今日课堂&作业提醒
const Center = (): React.ReactElement => {
  const width = Dimensions.get('window').width;
  const width2 = Math.floor(width * 0.45);
  const height = Math.floor(width / 4);

  interface data {
    id: string;
    title: string;
    starttime: string;
    endtime: string;
    time: string;
    type: number;
    progress?: number;
  }
  // mock数据
  const mock1: data[] = [
    {
      id: '001',
      title: '平面与平面垂直的判定',
      starttime: '2022-10-18 16:45:00',
      endtime: '2022-10-18 18:00:00',
      time: '今日 10:35-11:45',
      type: 0,
    },
    {
      id: '002',
      title: '勾股定理',
      starttime: '2022-10-19 09:30:00',
      endtime: '2022-10-20 12:00:00',
      time: '今日 10:35-11:45',
      type: 1,
    },
    {
      id: '003',
      title: '勾股定理222',
      starttime: '2022-10-19 09:30:00',
      endtime: '2022-10-20 12:00:00',
      time: '今日 10:35-11:45',
      type: 2,
    },
  ];
  const mock2: data[] = [
    {
      id: '001',
      title: '圆的确定课后练习1',
      starttime: '2022-10-18 16:45:00',
      endtime: '2022-10-18 18:00:00',
      time: '今日',
      type: 0,
      progress: 0,
    },
    {
      id: '002',
      title: '圆的确定课后练习2',
      starttime: '2022-10-19 09:30:00',
      endtime: '2022-10-20 12:00:00',
      time: '今日',
      type: 1,
      progress: 76,
    },
  ];

  // item元素
  const LineItem = ({
    item,
    children,
  }: {
    item: {title: string; time: string};
    children: any;
  }) => {
    return (
      <View
        style={{
          width: width2,
          height,
          padding: 8,
          backgroundColor: Colors.white,
          borderRadius: 10,
        }}>
        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '900'}} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <IconTime width={10} height={19} />
          <Text style={{fontSize: 10, marginLeft: 5}}>{item.time}</Text>
        </View>
        {children}
      </View>
    );
  };

  // 空状态
  const Empty = () => {
    return (
      <View
        style={{
          width: width - 30,
          alignItems: 'center',
        }}>
        <IconNodata width={height - 20} height={height - 20} />
        <Text>{'无数据'}</Text>
      </View>
    );
  };

  return (
    <View style={{width, paddingHorizontal: 15}}>
      {/* 今日课堂 */}
      <CenterLineTitle title={'今日课堂'}>
        <FlatList
          style={{height}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={mock1}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            const But = () => {
              if (item.type === 0) {
                return (
                  <View
                    style={{
                      width: 90,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: Colors.gray,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: Colors.white, fontSize: 12}}>
                      {'未开始'}
                    </Text>
                  </View>
                );
              } else if (item.type === 1) {
                return (
                  <TouchableOpacity
                    style={{
                      width: 90,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: Colors.green,
                      borderRadius: 5,
                    }}
                    activeOpacity={0.8}>
                    <Text style={{color: Colors.white, fontSize: 12}}>
                      {'进入课堂'}
                    </Text>
                  </TouchableOpacity>
                );
              } else if (item.type === 2) {
                return (
                  <View
                    style={{
                      width: 90,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: Colors.gray,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: Colors.white, fontSize: 12}}>
                      {'已结束'}
                    </Text>
                  </View>
                );
              }
              return null;
            };
            return (
              <LineItem item={item}>
                <View
                  style={{
                    paddingRight: 10,
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <But />
                </View>
              </LineItem>
            );
          }}
          ItemSeparatorComponent={() => (
            <View style={{width: 10, height: 10}} />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </CenterLineTitle>
      {/* 作业提醒 */}
      <CenterLineTitle title={'作业提醒'}>
        <FlatList
          style={{height}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={mock2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <LineItem item={item}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <IconHourglass width={10} height={19} />
                  <Text style={{fontSize: 10, marginLeft: 5}}>{'未开始'}</Text>
                </View>
              </LineItem>
            );
          }}
          ItemSeparatorComponent={() => (
            <View style={{width: 10, height: 10}} />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </CenterLineTitle>
    </View>
  );
};

// 行标题
const CenterLineTitle = ({
  title,
  children,
}: {
  title: string;
  children: any;
}): React.ReactElement => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{marginBottom: 10, fontWeight: 'bold'}}>{title}</Text>
      {children}
    </View>
  );
};

// 整个页面
const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.f8,
      }}>
      <Top />
      <Center />
    </View>
  );
};

export default Index;
