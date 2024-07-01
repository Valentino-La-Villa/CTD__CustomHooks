import React from 'react'
import { useState } from 'react'
import useForm from '../hooks/useForm'

export const FormsApp = () => {

    const initForm = { username: '', email: '', password: ''}
    const {formState, handleInputChange} = useForm(initForm)

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }

  return (
    <>
    
    <form 
        className='ms-5 w-100 mt-4'
        onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
                type="text"
                className="form-control"
                id="username"
                name='username'
                value={formState.username}
                onChange={handleInputChange}
            />
        </div>
        
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email"
                className="form-control"
                id="email"
                name='email'
                value={formState.email}
                onChange={handleInputChange}
            />
        </div>
        
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password"
                className="form-control"
                id="password"
                name='password'
                value={formState.password}
                onChange={handleInputChange}
            />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </>
  )
}
