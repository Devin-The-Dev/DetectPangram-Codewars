function isPangram(string) {
    const lowerCase = string.toLowerCase();
    const lettersInString = [...new Set(lowerCase)];
    let count = 0; //  max 26
    for (i = 0; i < lettersInString.length; i++) {
        let ascii = lettersInString[i].charCodeAt(0);
        //  just ASCII 97-122
        if (ascii >= 97 && ascii <= 122) {
            count++
        }
    }
    if (count == 26) {
        return true
    } else {
        return false
    }
}