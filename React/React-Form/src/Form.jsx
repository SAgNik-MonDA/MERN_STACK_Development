import { useState } from "react";
export default function Form(){
   let[formData , setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",

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
            // console.log(formData);
            setFormData({fullName: "",
    userName: "",
    password :"",
});

        };



    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" placeholder="Enter your full name" value={formData.fullName} id="fullname" onChange={handleInputChange}  name="fullName"/>
       

        <br />
        <br />

         <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" value={formData.userName}  id="username" onChange={handleInputChange}   name="userName"/>


        <br />
        <br />

         <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" value={formData.password}  id="password" onChange={handleInputChange}   name="password"/>


        <br />
        <br />
      
        <button>Submit</button>
    </form>
    );

}