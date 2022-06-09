import {useState} from 'react';

const FormAddBook = (props) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState();

    const uploadImage = (event) => {
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            if (this.result && localStorage) {
                setCover(this.result)
            } else {
                alert();
            }
        });
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <section className="formAddBook">
            <h2>Нужно больше книг богу книг</h2>
            <form>
                <label className="formAddBook__input input-text">
                    <span className="input-text__span">Автор/авторы: </span>
                    <input className="input-text__input"
                           type="text"
                           name="author"
                           value={author}
                           onChange={(e) => setAuthor(e.target.value)}
                           placeholder="Введите автора книги"
                           aria-label="Автор/авторы книги."
                           required
                    />
                </label>
                <label className="formAddBook__input input-text">
                    <span className="input-text__span">Название: </span>
                    <input className="input-text__input"
                           type="text"
                           name="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Введите полное название книги"
                           aria-label="Название книги."
                           required
                    />
                </label>
                <label className="formAddBook__input input-image">
                    <span className="input-image__span">Обложка книги: </span>
                    <input className="input-image__input"
                           type="file"
                           size="50"
                           onChange={(e) => uploadImage(e)}
                           name="cover"
                           aria-label="Обложка книги."
                           required
                    />
                </label>
                <img className="formAddBook__preview-img" src={cover} width={100} height={100} alt="Превью выбранной обложки книги."/>
                <input
                    type="button"
                    value="Добавить книгу"
                    onClick={() => props.onBookAddClick(author, title, cover)}
                    className="button button-primary"
                />
            </form>
        </section>
    );
};

export default FormAddBook;