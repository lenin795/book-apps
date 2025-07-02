import 'bootstrap/dist/css/bootstrap.min.css'
import { read } from './Book'
import { useEffect, useState } from 'react'

export const Readbook=(pos)=>{
    const [bookdata,setBookdata]=useState({
        "bookid":0,
        "booktitle":"",
        "bookauthor":"",
        "bookgenre":"",
        "bookyear":0,
        "bookdescription":""
    })
    const callread=()=>{
        setBookdata(read(pos.ind))
    }
    useEffect(()=>{
        callread();
    })

    return(
        <>
        <div  className='row justify-content-center '>
            <div className=' shadow p-5'>
                <div>
                    <h2>Book Details</h2>
                    <ul className='list-group'>
                        
                        <li className='list-group-item'>Book ID: {bookdata.bookid}</li>
                        <li className='list-group-item'>Book Title: {bookdata.booktitle}</li>
                        <li className='list-group-item'>Book Author: {bookdata.bookauthor}</li>
                        <li className='list-group-item'>Book Genre: {bookdata.bookgenre}</li>
                        <li className='list-group-item'>Book Year: {bookdata.bookyear}</li>
                        <li className='list-group-item'>Book Description: {bookdata.bookdescription}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
    
    
}