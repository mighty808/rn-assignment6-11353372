    import React, { useEffect, useState } from 'react';
    import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    export default function Products() {
    
    const groupedData = groupIntoPairs(wear);

    return (
        <View style={styles.container}>
            
        <FlatList
            data={groupedData}
            renderItem={({ item }) => (
            <View style={styles.row}>
                {item.map((product, index) => (
                <View key={index} style={styles.productContainer}>
                    <View style={styles.imageContainer}>
                    <Image source={product.image} style={styles.image} />

                    <TouchableOpacity>
                        <Image source={require('../assets/plus.png')} style={styles.plusIcon} />
                    </TouchableOpacity>
                    
                    </View>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.kind}>{product.kind}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                </View>
                ))}
            </View>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
    }

    const groupIntoPairs = (data) => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
        pairs.push(data.slice(i, i + 2));
    }
    return pairs;
    };

    const wear = [
    { id: 1, image: require('../assets/dress1.png'), name: 'Office Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 2, image: require('../assets/dress2.png'), name: 'Black Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 3, image: require('../assets/dress3.png'), name: 'Church Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 4, image: require('../assets/dress4.png'), name: 'Lamerei Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 5, image: require('../assets/dress5.png'), name: '21WN Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 6, image: require('../assets/dress6.png'), name: 'Lopo Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 7, image: require('../assets/dress7.png'), name: '21WNT Wear', kind: 'reversible angora cardigan', price: '$120' },

    { id: 8, image: require('../assets/dress3.png'), name: 'lame Wear', kind: 'reversible angora cardigan', price: '$120' },
    ];

    const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    productContainer: {
        marginVertical: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    plusIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    kind: {
        fontSize: 13,
        color: 'gray',
    },
    price: {
        fontSize: 23,
        color: 'red',
    },
    });
