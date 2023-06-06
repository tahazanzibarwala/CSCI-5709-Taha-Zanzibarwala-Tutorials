import React from "react";
import {useForm} from "react-hook-form";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

function Registration() {
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const navigate = useNavigate();
    const password = useRef();
    password.current = watch("password");

    const onSubmit = data => {
        navigate('/validated');
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" {...register('firstName',{required:true,
                    pattern:/^[a-zA-Z ]*$/})}/>
                {errors.firstName && <span>First Name is required. It can only be text.</span>}
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" {...register('lastName',{required:true,
                    pattern:/^[a-zA-Z ]*$/})}/>
                {errors.lastName && <span>Last Name is required. It can only be text.</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" {...register('email',{required:true,
                    pattern:/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}/>
                {errors.email && <span>Enter valid email.</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" {...register('password',{required:true,
                    minLength:8})}/>
                {errors.password && <span>Password must be at least 8 characters long.</span>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Retype Password:</label>
                <input id="confirmPassword" type="password" {...register('confirmPassword',{required:true,
                    validate:(value)=>value===password.current})}/>
                {errors.confirmPassword && <span>Passwords must match!</span>}
            </div>
            <div>
                <button type="submit">Register</button>
            </div>

        </form>
    )
}

export default Registration;
