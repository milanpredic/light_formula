import {View} from "./Themed";
import RangeColors from "../utils/RangeColors";
import React from "react";
import {getColor} from "../utils/LightFormula";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

interface Props {
    value: number
}

const ColorSpectrum: React.FC<Props> = ({value}) => {
    const color = getColor(value)
    const theme = useTheme();

    return (
        <View style={[styles.colorPalette, { backgroundColor: theme.colors.background }]}>
            {
                Object.values(RangeColors).map((rangeColor, rangeColorIndex) => (
                    <View
                        key={rangeColorIndex}
                        style={[{
                            backgroundColor: rangeColor.hex
                        }, styles.colorPaletteItem]}
                    >
                        {
                            color === rangeColor.hex && !!value &&
                            <View style={styles.colorPalettePointer} />
                        }
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    colorPalette: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: 40
    },
    colorPaletteItem: {
        flex: 1,
        position: 'relative',
        width: 20
    },
    colorPalettePointer: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 10,
        borderTopColor: 'transparent',
        borderTopWidth: 10,
        borderRightColor: 'white',
        borderRightWidth: 10,
        borderStyle: 'solid',
        height: 0,
        position: 'absolute',
        right: -15,
        // TODO: calc ide samo sass
        // top: 'calc(50% - 10px)',
        top: 100,
        width: 0,
    }
})

export default ColorSpectrum