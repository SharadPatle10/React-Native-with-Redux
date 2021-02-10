import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,KeyboardAvoidingView,Image,TextInput, StyleSheet } from 'react-native';
// import {CustomHeader} from '../index'


export class LoginScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              {/* <CustomHeader title='Login' isHome={true} navigation={this.props.navigation} /> */}
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >

              <Image
                source={require('../images/logo.png')}
                style={{width: 200,height: 210, }}
              />
              <Text style={{ color:'#ff0000',fontSize:30,margin:20,fontWeight:'bold', }} >salZMate</Text>
              <KeyboardAvoidingView behavior="padding" >
                <View >
                    <Text style={{ fontSize:20,textAlign:'center',color:'gray' }} >Username</Text>
                    <TextInput
                        placeholder = "username"
                        returnKeyType = "next"
                        // onSubmitEditing={() => this.password.focus()}
                        style={styles.input}
                        // onChangeText={(value) => this.setState({username : value})}
                      />
                    <Text style={{ fontSize:20,textAlign:'center',color:'gray' }} >Password</Text>
                    <TextInput
                        placeholder = "password"
                        secureTextEntry
                        returnKeyType = "go"
                        style={styles.input}
                        // onChangeText={(value) => this.setState({password : value})}
                    />
                </View>
              </KeyboardAvoidingView>
              
              <TouchableOpacity 
                style={{marginTop:20,backgroundColor : '#1E90FF',height : 40,paddingVertical : 5, width:250,justifyContent:'center'}}
                onPress={() => this.props.navigation.navigate('HomeApp')}
              >
                <Text style={{textAlign : 'center',fontSize : 20,fontWeight:'bold',fontFamily:'sans-serif',color:'white',}} >Login</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{marginTop:20,}}
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Text style={{ textAlign:'left',color:'#0080ff',fontWeight:'bold',margin:20,fontSize:17 }} >Forgot Password ?</Text>
              </TouchableOpacity>
              </View>
            </SafeAreaView> 
          );
    }
}

const styles = StyleSheet.create({
  input: {
    height : 50,
    width : 290,
    // backgroundColor : 'lightgray',
    marginBottom : 20,
    paddingHorizontal : 20,
    borderWidth:1,
    borderColor:'gray',
    fontSize:20,
    // borderRadius:20

  },
})