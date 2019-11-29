export default function(array) {
    let maxValue = Math.max(...array)
    let minValue = Math.min(...array)
    let tempValue = 0
    let maxValueIndex = 0
    let minValueIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === minValue) {
            minValueIndex = i
        }
        else if (array[i] === maxValue) {
            maxValueIndex = i
        }        
    }
    tempValue = array[maxValueIndex]
    array[maxValueIndex] = array[minValueIndex]
    array[minValueIndex] = tempValue
    return array
}