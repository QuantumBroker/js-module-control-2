/**
 * Завдання 1. Аналізує бали студентів та повертає об'єкт зі статистикою.
 * @param {Array} students - Масив об'єктів студентів
 * @returns {Object} Статистичні дані
 */
function analyzeScores(students) {
    // Обробка крайнього випадку: порожній масив або некоректні дані
    if (!Array.isArray(students) || students.length === 0) {
        return { passed: [], failed: [], average: 0, best: "" };
    }

    // Використання filter + map для тих, хто здав (>= 60)
    const passed = students
        .filter(student => student.score >= 60)
        .map(student => student.name);

    // Використання filter + map для тих, хто не здав (< 60)
    const failed = students
        .filter(student => student.score < 60)
        .map(student => student.name);

    // Обчислення середнього балу за допомогою reduce
    const totalScore = students.reduce((sum, student) => sum + student.score, 0);
    const average = totalScore / students.length;

    // Пошук студента з найкращим балом за допомогою reduce
    const bestStudent = students.reduce((best, current) => {
        return current.score > best.score ? current : best;
    }, students[0]);

    return {
        passed,
        failed,
        average: Number(average.toFixed(2)), // Округлення до 2 знаків
        best: bestStudent ? bestStudent.name : ""
    };
}

// Блок тестування
const studentsList = [
    { name: "Костя", score: 85 },
    { name: "Андрій", score: 45 },
    { name: "Олена", score: 90 },
    { name: "Іван", score: 58 }
];

console.log("=== ТЕСТ ЗАВДАННЯ 1 ===");
console.log("Вхідні дані:", studentsList);
console.log("Результат аналізу:", analyzeScores(studentsList));