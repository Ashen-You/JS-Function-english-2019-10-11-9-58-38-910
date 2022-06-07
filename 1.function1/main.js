function reverseString(message) {
    return message.split('').reverse().join('');
}
var output = reverseString('hello'); // should return 'olleh'
console.log('The answer1: ', output);