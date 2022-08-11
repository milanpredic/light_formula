import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import {useTheme} from "@react-navigation/native";
import RangeColors from "../utils/RangeColors";
import {getColor} from "../utils/LightFormula";

interface Props {
    value: number
}

const Chart: React.FC<Props> = ({ value }) => {
    const theme = useTheme();
    const [valueColor, setValueColor] = useState('white');

    useEffect(() => {
        setValueColor(value ? getColor(value) : 'white')
    }, [value]);

    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;

    const totalColors = Object.keys(RangeColors).length;
    const amount = 100;
    const total = totalColors * amount;
    const percentage = (amount / total) * 100;
    const strokeDashoffset =
        circleCircumference - (circleCircumference * percentage) / 100;
    const angle = (amount / total) * 360;

    return (
        <View style={styles.container}>
            <View style={styles.graphWrapper}>
                <Svg height="160" width="160" viewBox="0 0 180 180">
                    <G rotation={-90} originX="90" originY="90">
                        { total === 0 ? (
                            <Circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                stroke="#F1F6F9"
                                fill="transparent"
                                strokeWidth="40"
                            />
                        ) : (
                            <>
                                {
                                    Object.values(RangeColors).map((color, i) =>
                                        <Circle
                                            key={i}
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            stroke={color.hex}
                                            fill="transparent"
                                            strokeWidth="40"
                                            strokeDasharray={circleCircumference}
                                            strokeDashoffset={strokeDashoffset}
                                            rotation={i * angle}
                                            originX="90"
                                            originY="90"
                                            strokeLinecap="round"
                                        />
                                    )
                                }
                            </>
                        )
                        }
                    </G>
                </Svg>
                <Text style={[styles.label, { color: valueColor }]}>{value}</Text>
            </View>
        </View>
    );
};

export default Chart;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        position: "absolute",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 24,
    },
});