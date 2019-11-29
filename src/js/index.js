import sum from './sum.js'
import max from './max.js'
import min from './min.js'
import replace from './replace.js'
import {f, printer} from './callback.js'
import foobar from './foobar.js'
import checkLetters from './checkLetters.js'
import createOperation from './calculator.js'

const array = [10, 2, 7, 5, 3, 21, 50, 27, 8]

console.log(`sum: ${sum(array)}`)
console.log(`max: ${max(array)}`)
console.log(`min: ${min(array)}`)
console.log(`before replace min max: `, array)
console.log(`replace: `, replace(array))

f()(printer)

function createRandomArray(amountNumbers) {
    const array = []
    for (let i = 0; i < amountNumbers; i++) {
        array.push(i)
    }
    return array
}

console.log(`foobar: ${foobar(...createRandomArray(100))}`)


console.log(checkLetters('ilopXsoft', 'ilopXsoft')) 
console.log(checkLetters('ilopXsoft', 'ilopXsofw')) 
console.log(checkLetters('ilopXsoft', 'ilopXsrsed')) 
console.log(checkLetters('ilopXsoftreg', 'ilopXsrsed')) 
console.log(checkLetters('ilopXsoftreg', 'ilopXsgewhrsed')) 



const add = createOperation('a')
const sub = createOperation('s')
const mul = createOperation('m')
const div = createOperation('d')


console.log(`add: `, add(2)(3))
console.log(`sub: `,sub(30)(10))
console.log(`mul: `,mul(7)(5))
console.log(`div: `,div(5)(5))











