import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const GiphySearch = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true); 

    const apiKey = 'qtq5FJhiFfZ17xoERIntNKNeaMoAPaNl'; 

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get(
                    `https://api.giphy.com/v1/gifs/random`,
                    {
                        params: {
                            api_key: apiKey,
                            tag: 'motivation workout',
                            rating: 'g',
                        },
                    }
                );
                setGifs([response.data.data]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); 
            }
        };

        fetchGifs();
    }, []); 

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={gifs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Image
                            style={styles.image}
                            source={{ uri: item.images.fixed_height.url }}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
    },
    image: {
       width: 350,
       height: 350,
    },
});

export default GiphySearch;