import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'

export class QsaleGuide extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Quick Sales Guide' isHome={true} navigation={this.props.navigation} />
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text>Quick Sales Guide!</Text>
              <TouchableOpacity 
                style={{marginTop:20,}}
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Text>Go Details</Text>
              </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}