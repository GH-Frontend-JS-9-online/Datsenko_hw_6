export default function sum(array) {
    let sum = 0
    array.forEach(num => {
        sum += num
    })
    return sum
}