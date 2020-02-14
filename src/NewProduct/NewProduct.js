import React, { Component } from 'react'
import { Text, View, SafeAreaView, SectionList, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native'
import { Icon, SearchBar, Divider, Button } from 'react-native-elements'
import Form from './NewProductFormat'
import config from '../Api/Config'
import * as firebase from 'firebase'


export default class NewProduct extends Component {
    static navigationOptions = {
        title: 'ProductName',

    };
    constructor(props) {
        super(props);
        this.state = {
            newOrEditedService: {
                id: new Date().getTime(),
                Image: '',
                Code: "",
                Product_Brand: "",
                Buying_price: "",
                Description: "",
                Stock: "",
                Dealer: "",
            },
            editable: true
        }

    }
    componentWillMount() {

        // firebase.initializeApp(config);
        // console.log(config)
        // firebase.database().ref('user/01').set(
        //     {
        //         name:'Abc'
        //     }
        // ).then(()=>{
        //     console.log('Inserted')
        // }).catch((error)=>console.log(error))
    }

    setValueForKey = (key, value) => {
        const service = this.state.newOrEditedService;
        service[key] = value;
        this.setState({ newOrEditedService: service })
    }
    renderImage = (item) => {
        return (
            <View style={{ height: item.sizeFactor * 30 - 40, margin: 10, borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginLeft: 10, height: 40, fontSize: 18, fontWeight: "bold", textAlign: 'left' }} onPress={this.openImagePicker}>{item.header}</Text>
            </View>
        )
    }
    renderTextInput = (item) => {
        return (
            <View style={{}}>
                <Text style={{ marginLeft: 10, height: 40, fontSize: 18, fontWeight: "bold", textAlign: 'left' }}>{item.header}</Text>
                <TextInput style={{ borderColor: 'gray', borderWidth: 1, height: item.sizeFactor * 30 - 40, borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 5, textAlignVertical: (item.newline) ? 'top' : 'center' }} editable value={this.state.newOrEditedService[item.key]} multiline={item.newline} keyboardType={item.inputTypeText ? "ascii-capable" : "number-pad"} placeholder={item.header} onChangeText={(text) => this.setValueForKey(item.key, text)}>

                </TextInput>
            </View>
        )
    }
    openImagePicker = () => {
 

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList style={{ flex: 0.8 }} data={Form} renderItem={({ item, index }) => {

                    return (
                        (item.key === "Image") ? this.renderImage(item) : this.renderTextInput(item)
                    )
                }} keyExtractor={(item, index) => item.key}></FlatList>
                <View style={{ flex: .2, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, justifyContent: 'center' }}>
                    <Button
                        title="Create New Item"
                        buttonStyle={{ backgroundColor: '#15B8EC', borderRadius: 10, height: '70%' }}
                    />
                </View>
            </SafeAreaView>

        )
    }
}
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
n