class PasswordGenerator {
    constructor() {
      this.lowerCase = 'abcdefghijklmnopqrstuvwxyz';
      this.upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.numbers = '0123456789';
      this.specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?';
    }

    randomChar(chars) {
      return chars[Math.floor(Math.random() * chars.length)];
    }
  
    generate(length = 12, useLowerCase = true, useUpperCase = true, useNumbers = true, useSpecialChars = true) {
      let chars = '';
      if (useLowerCase) chars += this.lowerCase;
      if (useUpperCase) chars += this.upperCase;
      if (useNumbers) chars += this.numbers;
      if (useSpecialChars) chars += this.specialChars;
  
      if (chars.length === 0) {
        throw new Error('Поле не должно быть пустым');
      }
  
      let password = '';
      for (let i = 0; i < length; i++) {
        password += this.randomChar(chars);
      }
      return password;
    }
  }
  
  module.exports = PasswordGenerator;