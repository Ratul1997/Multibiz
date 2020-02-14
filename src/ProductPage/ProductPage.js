import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, NativeModules, PermissionsAndroid, Dimensions, TextInput } from 'react-native'
import { Icon, SearchBar, Divider, Image, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import List from '../Resource/List'
import Modal from 'react-native-modal'
import NumericInput from 'react-native-numeric-input'

const widthOfWindow = Dimensions.get('window').width

const numColumns = 2;
export default class ProductPage extends Component {
    static navigationOptions = {
        header: null,

    };
    state = {
        isSearching: false,
        isModalVisible: false
    }


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    menuBar = () => {
        return (
            <View style={{ flex: 0.1, width: '100%', borderBottomColor: 'black', borderBottomWidth: 1 }}>

                <View style={{ flex: 1, width: "85%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', alignSelf: 'center' }}>
                    <Icon name="chevron-small-left" type="entypo" size={30} onPress={() => this.props.navigation.pop()}></Icon>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignSelf: 'center', }}>Product Code</Text>
                    <Icon ></Icon>
                </View>
            </View>
        )
    }
    onNavigate = () => {
        this.setState({isModalVisible:false}),
        this.props.navigation.push('CustomerInfo')
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
                        <Text style={{ fontSize: 60, backgroundColor: 'transparent', color: '#15B8EC', fontWeight: 'bold' }}>30</Text>
                        <Text style={{ backgroundColor: 'transparent', paddingBottom: 15, fontSize: 20 }}>available</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: .2, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, justifyContent: 'center' }}>
                    <Button
                        title="Order"
                        buttonStyle={{ backgroundColor: '#15B8EC', borderRadius: 10, height: '70%' }}
                        onPress={this.toggleModal}
                    />
                </View>

                <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal} onNavigate={this.onNavigate}>
                    <View style={styles.modalContent}>
                        <Icon name="cross" type="entypo" size={30} containerStyle={{ marginRight: 10, justifyContent: 'flex-end', alignSelf: 'flex-end', backgroundColor: 'transparent' }} iconStyle={{ color: 'gray' }} onPress={this.toggleModal}></Icon>
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

                            />
                            <Button
                                title="Order"
                                buttonStyle={{ backgroundColor: '#B0228c', borderRadius: 10, width: '90%' }}
                                onPress={this.onNavigate}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    }
});