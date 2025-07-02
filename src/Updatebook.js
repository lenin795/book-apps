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
        <div className="container mt-3">
            <h2 className="text-center">UPDATE BOOK DETAILS</h2>

            <div className='row justify-content-center mt-2'>

            <div className="col-lg-7 col-md-10 col-sm-12">

                <div className="mt-3">
                    <label >Book ID</label>
                    <input type="text" className="form-control" name='bookid' placeholder="Enter Book ID" onChange={track} value={bookdata.bookid} />
                </div>

                <div className="mt-3">
                    <label >Book Title</label>
                    <input type="text" className="form-control" name='booktitle' placeholder="Enter Book Title" onChange={track} value={bookdata.booktitle}/>
                </div>

                <div className="mt-3">
                    <label >Book Author</label>
                    <input type="text" className="form-control"  name='bookauthor' placeholder="Enter Book Author Name" onChange={track} value={bookdata.bookauthor}/>
                </div >
                
                <div className="mt-3">
                    <label >Book Genre</label>
                    <input type="text" className="form-control"  name='bookgenre' placeholder="Enter Book Genre" onChange={track} value={bookdata.bookgenre}/>
                </div>

                <div className="mt-3">
                    <label >Book Year</label>
                    <input type="text" className="form-control"  name='bookyear' placeholder="Enter Book year" onChange={track} value={bookdata.bookyear} />
                </div>

                <div className="mt-3">
                    <label >Book Description</label>
                    <input type="text" className="form-control"  name='bookdescription' placeholder="Enter Book Description" onChange={track} value={bookdata.bookdescription}/>
                </div>

                <div className='row justify-content-center mt-2 mb-4'>

                    <div className='col-3'>
                        <button className='btn btn-outline-success text-dark mt-2' onClick={add}>Update</button>
                    </div>

                    <div className='col-3'>
                        <button className='btn btn-outline-danger text-dark mt-2' onClick={Cancel}>Cancel</button>
                    </div>

                </div>

            </div>
            </div>
        </div>
        </>
    )
}