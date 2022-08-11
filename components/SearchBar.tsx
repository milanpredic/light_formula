import React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {useTheme} from "@react-navigation/native";

interface Props {
    clicked: boolean,
    searchPhrase: string,
    setSearchPhrase: (phrase: string) => void,
    setClicked: (clicked: boolean) => void
}

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked} : Props) => {
    return (
            <View style={styles.searchBar}>
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Unesi pojam.."
                    placeholderTextColor={'#aaaaaa'}
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true)

                    }}
                    underlineColorAndroid='transparent'
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}

                {/*<View style={{'width': 20}}>*/}
                {/*    {clicked && (*/}
                {/*        <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {*/}
                {/*            setSearchPhrase("")*/}
                {/*        }}/>*/}
                {/*    )}*/}
                {/*</View>*/}
            </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 40
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: '15%',
    },
    input: {
        padding: 20,
        fontSize: 16,
        marginLeft: 10,
        width: "100%",
        color: "#FFFFFF",
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 30
    },
});