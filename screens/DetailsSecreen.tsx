import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import List from "../components/List";
import {useTheme} from "@react-navigation/native";
import {RootStackScreenProps} from "../navigation/types";

export default function DetailsScreen({ route }: RootStackScreenProps<'Details'>) {
    const theme = useTheme();
    const average = route.params.value || 0;
    return (
        <SafeAreaView style={styles.main}>
            <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.headerLabel, { color: theme.colors.text }]}>{average}</Text>
            </View>
            <View style={[styles.content, { backgroundColor: theme.colors.background }]}>
                { !!average && <List value={average} />}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        flex: 1
        // minHeight: '300px',
        // height: '100vh',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: 20,
    },
    headerLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
});
