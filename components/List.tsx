import {StyleSheet} from 'react-native';

import React from "react";
import {FlatList} from "react-native";
import {View, Text} from "./Themed";
import {getData} from "../utils/LightFormula";

interface Props {
    value: number
}

const Item = ({ name, details }: any) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{details}</Text>
    </View>
);

const List: React.FC<Props> = ({value}) => {

    return (
        <View>
            <FlatList
                data={getData(value)}
                renderItem={({ item }) => {
                    return <Item name={item.name} details={item.group} />
                }}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});