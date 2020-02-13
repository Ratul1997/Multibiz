import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, NativeModules, PermissionsAndroid, Modal, Dimensions } from 'react-native'
import { Icon, SearchBar, Divider, Image, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import List from '../Resource/List'


const numColumns = 2;
export default class ProductPage extends Component {
    static navigationOptions = {
        header: null,

    };
    state = {
        isSearching: false
    }
    menuBar = () => {
        return (
            <View style={{ flex: 0.1, width: '100%', borderBottomColor: 'black', borderBottomWidth: 1 }}>

                <View style={{ flex: 1, width: "85%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', alignSelf: 'center' }}>
                    <Icon name="chevron-small-left" type="entypo" size={30} ></Icon>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignSelf: 'center', }}>Product Code</Text>
                    <Icon ></Icon>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.menuBar()}
                <View style={{ flex: .4, backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'stretch', marginTop: 10, marginBottom: 5 }}>
                    <Image
                        style={{ resizeMode: 'contain', alignSelf: 'center' }}
                        source={require('../Resource/image/watch2.jpeg')}
                    />
                    <ActionButton
                        buttonColor="#15B8EC"
                        onPress={() => { console.log("hi") }}
                    />
                </View>
                <View style={{ flex: .3, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, marginTop: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 25 }}>NHS_3</Text>
                        <Text style={{ fontSize: 25 }}>Starting - 30</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'transparent', flexDirection: "row", justifyContent: 'center', margin: 10, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 60, backgroundColor: 'transparent', color: '#15B8EC',fontWeight:'bold' }}>30</Text>
                        <Text style={{ backgroundColor: 'transparent', paddingBottom: 15, fontSize: 20 }}>available</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: .2, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10,justifyContent:'center' }}>
                    <Button
                        title="Order"
                        buttonStyle={{backgroundColor:'#15B8EC',borderRadius:10,height:'70%'}}
                    />
                </View>

            </View>
        )
    }
}