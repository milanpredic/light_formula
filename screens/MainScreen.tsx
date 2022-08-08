import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import LightFormula, {LightFormulaResult} from "../utils/LightFormula";
import ColorSpectrum from "../components/ColorSpectrum";
import List from "../components/List";

export default function MainScreen({navigation}: RootTabScreenProps<'TabOne'>) {
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

    useEffect(() => {

    }, [result.total])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Light Formula: {average}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <ColorSpectrum value={average} />
            {
                result.length && <List value={average} />
            }
            <SearchBar
                clicked={clicked}
                setClicked={(c) => setClicked(c)}
                searchPhrase={phrase}
                setSearchPhrase={(p) => setPhrase(p)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        width: '100%',
    },
});
