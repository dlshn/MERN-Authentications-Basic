import React from 'react'

const Signup = () => {
  return (
    <>
        <div className='signup'>
            <h1>Signup</h1>
            <form action="">
                <input type="text" placeholder='FirstName' />
                <input type="text" placeholder='LastName' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type="submit">Signup</button>
            </form>
        </div>
    
    </>
  )
}

export default Signup
