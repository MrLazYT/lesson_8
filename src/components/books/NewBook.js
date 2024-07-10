import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
export default function NewBook() {
    const navigate = useNavigate();
    const [books, setBooks] = useOutletContext();

    const book = {
        id: books.length + 1,
        title: "",
        pages: 0
    };
    const [newBook, setNewBook] = useState(book);

    // HOW HANDLE FORMS
    //==========1.  using onChange event==============
    // const handleTitleChange = (event) => {
    //     console.log(event.target);
    //     const value = event.target.value;
    //     setNewBook({
    //         ...newBook,
    //         title:value
    //         });
    // }

    // const handlePagesChange = (event) => {
    //     const value = event.target.value;
    //     setNewBook((newBook)=>({
    //         ...newBook,
    //         pages:value
    //         }));
    // }
    //OR
    // const handleInputChange = (event) => {
    //     console.dir(event.target)
    //     const { name, value } = event.target;
    //     setNewBook((newBook) => ({
    //         ...newBook,
    //         [name]: value
    //     }));
    // }

    //=====================2. using useRef (React.createRef()) in functional (class) Components  = > ref binding to input
    const titleRef = useRef(null); // {current: ""}
    console.log(titleRef.current);
    const pagesRef = useRef(null); // {current: 0}
    console.log(pagesRef.current);

    //===================== for variant 1 and 2
    // const submit = (event) => {
    //     event.preventDefault();
    //     // console.log(event.target);
    //     // newBook.title = document.getElementById("title").value;
    //     // newBook.pages = document.getElementById("pages").value;
    //     // setNewBook(newBook);
    //     //for variant 2 = > usrRef
    //     //read ref data
    //     // console.dir(titleRef.current);
    //     // console.log(titleRef.current.value);
    //     // console.log(pagesRef.current.value);
    //     newBook.title=titleRef.current.value;
    //     newBook.pages=pagesRef.current.value;

    //     setNewBook({...newBook});
    //     console.log(newBook);
    //     setBooks([...books, newBook]);
    //     // navigate to
    //     navigate("/books");
    // }

    // =============3.  using hook useForm() in  react-hook-form===========
    const {register, handleSubmit}=useForm();
    const onSubmit=(addBook)=>{
        addBook.id=books.length+1;
        console.log(addBook);
        setBooks([...books,addBook]);
        navigate("/books");
    }

    return (
        <>
            <div className="form-newBook">
                {/* <form action="" onSubmit={submit}> */}
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <label htmlFor="title" >Title: </label>
                        {/* <input type="text" id="title" name="title" onChange={handleTitleChange} value={newBook.title} /> */}
                        {/* <input type="text" id="title" name="title" onChange={handleInputChange} value={newBook.title} /> */}
                        {/* <input ref={titleRef} type="text" id="title" name="title"/> */}
                        <input {...register("title")} type="text" id="title"/>
                        
                    </div>
                    <div className="container-input">
                        <label> <span>Pages:</span>
                            {/* <input type="number" min="0" id="pages" name="pages" onChange={handlePagesChange} value={newBook.pages} /> */}
                            {/* <input type="number" min="0" id="pages" name="pages" onChange={handleInputChange} value={newBook.pages} /> */}
                            {/* <input ref={pagesRef} type="number" min="0" id="pages" name="pages" /> */}
                        <input {...register("pages")} type="number" id="pages"/>

                        </label>
                    </div>
                    <div className="container-button">
                        {/* <input type="submit" onClick={submit} value="Add Book"/>                     */}
                        <input type="submit" value="Add Book" />
                    </div>
                </form>
            </div>
        </>
    )
}