import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreenDetails extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Setting Details' navigation={this.props.navigation}  />
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text>Setting Details!</Text>
              </View>
            </SafeAreaView>
          );
    }
}