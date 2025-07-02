import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react'
import { deleteing, fetch, view } from './Book';
import { AddBook } from './Addbook';
import { Readbook } from './Readbook';
import { Updatebook } from './Updatebook';


export const BookPage=()=>{

    const [temparray,setTemparray]=useState([])
    const [addbook,setAddbook]=useState(false);
    const [viewbook,setViewbook]=useState(false);
    const [updatebook,setUpdatebook]=useState(false);
    const [pos,setPos]=useState(0)
    const [obj,setObj]=useState({})

    const setvalue=()=>{
        setTemparray(view)
    }
    useEffect(()=>{
        setvalue()
    })

    return(
        <>
        <h1 className='text-center text-info mt-3'>Book Management <i className="bi bi-book-half"></i> </h1>
        
        <div className='container row justify-content-center p-5'>
            {
                (addbook)?
                <>
                <AddBook/>
                <button className='btn btn-outline-secondary '
                onClick={()=>{
                    setAddbook(false)
                }}
                >Back</button>
                </>
                :

                (viewbook)?
                <>
                <Readbook ind={pos}/>
                <button className='btn btn-outline-secondary col-5 mt-5'
                onClick={()=>{
                    setViewbook(false)
                }}>
                    Back
                </button>
                </>

                :
                (updatebook)?
                <>
                <Updatebook who={pos} mention={obj}/>
                <button className='btn btn-outline-secondary'
                onClick={()=>{
                    setUpdatebook(false)
                }}>
                    Back
                </button>
                </>

                :
                
                <>
                <button className='btn btn-outline-success' 
                onClick={()=>{
                    setAddbook(true)
                }}
                >Add Book Details</button>

                
                <div className=' mt-4'>
                    
                    <table className='table table-striped table-dark'>
                        <thead className=''>
                            <tr>
                                <th >Book ID</th>
                                <th >Book Title</th>
                                <th >Book Author</th>
                                <th >Book Genre</th>
                                <th >Book Year</th>
                                <th >Book Description</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                temparray.map((ele,index)=>(
                                    <tr className='mb-5'>
                                        <td>{ele.bookid}</td>
                                        <td>{ele.booktitle}</td>
                                        <td>{ele.bookauthor}</td>
                                        <td>{ele.bookgenre}</td>
                                        <td>{ele.bookyear}</td>
                                        <td>{ele.bookdescription}</td>

                                        <td>
                                            <button className='btn btn-outline-info'
                                            onClick={()=>{
                                                setViewbook(true)
                                                setPos(index)
                                                }
                                            }
                                            >Read</button>

                                            <button className='btn btn-outline-danger '
                                            onClick={()=>{
                                                setUpdatebook(true)
                                                setPos(index)
                                                const temp=fetch(ele.booktitle)
                                                setObj(temp);
                                            }}
                                            >
                                                Edit
                                            </button>

                                            <button className='btn btn-outline-warning'
                                            onClick={()=>{
                                                setTemparray(deleteing(index))
                                            }}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </>

            }

        </div>
        </>
    )

}