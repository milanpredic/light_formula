import {Latin1, Latin2} from "./Latin";
import {Cyrillic1, Cyrillic2} from "./Cyrillic";
import db from './db';
import RangeColors, {RangeColor} from "./RangeColors";
import {DBRow} from "./db";

export interface LightFormulaResult {
    total: number,
    length: number
}

export default function LightFormula(phrase: string): LightFormulaResult {
    return Array.from(phrase).reduce((result, letter) => {
        const value = Latin1[letter] || Latin2[letter] || Cyrillic1[letter] || Cyrillic2[letter]
        if (value) {
            result.total += value
            result.length++
        }
        return result
    }, {
        total: 0,
        length: 0
    })
}

export function getData(average: number): DBRow[] {
    const color = getRangeColor(average)

    if (!color) {
        return []
    }

    return db.filter((row: DBRow) => isInside(color, row.value))
}

export function getRangeColor(value: number): RangeColor | null  {
    const colors = Object.values(RangeColors).filter((c) => {
        return isInside(c, value)
    })
    return colors.length ? colors[0] : null;
}

function isInside(c: RangeColor, value: number): boolean {
    return c.lower - 1 < value && value <= c.upper
}