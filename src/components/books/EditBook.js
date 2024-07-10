import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditBook() {
    const navigate = useNavigate();
    const [books, setBooks] = useOutletContext();
    const { id } = useParams();
    const book = books.find(b => b.id === parseInt(id));
    console.log(book);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: book.id,
            title: book.title,
            pages: book.pages
        }
    });
    const onSubmit = (editBook) => {
        const updateBook = {
            ...editBook,
            pages: parseInt(editBook.pages)
        };

        const updateBooks = books.map(currentBook => {
            if (updateBook.id === currentBook.id) return updateBook;
            return currentBook;
        })
        console.log(updateBook);
        setBooks(updateBooks);
    }

    return (<>
        <div className="form-newBook">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="container-input">
                    <label htmlFor="id" >Id: </label>
                    <input  {...register("id")} disabled />
                </div>
                <div className="container-input">
                    <label htmlFor="title" >Title: </label>
                    <input  {...register("title", { required: true, minLength: 3 })} type="text" id="title" 
                     aria-invalid={errors.title ? "true" : "false"} 
                    />
                   
                        {errors.title?.type==='required' && <p role="alert">Title book is required</p>}
                        {errors.title?.type==='minLength' && <p role="alert">Min length of title  is 3</p>}
                </div>
                <div className="container-input">
                    <label> <span>Pages:</span>
                        <input {...register("pages", { required: true, min: 0 })} type="number" id="pages" />
                        {errors.pages?.type==='required' && <p role="alert">Pages book is required</p>}
                        {errors.pages?.type==='min' && <p role="alert">Min pages is 0</p>}

                    </label>
                </div>
                <div className="container-button">
                    <input type="submit" value="Edit Book" />
                </div>
            </form>
        </div>

    </>);
}

export default EditBook;