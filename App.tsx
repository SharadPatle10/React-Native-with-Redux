import * as React from 'react';
import { StatusBar,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {CustomDrawerContent} from './src'
import {HomeScreen,HomeScreenDetails,SettingsScreen,SettingsScreenDetails,
  Chat,Carmodel,CarDetails,Modelinfo,Productinfo,VehicleAvailability,QsaleGuide,
  Details,ViewLeads,MandV,ModelRecommender,VariantRecommender,QandA,Reviews,
  CompareCI,Pricing,Accesories,MainCal,ServiceS,Calc } from './src/tab'

import {NotificationsScreen} from './src/drawer'
import {RegisterScreen,LoginScreen} from './src/auth'
import {IMAGE} from './src/constants/image'


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown:false     
})

const StackHome = createStackNavigator()

function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName='Home' >
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name='HomeDetails' component={HomeScreenDetails} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackViewLeads = createStackNavigator()

function ViewLeadsStack(){
  return(
    <StackViewLeads.Navigator initialRouteName='ViewLeads' >
      <StackViewLeads.Screen name='ViewLeads' component={ViewLeads} options={navOptionHandler} />
      <StackViewLeads.Screen name='Details' component={Details} options={navOptionHandler} />
    </StackViewLeads .Navigator>
  )
}

const StackSetting = createStackNavigator()

function SettingStack(){
  return(
    <StackSetting.Navigator initialRouteName='Setting' >
      <StackSetting.Screen name='Setting' component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name='SettingDetails' component={SettingsScreenDetails} options={navOptionHandler} />
    </StackSetting .Navigator>
  )
}

const StackQsaleGuide = createStackNavigator()

function QsaleGuideStack(){
  return(
    <StackQsaleGuide.Navigator initialRouteName='QsaleGuide' >
      <StackQsaleGuide.Screen name='QsaleGuide' component={QsaleGuide} options={navOptionHandler} />
      <StackQsaleGuide.Screen name='Details' component={Details} options={navOptionHandler} />
    </StackQsaleGuide .Navigator>
  )
}

const StackVehicleAvailability = createStackNavigator()

function VehicleAvailabilityStack(){
  return(
    <StackVehicleAvailability.Navigator initialRouteName='Vehicle Availability' >
      <StackVehicleAvailability.Screen name='Vehicle Availability' component={VehicleAvailability} options={navOptionHandler} />
      <StackVehicleAvailability.Screen name='Details' component={Details} options={navOptionHandler} />
    </StackVehicleAvailability .Navigator>
  )
}

function  TabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME_BACK
              : IMAGE.ICON_HOME ;
          } else if (route.name === 'View Leads') {
            iconName = focused ? 
              IMAGE.ICON_VIEW_BACK
            : IMAGE.ICON_VIEW;
          } else if (route.name === 'Update Customer Info'){
              iconName = focused ? 
              IMAGE.ICON_CUSTOMER_BACK
            : IMAGE.ICON_CUSTOMER;
          } else if (route.name === 'Quick Sales Guide' ){
              iconName = focused ? 
              IMAGE.ICON_SALE_BACK
            : IMAGE.ICON_SALE;
          } else if (route.name === 'Vehicle Availability' ){
              iconName = focused ? 
              IMAGE.ICON_VEHICLE_BACK
            : IMAGE.ICON_VEHICLE;
          }


          // You can return any component that you like here!
          return <Image source={iconName} style={{width:30,height:30,}} 
            resizeMode='contain'
          />  ;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#3498DB',
      }} 
    >
      <Tab.Screen name="Home" component={HomeStack}  />
      <Tab.Screen name="View Leads" component={ViewLeadsStack}  />
      <Tab.Screen name="Update Customer Info" component={SettingStack} />
      <Tab.Screen name="Quick Sales Guide" component={QsaleGuideStack} />
      <Tab.Screen name="Vehicle Availability" component={VehicleAvailabilityStack} />

    </Tab.Navigator>
  )
}

 const Drawer = createDrawerNavigator();

 function DrawerNavigator({navigation}){
   return(
    <Drawer.Navigator initialRouteName="MenuTab" 
      drawerContent={() => <CustomDrawerContent navigation={navigation} /> } >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Carmodel" component={Carmodel} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="CarDetails" component={CarDetails} />
      <Drawer.Screen name="Modelinfo" component={Modelinfo} />
      <Drawer.Screen name="Productinfo" component={Productinfo} />
      <Drawer.Screen name="MandV" component={MandV} />
      <Drawer.Screen name="ModelRecommender" component={ModelRecommender} />
      <Drawer.Screen name="VariantRecommender" component={VariantRecommender} />
      <Drawer.Screen name="QandA" component={QandA} />
      <Drawer.Screen name="Reviews" component={Reviews} />
      <Drawer.Screen name="CompareCI" component={CompareCI} />
      <Drawer.Screen name="Pricing" component={Pricing} />
      <Drawer.Screen name="Accesories" component={Accesories} />
      <Drawer.Screen name="MainCal" component={MainCal} />
      <Drawer.Screen name="ServiceS" component={ServiceS} />
      <Drawer.Screen name="Calc" component={Calc} />


      
    </Drawer.Navigator>
   )
 }

const StackApp = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle ="light-content"/>
      <StackApp.Navigator initialRouteName='Login' >
        <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler} />        
      </StackApp .Navigator>
    </NavigationContainer>
  );
}