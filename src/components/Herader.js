import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchTodo } from '../actions';
import '../App.css'

export default function Header() {
    const [searchData,setSearchData] = useState(""); 

const dispatch = useDispatch()
useEffect(()=>{
    dispatch(searchTodo(searchData))
  },[searchData])
 
    return (
        <div className="header">

            <div className="searchBox">
                <input type="text" placeholder="Search Product"  onChange={(e) => setSearchData(e.target.value)}/>
            </div>
            <Link to="/" className="btn btn-primary">Assignment-1</Link>

            <Link to="/assignment2" className="btn btn-primary paddingLeft">Assignment-2</Link>
        </div>
    )
}
