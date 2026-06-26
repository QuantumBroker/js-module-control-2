class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    info() {
        return `${this.title} ${this.author} (${this.year})`;
    }
}

class EBook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }

    info() {
        return `${super.info()}, ${this.fileSize} MB`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        }
    }

    findByAuthor(author) {
        return this.books.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    getNewest() {
        if (this.books.length === 0) return null;
        return this.books.reduce((newest, current) => current.year > newest.year ? current : newest, this.books[0]);
    }
}

// Блок тестування
console.log("\n=== ТЕСТ ЗАВДАННЯ 4 ===");
const lib = new Library();
lib.addBook(new Book("Кобзар", "Шевченко", 1840));
lib.addBook(new EBook("JS Guide", "MDN", 2024, 15));
lib.addBook(new Book("Тіні забутих предків", "Коцюбинський", 1911));

const found = lib.findByAuthor("Шевченко");
console.log("Пошук автора 'Шевченко':", found[0] ? found[0].title : "Не знайдено"); 
console.log("Найновіша книга інфо:", lib.getNewest().info());