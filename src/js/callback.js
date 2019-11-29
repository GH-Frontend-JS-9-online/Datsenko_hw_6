export function f() {
    return function(callback) {
        callback()
    }
}

export function printer() {
    console.log(`callback function`)
}