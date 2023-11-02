import React from 'react'
import { useParams } from 'react-router-dom'
function user()
{
    const{userid}=useParams()
    return(
        <div className='bg-black-200 text-white text-3xl p-3'> user:{userid}</div>
    )
}
export default user