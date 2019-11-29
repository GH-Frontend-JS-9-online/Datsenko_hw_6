export default function checkLetters(stringValue1, stringValue2) {
    if (stringValue1 === stringValue2) {
        return `100%`
    } else {
        let identicalLetters = []
        if (stringValue1.length === stringValue2.length ) {
            let strLength = stringValue1.length
            for (let i = 0; i < strLength; i++) {
                if (stringValue1[i] === stringValue2[i]) identicalLetters.push(stringValue1[i])        
            }
            return `${(identicalLetters.length / strLength).toFixed(2) * 100}%`
        } else {
            let strLength = (stringValue1.length > stringValue2.length) ? stringValue2.length : stringValue1.length
            for (let i = 0; i < stringValue1.length; i++) {
                if (stringValue1[i] === stringValue2[i]) identicalLetters.push(stringValue1[i])        
            }
            return `${(identicalLetters.length / strLength).toFixed(2) * 100}%`
        }
    }     
}



