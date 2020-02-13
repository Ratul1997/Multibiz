import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, NativeModules, PermissionsAndroid, Modal, Button, Dimensions } from 'react-native'
import { Icon, SearchBar, Divider, Image } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import List from '../Resource/List'


const numColumns = 2;
export default class CategoryPage extends Component {
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
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignSelf: 'center', }}>Watch</Text>
                    <Icon name="search" type="evilIcons" size={30} onPress={() => this.setState({ isSearching: true })}></Icon>
                </View>
            </View>
        )
    }
    searchBar = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                containerStyle={{ backgroundColor: "white", borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
                inputContainerStyle={{ backgroundColor: '#E8E6E5' }}
            // onChangeText={this.updateSearch}
            // value={search}
            />
        )
    }
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity
                style={styles.item}
            >
                <View style={{ flex: .5, backgroundColor: 'transparent', height: "40%", justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 5 }}>
                    <Image
                        style={{ flex: 1, resizeMode: 'contain' }}
                        source={require('../Resource/image/watch2.jpeg')}
                    />
                </View>
                <View style={{ flex: .5, backgroundColor: 'transparent', width: '80%', height: '60%', marginTop: 5 }}>
                    <Text style={{ fontSize: 20 }}>{item.code}</Text>
                    <Text style={{ fontSize: 18 }}>Price - {item.buying}/{item.selling}</Text>
                    <Text style={{ fontSize: 18 }}>{item.avail} available</Text>
                </View>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.menuBar()}
                {/* {this.searchBar()} */}
                <FlatList
                    style={{ flex: .9, backgroundColor: 'transparent', flex: 1, }}
                    data={formatData(List, 2)}
                    numColumns={numColumns}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <ActionButton
                    buttonColor="#15B8EC"
                    onPress={() => { console.log("hi") }}
                />
            </View>
        )
    }
}
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 4,
        margin: 10,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: 'black',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        flex: .2
    },
});