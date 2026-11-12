import React, { useState } from 'react'

const SimpleForm = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("this is name value:",name);
        console.log("this is email value:",email);

        
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
  <label htmlFor="">name:</label>
  <input type="name" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)} /><br /> <br />
    <label htmlFor="">email:</label>
  <input type="email" placeholder='enter your email'  value={email} onChange={(e)=>setEmail(e.target.value)}/><br /> <br />
  <button type='submit'>submit</button>
   

        </form>



      
    </div>
  )
}

export default SimpleForm
