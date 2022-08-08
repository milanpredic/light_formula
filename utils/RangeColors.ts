
export interface RangeColor {
    lower: number,
    upper: number,
    hex: string
}

export interface RangeColors {
    [key: string]: RangeColor
}

const RangeColors: RangeColors = {
    "crvena": {
        "lower": 0,
        "upper": 459,
        "hex": "#FF0000"
    },
    "crveno-narandzasta": {
        "lower": 460,
        "upper": 478,
        "hex": "#FF3300"
    },
    "narandzasta": {
        "lower": 479,
        "upper": 508,
        "hex": "#FF9900"
    },
    "narandzasto-zuta": {
        "lower": 509,
        "upper": 528,
        "hex": "#FFFF00"
    },
    "zuto-smedja": {
        "lower": 529,
        "upper": 575,
        "hex": "#FFCC99"
    },
    "zuto-zelena": {
        "lower": 576,
        "upper": 601,
        "hex": "#99FF33"
    },
    "zelena": {
        "lower": 602,
        "upper": 635,
        "hex": "#00FF00"
    },
    "zeleno-plava": {
        "lower": 636,
        "upper": 658,
        "hex": "#00CC99"
    },
    "plava": {
        "lower": 659,
        "upper": 701,
        "hex": "#00CCFF"
    },
    "modra": {
        "lower": 702,
        "upper": 737,
        "hex": "#000099"
    },
    "purpurna": {
        "lower": 738,
        "upper": 778,
        "hex": "#CC0099"
    },
    "purpurna2": {
        "lower": 779,
        "upper": 9999,
        "hex": "#A6007C"
    }
}

export default RangeColors;