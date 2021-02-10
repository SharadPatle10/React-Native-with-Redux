import React ,{Component} from 'react';
import { Text, View,SafeAreaView,TouchableOpacity,ScrollView,Image} from 'react-native';
import axios from 'axios';
import {CustomHeader} from '../index'
// import { Item } from 'native-base';

const photos = [
  require('../imagecars/1.png'),
  require('../imagecars/2.png'),
  require('../imagecars/3.png'),
  require('../imagecars/4.png'),
  require('../imagecars/5.png'),
  require('../imagecars/6.png'),
  require('../imagecars/7.png'),
  require('../imagecars/8.png'),
  require('../imagecars/9.png'),
  require('../imagecars/10.png'),
  require('../imagecars/11.png'),
  require('../imagecars/12.png')
]; 

export class Carmodel extends Component{
    constructor(){
      super()
      this.state = {
        data :[]
      }
    }
    componentDidMount(){
      this.getapidata()
    }
    async getapidata(){
      let res = await axios.get('http://142.93.212.248:8080/newcar/model/list/MFR007')
      // console.warn(res.data.model_data);
      this.setState({data : res.data.model_data}) 
    } 
    
     
   

    render(){
      
        return (
            <SafeAreaView style={{flex:1}}>
              <CustomHeader title="Carmodel" navigation={this.props.navigation}  />
              <ScrollView>
              <View style={{ flexDirection:'row',paddingTop:5,paddingBottom:10 }} >
              <View style={{ left:20,justifyContent:'space-between', }} >
              {
                  photos.map(img =>
                                  <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('CarDetails')}
                                  >
                                  <Image 
                                    source={img}
                                    style={{ width:140,height:85 }}
                                  />
                                  </TouchableOpacity>
                              )
                }
                </View>
                <View >
                {
                  this.state.data.length>0 ?
                  <View>
                    {
                      this.state.data.map((item,index) => {
                        return(
                          <View  style={{padding:15,borderLeftWidth:0,borderWidth:1,borderBottomWidth:0,borderTopWidth:1,left:20,borderRadius:20,borderBottomLeftRadius:0,borderTopLeftRadius:0,backgroundColor:'white',width:315 }}>
                              <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('CarDetails',)}
                              >   
                                  <Text>{item.model_name}{"\n"}{'\u20B9'}{item.min_variant_price} - {'\u20B9'}{item.max_variant_price} {"\n"} {item.no_unique_variants} Variants {item.model_code} </Text> 
                              </TouchableOpacity>   
                          </View>
                        )
                      }
                      )
                    }
                  </View>:<View style={{justifyContent:'center',alignItems:'center'}} ><Text style={{justifyContent:'center',alignItems:'center',paddingTop:500}} >Loading......</Text></View>
                }
                </View>
              </View>
            </ScrollView>
            </SafeAreaView>
          );
    }
}       



