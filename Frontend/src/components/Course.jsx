import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-30 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-2xl'>This is House of Books, here either you <span className='text-yellow-400'>Read</span> or you <span className='text-yellow-400'>Sleep</span>👻</h1>
          <p className='mt-6'>
            <em>"You have entered the Reading Realm. The gates are closed, the coffee is warm, and the books are waiting. Here, plots cut deep, cliffhangers show no mercy, and 'just one more chapter' is a promise rarely kept. In this realm, pages decide your fate."</em><br />
            —<span className='text-yellow-400'> Cersei Lanniester 🩷</span>
          </p>
          <Link to="/">
              <button className='bg-yellow-400 text-black rounded-md p-2 hover:bg-yellow-200 duration-300 hover:cursor-pointer mt-5'>Back</button>
          </Link>  
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key= {item.id} item = {item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course