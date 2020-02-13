import React, { Component } from 'react';
import { View, Text, FlatList, NativeModules, PermissionsAndroid,TextInput } from 'react-native';
import { Button, Input, Icon } from "react-native-elements";
import DropdownAlert from 'react-native-dropdownalert';
import AlertPro from "react-native-alert-pro";
import CustomerInfoForm from './CustomerInfoForm'


export default class CustomerInfo extends Component {
    static navigationOptions = {
        // header: null,
        title: 'CustomerInfo'

    };
    constructor(props) {
        super(props);
        this.state = {
            newOrEditedService: {
                id: new Date().getTime(),
                Header: "",
                BankName: "",
                BankBranchName: "",
                BankAccountType: "",
                BankAccountNo: "",
                BankUserName: "",
                BankPassword: "",
                BankRoutingNo: "",
                BankUrl: "",
                BankNote: "",
            },
            editable: true
        }

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


    setValueForKey = (key, value) => {
        const service = this.state.newOrEditedService;
        service[key] = value;
        this.setState({ newOrEditedService: service })
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                {/* {this.menuBar()} */}
                <FlatList style={{ flex: 0.8 }} data={CustomerInfoForm} renderItem={({ item, index }) => {

                    return (
                        <View style={{ height: item.sizeFactor * 35 }}>
                            <Text style={{ marginLeft: 10, height: 40, fontSize: 18, fontWeight: "bold", textAlign: 'left' }}>{item.header}</Text>
                            <TextInput editable={this.state.editable} style={{ backgroundColor: 'transparent', borderBottomColor: 'transparent',borderRadius:10,marginLeft:10,marginRight:10 }} multiline={item.newline} keyboardType={item.inputTypeText ? "ascii-capable" : "number-pad"}
                                secureTextEntry={item.security} placeholder={item.header} onChangeText={(text) => this.setValueForKey(item.key, text)} value={this.state.newOrEditedService[item.key]} ></TextInput>
                        </View>
                    )
                }} keyExtractor={(item, index) => item.key}></FlatList>
            </View>
        )

    }
}