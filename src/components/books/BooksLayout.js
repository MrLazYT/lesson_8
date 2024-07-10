import { Outlet, Route, Routes } from "react-router-dom";
import BooksList from "./BooksList";
import Book from "./Book";
import { useState } from "react";

export default function BooksLayout(){
    const booksArrays=[
        {id:1,title:"Harry Potter", pages:657},
        {id:2,title:"Кобзар", pages:248},
        {id:3,title:"ASP.NET C#", pages:748},
    ]
    let [books, setBooks]=useState(booksArrays);
    return(
    <div>
        {/* /books/*... */}
          {/* <Routes> */}
            {/* <Route path="" element={<h2>List Books</h2>}/> */}
            {/* <Route path="" element={<BooksList booksList={booksArrays}/>}/> */}
            {/* <Route path="1" element={<Book book={booksArrays[0]}/>}/> */}
            {/* <Route path="2" element={<Book book={booksArrays[1]}/>}/> */}
            {/* <Route path="3" element={<Book book={booksArrays[3]}/>}/> */}
            {/* <Route path="history" element={<h2> Category History Book </h2>}/> */}
            {/* <Route path="*" element={<h2>List Books</h2>}/> */}
        {/* </Routes> */}
        <Outlet context={[books, setBooks]}/>
    </div>)
}