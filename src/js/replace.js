const replaceMinMax = (array) => {  
    let tempValue = 0
    let maxValueIndex = array.indexOf(Math.max(...array))
    let minValueIndex = array.indexOf(Math.min(...array))   
    tempValue = array[maxValueIndex]
    array[maxValueIndex] = array[minValueIndex]
    array[minValueIndex] = tempValue
    return array
}
export default replaceMinMax