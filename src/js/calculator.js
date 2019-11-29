export default function createOperation(operation) {
    switch (operation) {
        case 'a': return function(a) {return function(b) {return (a === undefined && b === undefined) ? 0 : a + b}}            
        case 's': return function(a) {return function(b) {return (a === undefined && b === undefined) ? 0 : a - b}}
        case 'm': return function(a) {return function(b) {return a * b}}            
        case 'd': return function(a) {return function(b) {return (b === 0) ?  new Error (`this: ${operation} not correct!`) : a / b}}             
        default: throw new Error (`this: ${operation} is false!`)            
    }
} 