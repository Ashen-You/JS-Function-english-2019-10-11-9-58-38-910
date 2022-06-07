function palindrome(message) {
    console.log(message === message.split('').reverse().join(''));
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true