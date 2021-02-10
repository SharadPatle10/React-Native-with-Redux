import React ,{Component} from 'react';
import { Text, View,SafeAreaView, StyleSheet,TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export class Productinfo extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Product Info' navigation={this.props.navigation}  />
              <View style={styles.Container}>
                <TouchableOpacity 
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Carmodel')}
                >
                <Icon name ='car' size={50} color='red' /> 
                <View style={styles.view}>
                    <Text style={styles.text}>All Models</Text>
                </View>
                </TouchableOpacity>


                <TouchableOpacity 
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('MandV')}

                >    
                <Icon name ='car-multiple' size={50} color='red' />
                <View style={styles.view}>
                  <Text style={styles.text}>Models and Variant</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('ModelRecommender')}
                >
                <Icon name ='car-sports' size={50} color='red' />
                <View style={styles.view}>
                      <Text style={styles.text}>Model Recommender</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('VariantRecommender')}
                >
                <Icon name ='filter-variant' size={50} color='red' /> 
                <View style={styles.view}>
                      <Text style={styles.text}>Variant Recommender</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Container}>
                <TouchableOpacity 
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('QandA')}
                >
                <Icon name ='comment-question' size={50} color='red' />
                <View style={styles.view}>
                      <Text style={styles.text}>Question & Answers</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Reviews')}
                >
                <Icon name ='message-draw' size={50} color='red' />
                <View style={styles.view}>
                      <Text style={styles.text}>Reviews</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('CompareCI')}
                >
                <Icon name ='compare' size={50} color='red' /> 
                <View style={styles.view}>
                    <Text style={styles.text}>Compare Competitor Information</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                <Icon name ='tag' size={50} color='red' />
                <View style={styles.view}>
                      <Text style={styles.text}>Offers</Text>
                </View> 
                </TouchableOpacity> 
              </View>  
              <View style={styles.Container}>
                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Pricing')}
                >
                <Icon name ='currency-usd' size={50} color='red' /> 
                <View style={styles.view}>
                      <Text style={styles.text}>Pricing</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Accesories')}
                >
                <Icon name ='view-grid' size={50} color='red' /> 
                <View style={styles.view}>
                      <Text style={styles.text}>Accesories</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('MainCal')}
                >
                <Icon name ='calculator-variant' size={50} color='red' />
                <View style={styles.view}>
                      <Text style={styles.text}>Maintenance Calculator</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('ServiceS')}
                >
                <Icon name ='clock-outline' size={50} color='red' /> 
                <View style={styles.view}>
                    <Text style={styles.text}>Service Schedule</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={styles.Container}>
                <TouchableOpacity style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Calc')}
                >
                <Icon name ='calculator' size={50} color='red' /> 
                <View style={styles.view}>
                      <Text style={styles.text}>EMI Calculator</Text>
                </View>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    //alignItems:'center',
    //flexDirection:'left',
    padding:10,
    paddingBottom:40,
    paddingTop:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchable: {
    alignItems: 'center',
    // justifyContent: 'center',
    textAlign:'center',
    width:80,
    
  },
  text:{
    fontSize:15,
  },
});