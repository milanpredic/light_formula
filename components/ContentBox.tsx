import React, {useState} from "react";
import {Text} from '../components/Themed';
import { StyleSheet, TextInput, View} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

interface Props {
    children: React.ReactNode,
    title: string
    // clicked: boolean,
    // searchPhrase: string,
    // setSearchPhrase: (phrase: string) => void,
    // setClicked: (clicked: boolean) => void
}

const ContentBox = ({children, title} : Props) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <View style={styles.box}>
            <View
                style={styles.boxTitleWrapper}
                onTouchStart={() => setOpen(!open)}
            >
                <Text style={styles.boxTitle}>{title}</Text>
                <Text> {open ? '-' : '+'}</Text>
            </View>

            {
                open &&
                <View style={styles.boxContent}>
                    {children}
                </View>
            }
        </View>
    );
};
export default ContentBox;

// styles
const styles = StyleSheet.create({
    box: {
        alignItems: 'stretch',
        border: '1px solid #cacaca',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: '15px',
        width: '100%',
    },
    boxTitleWrapper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '20px'
    },
    boxTitle: {
    },
    boxContent: {
        maxHeight: '400px',
        overflow: 'scroll',
        // padding: '20px'
    }
});