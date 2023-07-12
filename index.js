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

const text = "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";

const char = findFirstUniqueCharacter(text);
console.log("Перший унікальний символ:", char);