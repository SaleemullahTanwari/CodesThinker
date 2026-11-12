import React, { useState } from "react";

const MultipleForm = () => {
const [form,setForm]=useState({
    name:"",
    email:"",
    age:""
})

const handleChange=(e)=>{
    const {name,value}=e.target
    setForm((prev)=>({
...prev,
[name]:value
    }))
}
const handleSubmit=(e)=>{
    e.preventDefault()
console.log("this is form data:",form);

}

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input type="name" value={form.name} name="name" onChange={handleChange} placeholder="enter your name" /> <br /> <br />
        <label htmlFor="">email:</label>
        <input type="email"  value={form.email} name="email" onChange={handleChange} placeholder="enter your email" /> <br /> <br />
        <label htmlFor="">age:</label>
        <input type="age" value={form.age} name="age" onChange={handleChange} placeholder="enter your age" /> <br /> <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default MultipleForm;
