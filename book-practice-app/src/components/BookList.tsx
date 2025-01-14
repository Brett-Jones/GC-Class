
import { useState } from "react";
import BookForm from "./BookForm";
import BookRow from "./BookRow";
import { Book } from "../types/book";

function BookList() {
    const [books, setBooks] = useState<Book[]>([
        { title: "The Hobbit", author: "J.R.R. Tolkien" }, 
        { title: "1984", author: "George Orwell" }
    ]);

    const handleAddBook = (newBook: Book) =>{
        setBooks([...books, newBook])
    }

    const clearBooks = () => {
        setBooks([]);
    }

    return(
        <div>
            <h1> Book List </h1>

            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Author </th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((book, index) => (
                        <BookRow key={index} book={book} />
                    ))}
                </tbody>
            </table>

            <button onClick={clearBooks}>Clear Books</button>
            <BookForm onAddBook={handleAddBook}
        </div>

    )


}




export default BookList;
