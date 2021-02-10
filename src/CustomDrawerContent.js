import React,{Component} from 'react';
import { Text, View,SafeAreaView,StatusBar,Image, TouchableOpacity,Button,ScrollView } from 'react-native';
import {IMAGE} from './constants/image.js'

export class CustomDrawerContent extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1 }} >
              <ScrollView style={{marginLeft:25}} >
                <TouchableOpacity 
                  style={{marginTop:20,}}
                  onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                  <View style={{height:150,alignItems:'center',justifyContent:'center'}} >
                    <Image source={require('./images/logo.png')} 
                    style={{height:120,width:110,}}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={{marginTop:20,}}
                  onPress={() => this.props.navigation.navigate('Notifications')}
                >
                  <Text>Notifications</Text>
                </TouchableOpacity>
              </ScrollView>
              <TouchableOpacity 
                  style={{marginBottom:20,marginLeft:25}}
                  onPress={() => this.props.navigation.navigate('Login')}
                >
                  <Text>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
          )
    }
}