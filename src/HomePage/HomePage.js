import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, NativeModules, PermissionsAndroid,TouchableHighlight, KeyboardAvoidingView, Dimensions, Image } from 'react-native'
import { Icon, SearchBar, ListItem } from 'react-native-elements'
import List from '../Resource/List'

const numColumns = 2;
export default class HomePage extends Component {
    static navigationOptions = {
        title: 'None',
      };
    menuBar = () => {
        return (
            <View style={{ flex: 0.1, width: "85%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', alignSelf: 'center' }}>
                <Icon name="menu" type="entypo" size={30}></Icon>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Home</Text>
                <Icon name="notification" type="antdesign" size={30} onPress={() => console.log()}></Icon>
            </View>
        )
    }
    searchBar = () => {
        return (
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', width: "95%", alignSelf: 'center' }}>
                <SearchBar placeholder="Search here.." inputContainerStyle={{ backgroundColor: 'transparent' }} containerStyle={{ backgroundColor: 'transparent', flex: 0.1, borderWidth: 0 }}></SearchBar>
            </View>
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
                <View style={{ flex: .8, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style= {{flex:1,resizeMode: 'contain'}} 
                        source={require('../Resource/image/watch.jpeg')}
                    />
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.menuBar()}
                <View style={{ flex: 0.9, width: "95%", flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'transparent', alignSelf: 'center', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <View style={{ borderWidth: 1, borderColor: 'black', flex: .1 }}></View>
                    <Text style={{ marginTop: 5, marginBottom: 5, marginRight: 5, fontSize: 25, flex: 0.1, backgroundColor: 'transparent',alignSelf:'center' }}>Category</Text>
                    <FlatList
                        style={{ flex: .9, backgroundColor: 'transparent', flex: 1, }}
                        data={formatData(List, 2)}
                        numColumns={numColumns}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>
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
        justifyContent: 'center',
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 3,
        margin: 10,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: 'black',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignContent:'center',
        marginTop:10,
        flex: .2
    },
});