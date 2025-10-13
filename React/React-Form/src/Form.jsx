import { useState } from "react";
export default function Form(){
   let[formData , setFormData] = useState({
    fullName: "",
    userName: "",

   });

    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value)
    // };

    //     let handleUserName = (event) =>{
    //     setUserName(event.target.value)
    // };

        let handleInputChange = (event)=>{
            let fieldName = event.target.name;
            let newValue = event.target.value;
            
            setFormData ((currData)=>{
                currData[fieldName] = newValue;
                return{...currData};
            });
        };

        let handleSubmit = (event)=>{
            event.preventDefault();
            setFormData({fullName: "",
    userName: ""});
        };



    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" placeholder="Enter your full name" value={formData.fullName} id="fullname" onChange={handleInputChange}  name="fullName"/>
       

        <br />
        <br />

         <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your full name" value={formData.userName}  id="username" onChange={handleInputChange}   name="userName"/>
      
        <button>Submit</button>
    </form>
    );

}