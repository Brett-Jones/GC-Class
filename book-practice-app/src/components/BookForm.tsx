
import { useState } from "react"
import { Book } from "../types/book"


interface BookFormProps {
    onAddBook: (book : Book) => void;
}

function BookForm ({ onAddBook } : BookFormProps){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && author) {
            onAddBook({title, author});
            setTitle('');
            setAuthor('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input 
                    type="text"
                    value={title}   
                    onChange={(e) => setTitle(e.target.value)}  
                    required           
                />
            </div>
            <div>
            <label>Author: </label>
                <input 
                    type="text"
                    value={author}  
                    onChange={(e) => setAuthor(e.target.value)}    
                    required           
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default BookForm;
