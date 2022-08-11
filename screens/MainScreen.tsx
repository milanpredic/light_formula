import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import LightFormula, {getColor, LightFormulaResult} from "../utils/LightFormula";
import ColorSpectrum from "../components/ColorSpectrum";
import List from "../components/List";
import {useTheme} from "@react-navigation/native";

export default function MainScreen({navigation}: RootTabScreenProps<'TabOne'>) {
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
                <Text
                    style={[styles.headerNumber, {color: average ? getColor(average) : 'white'} ]}
                >
                    {average}
                </Text>
            </View>
            <View style={[styles.content, { backgroundColor: theme.colors.background }]}>
                <ColorSpectrum value={average} />

                { !!result.length && <List value={average} />}
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
        justifyContent: 'space-between',
        padding: 20,
    },
    headerLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    contentInner: {
        flex: 1,
        height: '100%',
        overflow: 'scroll',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
});
