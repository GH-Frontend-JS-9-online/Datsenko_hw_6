const foobar = (...arg) => {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] % 3 === 0 && arg[i] % 7 === 0) {
            arg[i] = 'foobar'
        } else if (arg[i] % 3 === 0) {
            arg[i] = 'foo'
        } else if (arg[i] % 7 === 0) {
            arg[i] = 'bar'
        }
    }  
    return arg.join(' ')
}
export default foobar