import { useState } from "react"
import {  update } from "./Book";
import 'bootstrap/dist/css/bootstrap.min.css'



export const Updatebook=(book)=>{

    const[pos,setPos]=useState(book.who);
    const[bookdata,setBookdata]=useState({
        "bookid":book.mention.bookid,
        "booktitle":book.mention.booktitle,
        "bookauthor":book.mention.bookauthor,
        "bookgenre":book.mention.bookgenre,
        "bookyear":book.mention.bookyear,
        "bookdescription":book.mention.bookdescription
    })
    const add=()=>{
        
        update(bookdata,pos)
        
        alert("updated successfully")
    }
    const Cancel=()=>{
        alert("Rejected...!")
        
    }
    const track=(mydata)=>{
        const {name,value}=mydata.target
            setBookdata((adding)=>{
                return{
                    ...adding,[name]:value
                }
            }
        )
    }

    return(
        <>
        <div className="container  ">
            <div className="card shadow-lg rounded-4 p-5 bg-light">
                <h2 className="text-center text-primary mb-4">
                    <i className="bi bi-book-half me-2"></i> Update Book Details
                </h2>

                <form className="row g-4">
                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Book ID</label>
                        <input type="text" className="form-control" name="bookid" placeholder="Enter Book ID" onChange={track} value={bookdata.bookid} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold"> Book Title</label>
                        <input type="text" className="form-control" name="booktitle" placeholder="Enter Book Title" onChange={track} value={bookdata.booktitle} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold"> Author</label>
                        <input type="text" className="form-control" name="bookauthor" placeholder="Enter Author Name" onChange={track} value={bookdata.bookauthor} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Genre</label>
                        <input type="text" className="form-control" name="bookgenre" placeholder="Enter Genre" onChange={track} value={bookdata.bookgenre} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Published Year</label>
                        <input type="text" className="form-control" name="bookyear" placeholder="Enter Book Year" onChange={track} value={bookdata.bookyear} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Description</label>
                        <input type="text" className="form-control" name="bookdescription" placeholder="Enter Description" onChange={track} value={bookdata.bookdescription} />
                    </div>

                    <div className="col-12 d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
                        <button type="button" className="btn btn-success px-4" onClick={add}>Update Book</button>
                        <button type="button" className="btn btn-outline-danger px-4" onClick={Cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}