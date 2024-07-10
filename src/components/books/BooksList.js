import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./css/bookList.css";
import { toHaveAccessibleName } from "@testing-library/jest-dom/matchers";
// /books
export default function BooksList() {
    const [books, setBooks] = useOutletContext();
    const navigate=useNavigate();
    const deleteBookById = (id) => {
        // let newList=books.filter(book=>book.id!==id);
        // console.log(newList);
        setBooks(books.filter(book => book.id !== id))

    };
    // console.log(booksList);
    return (
               
            <div className="books">
                <div className="container-newbook">
                    <Link to="/books/newbook">Add New Book</Link>
                </div>
                <table className="book-tables">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>pages</th>
                            <th>delete</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        books.map(b => (
                
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>
                                    <Link to={`/books/${b.id}`}>{b.title}</Link>
                                </td>
                                <td>{b.pages}</td>
                                <td><button onClick={() => deleteBookById(b.id)}>Delete</button></td>
                                <td> <button onClick={() => navigate(`edit/${b.id}`)}> Edit</button></td>
                                </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
     
    )
}