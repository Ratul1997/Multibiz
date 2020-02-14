import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, NativeModules, PermissionsAndroid, Modal, Dimensions, TextInput } from 'react-native'
import { Icon, SearchBar, Divider, Button } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'
const widthOfWindow = Dimensions.get('window').width
export default class OrderPage extends Component {
    static navigationOptions = {
        header: null,

    };
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Icon name="cross" type="entypo" size={30}  containerStyle={{marginRight:10,justifyContent:'flex-end',alignSelf:'flex-end',backgroundColor:'transparent'}} iconStyle={{color:'gray'}} ></Icon>
                <Text style={{ justifyContent: 'flex-start', fontSize: 20, margin: 10 }}>Number Of Items</Text>
                <NumericInput
                    value={0}
                    onChange={value => console.log(value)}
                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                    totalWidth={widthOfWindow - 20}
                    totalHeight={50}
                    iconSize={25}
                    containerStyle={{ justifyContent: 'center', margin: 10 }}
                    step={1}
                    valueType='real'
                    rounded
                    textColor='#B0228C'
                    iconStyle={{ color: 'white' }}
                    rightButtonBackgroundColor='#EA3788'
                    leftButtonBackgroundColor='#E56B70' />
                <Text style={{ justifyContent: 'flex-start', fontSize: 20, margin: 10 }}>Selling Price</Text>
                <TextInput style={{ borderColor: 'gray', borderWidth: 1, height: 50, borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 5, paddingLeft: 5 }} editable keyboardType={"number-pad"} placeholder='Price' onChangeText={(text) => console.log(text)} />
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, marginLeft: 10, color: 'red' }}>Buying Price - 300/=</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 16, margin: 10 }}>Total Price X 2</Text>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 35, margin: 10, color: '#EA3788' }}>32552 /=</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 16, margin: 10 }}>Income</Text>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 35, margin: 10, color: '#EA3788' }}>32552 /=</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', marginLeft: 20, marginRight: 10, marginBottom: 10, justifyContent: 'space-evenly', width: '90%' }}>
                    <Button
                        title="Add to Cart"
                        buttonStyle={{ backgroundColor: '#E56B70', borderRadius: 10, width: '90%' }}
                        onPress={this.toggleModal}
                    />
                    <Button
                        title="Order"
                        buttonStyle={{ backgroundColor: '#B0228c', borderRadius: 10, width: '90%' }}
                        onPress={this.toggleModal}
                    />
                </View>
            </View>
        )
    }
}