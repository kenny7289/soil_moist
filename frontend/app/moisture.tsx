import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Moisture() {
    const [data, setData] = useState({ temp: 13.2, moist: 79, datetime: "2024-11-27" });
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('YOUR_API_URL_HERE');
                setData(response.data);
            } catch (err) {
                setError(err);
            }
        }

        fetchData();
    }, []);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Text style={styles.headerImage}>🌡️</Text>
            }>
            <ThemedView style={styles.container}>
                {error && <ThemedText style={styles.errorText}>Error Occurs!</ThemedText>}
                {data.temp !== null && data.moist !== null && data.datetime !== null && (
                    <>
                        <ThemedText style={styles.text}>目前溫度：{data.temp}度</ThemedText>
                        <ThemedText style={styles.text}>目前濕度：{data.moist}%</ThemedText>
                        <ThemedText style={styles.text}>時間：{data.datetime}</ThemedText>
                    </>
                )}
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 20,
        marginVertical: 8,
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        marginVertical: 8,
    },
    headerImage: {
        fontSize: 100,
        textAlign: 'center',
    },
});