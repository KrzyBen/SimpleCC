function caesarCipher(text, shift) {
    return text
    .split("")
    .map((char) => {
        const charCode = char.charCodeAt(0);

        //check if the character is an uppercase letter
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }

        //check if the character is a lowercase letter
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }

        return char; // Non-alphabetic characters are returned unchanged
    })
    .join("");
}

function encrypt(text, shift) {
    return caesarCipher(text, shift);
}

function decrypt(text, shift) {
    return caesarCipher(text, -shift);
} 

module.exports = {
    encrypt,
    decrypt
};