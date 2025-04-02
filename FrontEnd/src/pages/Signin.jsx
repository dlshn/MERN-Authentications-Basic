import React from 'react'

const Signin = () => {
  return (
    <>
    <div className='signin'>
            <h1>Signin</h1>
            <form action="">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                
                <button type="submit">Signin</button>
            </form>
        </div>
    </>
  )
}

export default Signin