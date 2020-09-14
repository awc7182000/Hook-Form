import React from "react";

const Form = props =>{
    const{inputs,setInputs} = props;

    const onChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return(
        <form>
            <label htmlFor= "firstName">First Name</label>
            <input onChange = {onChange} type="text" name="firstName"></input>
            <label htmlFor= "lastName">Last Name</label>
            <input onChange = {onChange} type="text" name="lastName"></input>
            <label htmlFor= "email">Email</label>
            <input onChange = {onChange} type="text" name="email"></input>
            <label htmlFor= "passWord">Password</label>
            <input onChange = {onChange} type="text" name="passWord"></input>
            <label htmlFor= "confirmPassword">Confirm Password</label>
            <input onChange = {onChange} type="text" name="confirmPassword"></input>
        </form>
    );
};
export default Form;