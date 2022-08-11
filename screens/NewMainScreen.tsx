import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import LightFormula, {LightFormulaResult} from "../utils/LightFormula";
import {useTheme} from "@react-navigation/native";
import Chart from "../components/Chart";
import {RootStackScreenProps} from "../navigation/types";

export default function NewMainScreen({navigation}: RootStackScreenProps<'Root'>) {
    const theme = useTheme();
    const [phrase, setPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    const [average, setAverage] = useState(0);
    const [result, setResult] = useState<LightFormulaResult>({
        total: 0,
        length: 0
    });

    const calculate = (p: string) => {
        const r = LightFormula(p)
        setResult(r)
        setAverage(r.length > 0 ? Math.round(r.total / r.length) : 0)
    }

    useEffect(() => {
        calculate(phrase);
    }, [phrase]);

    return (
        <SafeAreaView style={styles.main}>
            <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.headerLabel, { color: theme.colors.text }]}>Svetlosna Formula</Text>
            </View>
            <View style={[styles.content, { backgroundColor: theme.colors.background }]}>
                <Chart value={average} />
                {/*{ !!result.length && <List value={average} />}*/}
                { !!result.length &&
                    <Pressable onPress={() => navigation.navigate('Details', {
                        value: average
                    })}>
                        <Text style={[styles.readMoreText, { color: theme.colors.text }]}>Vidi još..</Text>
                    </Pressable>
                }
            </View>

            <SearchBar
                clicked={clicked}
                setClicked={(c) => setClicked(c)}
                searchPhrase={phrase}
                setSearchPhrase={(p) => setPhrase(p)}
            />
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
        justifyContent: 'center',
        padding: 20,
    },
    headerLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    contentInner: {
        flex: 1,
        height: '100%',
        overflow: 'scroll',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    readMoreText: {
        textAlign: 'center',
    }
});
