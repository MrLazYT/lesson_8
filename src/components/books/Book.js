import { useParams, useOutletContext } from "react-router-dom"
//.../books/:id
export default function Book() {
   //Returns the context (if provided) for the child route at this level of the route hierarchy.  
    const [books, setBooks]=useOutletContext()
    // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    let {id}=useParams();
    console.log(id);
    let book=books.find(b=>b.id===parseInt(id));
    console.log(book);
    return (
        <>
            <div className="card-book">
                <h1>{book.id} {book.title}</h1>
                <p>{book.pages} pages</p>
            </div>
        </>
    )
}