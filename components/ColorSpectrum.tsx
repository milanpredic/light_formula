import {Text, View} from "./Themed";
import RangeColors from "../utils/RangeColors";
import React from "react";
import {getRangeColor} from "../utils/LightFormula";

interface Props {
    value: number
}

const getColor = (value: number): string => {
    const color = getRangeColor(value);
    return color ? color.hex : '#000000';
}

const ColorSpectrum: React.FC<Props> = ({value}) => {
    const color = getColor(value)

    return (
        <View
            style={{
                flex: 1,
                alignItems: "flex-start",
            }}
        >
            {
                Object.values(RangeColors).map((rangeColor, rangeColorIndex) => (
                    <View
                        key={rangeColorIndex}
                        style={{
                            alignItems: "flex-start",
                            justifyContent: "center",
                            backgroundColor: rangeColor.hex,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            color: color === rangeColor.hex ? '#000000' : rangeColor.hex,
                            fontWeight: "bold"
                        }}>
                            {value.toFixed(0)}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

export default ColorSpectrum