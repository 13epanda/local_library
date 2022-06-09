import FormAddBook from "./form-add-book";
import BookList from "./book-list";
import {useState} from "react";
import {useLocalStorage} from "../useLocalStorage";

const App = () => {
    let startBooks = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0, 4) === 'book') {
            const book = JSON.parse(localStorage.getItem(localStorage.key(i)));
            startBooks.push(book);
        }
    }
    const [books, setBooks] = useState(startBooks);
    const [id_book, setId_book] = useLocalStorage("quantity_books",0);

    const onBookAddClick = (title, author, cover) => {
        const newBook = {id_book, title, author, cover};
        localStorage.setItem('book'+ id_book, JSON.stringify({id_book, title, author, cover}));
        JSON.parse(localStorage.getItem('book'+ id_book));
        setBooks([books.push(newBook)]);
        setId_book(id_book + 1);
    }
    const onDeleteButtonClick = (evt) => {
        const result = evt.target.className.match(/book\d+$/)[0].toString();
        const idBook = result.slice(4);
        localStorage.removeItem(result);
        for (let i = 0; i < books.length; i++) {
            if(books[i].id_book==idBook) {
                setBooks([books.slice(i, 1)]);
            }
        }
    }

    return (
        <div className="container">
            <h1 className="main-title">Локальная библиотека :)</h1>
            <FormAddBook
                onBookAddClick={onBookAddClick}
            />
            <BookList
                books={books}
                onDeleteButtonClick={onDeleteButtonClick}
            />
        </div>
    );
}
export default App;