import { Book } from "../types/book"

interface BookRowProps {
    book: Book
}


function BookRow ({ book }: BookRowProps) {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    );
}




export default BookRow;