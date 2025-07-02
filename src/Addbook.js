import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { added } from "./Book"

export const AddBook=()=>{

    const [bookdata,setBookdata]=useState({
        "bookid":0,
        "booktitle":"",
        "bookauthor":"",
        "bookgenre":"",
        "bookyear":0,
        "bookdescription":""
    })

    const add=()=>{
        alert("Book Added Successfully"+JSON.stringify(bookdata))
        added(bookdata);
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
        })
    }

    return(
        <>
        <div className=" mt-3" >
            
            <h2 className="text-center">ADD BOOK DETAILS</h2>

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
                        <button className='btn btn-outline-success text-dark ' onClick={add}>Add Book</button>
                    </div>

                    <div className='col-3'>
                        <button className='btn btn-outline-danger text-dark ' onClick={Cancel}>Cancel</button>
                    </div>

                </div>

            </div>
            </div>
        </div>
        </>
    )
}