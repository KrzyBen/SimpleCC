const {askQuestion} = require('./input');
const {encrypt, decrypt } = require('./cipher');

async function main() {
    const option = await askQuestion("Type 'e' to encrypt or 'd' to decrypt: ");

    if (option !== 'e' && option !== 'd') {
        console.log("Invalid option.");
        return;
    }

    const text = await askQuestion("Enter the text: ");
    const shift = parseInt(await askQuestion("Enter the shift value: "), 10);

    if (option === 'e') {
        console.log("Encrypted text:", encrypt(text, shift));
    } else {
        console.log("Decrypted text:", decrypt(text, shift));
    }
}
main();