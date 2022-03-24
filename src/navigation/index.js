import React ,{useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Input, HStack, Text, Box, Pressable } from 'native-base';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Box height="116" display="flex" mt="40px" mb="16px" ml="16px" safeArea flexDirection="column" justifyContent="space-between">
        <Image
        source={require("../images/img_avatar.png")}
        alt='albumImage'
        />
        <Text fontSize="24" fontWeight="700">May</Text>
      </Box>
      <Divider my="2"/>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Account"
        activeBackgroundColor={colors.primary100}
        activeTintColor={colors.primary700}
        inactiveTintColor={colors.light500}
        labelStyle={ {fontSize: 14, fontWeight: '400'} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={24} />
        )}
      />
      <DrawerItem 
        label="Setting"
        activeBackgroundColor={colors.primary100}
        activeTintColor={colors.primary700}
        inactiveTintColor={colors.light500}
        labelStyle={ {fontSize: 14, fontWeight: '400'} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={24} />
        )}
      />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary100,
        drawerActiveTintColor: colors.primary700,
        drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 300 },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: "#666666",
        tabBarActiveTintColor: "#6200EE",
        tabBarIconStyle: { marginTop: 8},
        tabBarLabelStyle: { marginBottom: 8, fontSize: 12},
        tabBarStyle: { 
            height: 56,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        },
        tabBarItemStyle: {
            height: 56,
          },
        // headerShown: false
      }}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBooksStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunc = () => {
      setToggle(!toggle);
  };
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 0 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={24}
              style={{ marginRight: 0 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          
          headerRight: () => (
            <Pressable onPress={() => toggleFunc()}>
              {toggle? <MaterialCommunityIcons
              name={'bookmark-outline'}
              size={24}
              style={{ marginRight: 0, color:"#000000" }}
            />
          :
          <MaterialCommunityIcons
              name={'bookmark'}
              size={24}
              style={{ marginRight: 0, color:"#6200EE"}}
            />}
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;