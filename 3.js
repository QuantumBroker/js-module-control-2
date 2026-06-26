/**
 * Завдання 3. Асинхронно отримує дані користувача та його пости паралельно.
 * @param {number|string} userId - ID користувача
 * @returns {Object} Зведена інформація або об'єкт помилки
 */
async function fetchUserPosts(userId) {
    try {
        // Запускаємо обидва запити паралельно за допомогою Promise.all для швидкодії
        const [userResponse, postsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        // Перевірка статусів відповідей сервера
        if (!userResponse.ok || !postsResponse.ok) {
            throw new Error("Помилка при завантаженні даних з сервера");
        }

        const user = await userResponse.json();
        const posts = await postsResponse.json();

        return {
            name: user.name,
            email: user.email,
            postsCount: posts.length
        };
    } catch (error) {
        // Обробка будь-яких помилок мережі
        return { error: "Не вдалося завантажити дані" };
    }
}

// Блок тестування
console.log("\n=== ТЕСТ ЗАВДАННЯ 3 ===");
async function runTest3() {
    console.log("Запит даних для користувача з ID: 1...");
    const result = await fetchUserPosts(1);
    console.log("Результат з сервера:", result);
}
runTest3();