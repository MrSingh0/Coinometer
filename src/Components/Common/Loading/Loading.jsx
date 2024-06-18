import React from 'react'
import { CircularProgress } from '@mui/material'
import "./style.css"

const Loading = () => {
  return (
    <div className='loader-container'>
      <CircularProgress />
    </div>
  )
}

export default Loading
