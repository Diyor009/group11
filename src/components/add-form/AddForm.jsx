import React, { useState } from 'react'
import "./AddForm.css"
const AddForm = () => {


  return (
    <div className="">
        <h2>ishchi qoshish</h2>
        
        <form className='form'>
            <input type="text" placeholder='name' className='input' name="name" />
            <input type="number" placeholder='salary per month' className='input' name="salary" />
            <input type="button" value="Add" className='button'/>
        </form>
    </div>
   
  )
}

export default AddForm