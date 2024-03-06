import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home