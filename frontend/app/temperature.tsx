import { ThemedView } from "@/components/ThemedView";
import { View, Text, Button, StyleSheet } from "react-native";
import useSWR from "swr";

export default function Temperature() {
    let { data, error, mutate } = useSWR(['latest', { throwHttpErrors: true }])
    console.log(error)
    return (
        <ThemedView style={styles.container}>
            {!!error && <Text style={[styles.text, { margin: 10, color: 'red' }]}>Error Occurs!</Text>}
            {!!data && !error &&
                <Text style={[styles.text, { margin: 10 }]}>
                    目前溫度：{data.data.temp}度
                </Text>
            }
            {/* <Button title="Refresh" onPress={()=>mutate()}></Button> */}
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20
    }
});