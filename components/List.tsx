import {ScrollView, StyleSheet} from 'react-native';

import React from "react";
import {FlatList} from "react-native";
import {View, Text} from "./Themed";
import {getData} from "../utils/LightFormula";
import {useTheme} from "@react-navigation/native";

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
    const theme = useTheme();
    const data = getData(value);

    if (!data) {
        return null;
    }

    return (
        <View style={[styles.list, { backgroundColor: theme.colors.background }]}>
            <ScrollView>
                {
                    Object.keys(data).map((groupName, groupIndex) => (
                        <View style={[styles.item, { backgroundColor: theme.colors.background }]} key={groupIndex}>
                            <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>{groupName}</Text>
                            {
                                Object.values(data[groupName]).map((value, index) => (
                                    <Text style={{ color: theme.colors.text}} key={index}>{value}</Text>
                                ))
                            }
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    item: {
        // margin: 30,
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