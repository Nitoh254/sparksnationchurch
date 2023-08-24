function palindrome(name1, name2, name3, name4) {
    let joinedWord;
    for (let i = 0; i < arguments.length; i++) {
      let splittedWord = arguments[i].split('');
      let reverseWord = splittedWord.reverse();
      joinedWord = reverseWord.join('');
  
      if (joinedWord === arguments[i]) {
        console.log(arguments[i] + ' is a palindrome');
        arguments[i]++;
      }else{
        console.log(arguments[i] + ' is not a palindrome');
        arguments[i]++;
      }
    }
    return joinedWord;
  }
  palindrome('level', 'love', 'kaka', 'racecar');