import React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

interface Props {
    clicked: boolean,
    searchPhrase: string,
    setSearchPhrase: (phrase: string) => void,
    setClicked: (clicked: boolean) => void
}

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked} : Props) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    styles.searchBar
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")

                    }}/>
                )}
            </View>
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",

    },
    searchBar: {
        backgroundColor: "#333333",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        padding: 10,
        fontSize: 20,
        marginLeft: 10,
        width: "100%",
        color: "#FFFFFF",
        borderWidth: 0
    },
});