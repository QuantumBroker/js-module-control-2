/**
 * Завдання 2. Створює лічильник із приватним станом завдяки замиканню.
 * @param {number} initial - Початкове значення лічильника
 * @returns {Object} Об'єкт із методами управління
 */
function createCounter(initial) {
    // Приватна змінна, захищена областю видимості замикання
    let count = initial;

    return {
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        },
        getValue() {
            return count;
        },
        reset() {
            count = initial;
            return count;
        }
    };
}

// Блок тестування
console.log("\n=== ТЕСТ ЗАВДАННЯ 2 ===");
const counter = createCounter(10);

console.log("Стартове значення (очікуємо 10):", counter.getValue());
console.log("Інкремент +1 (очікуємо 11):", counter.increment());
console.log("Інкремент +1 (очікуємо 12):", counter.increment());
console.log("Декремент -1 (очікуємо 11):", counter.decrement());
console.log("Скидання до початкового (очікуємо 10):", counter.reset());