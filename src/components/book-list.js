const BookList = (props) => {
    let bookList = [];
    for (let i = 0; i < props.books.length; i++) {
        bookList.push(
            <li key={props.books[i].id_book? props.books[i].id_book: "0"} className={"book book" + (props.books[i].id_book? props.books[i].id_book : "0")}>
                <div className="cover">
                    <img className="cover__img" width="100" height="100" src={props.books[i].cover} alt="Обложка книги."/>
                </div>
                <div>
                    <p>
                        <span>Название: </span>
                        <span className="title">{props.books[i].title}</span>
                    </p>
                    <p>
                        <span>Автор/ы: </span>
                        <span className="author">{props.books[i].author}</span>
                    </p>
                </div>
                <button className={"button button-second delete-book book" + (props.books[i].id_book? props.books[i].id_book:"0")}
                        onClick={(e) => props.onDeleteButtonClick(e)} aria-label="Удалить из списка.">
                    X
                </button>
            </li>
        )
    }

    return (
        <section>
            <h2>Список имеющихся книг</h2>
            <ol className="book-list">{bookList}</ol>
        </section>
    );
};

export default BookList;