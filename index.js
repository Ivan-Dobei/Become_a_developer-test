function findFirstUniqueCharacter(text) {

  const words = text.split(/\s+/);   // Розділяємо текст на окремі слова
  const characters = [];   // Масив для збереження набору символів у словах

  for (let word of words) {   // Проходимося по кожному слову
    
    for (let i = 0; i < word.length; i++) {   // Проходимося по кожному символу у слові
      const char = word[i];
      
      if (word.indexOf(char, i + 1) === -1) { 
        characters.push(char);  // Якщо символ вже зустрічався раніше у слові і більше не повторюється, додаємо його до набору
        break;
      }
    }
  }

console.log(characters)

  for (const char of characters) {   // Проходимося по масиві символів і повертаємо перший унікальний символ у наборі
    let count = 0;

    for (let otherChar of characters) {
      if (char === otherChar) {   // Порівнюємо символ з іншими символами в масиві
        count++; // Якщо знайшли одинакові символи, збільшуємо лічильник
      }
    }
    
    if (count === 1) { // Якщо лічильник дорінює 1, повертаємо унікальний символ
      return char; 
    }
  }

  return null; // Якщо немає унікальних символів, повертаємо null
}

const text = "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";

const char = findFirstUniqueCharacter(text);
console.log("Перший унікальний символ:", char);