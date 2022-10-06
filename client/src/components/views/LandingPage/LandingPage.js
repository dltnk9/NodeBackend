import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
useEffect(() => {
  axios.get('/api/hello')
  .then(response => console.log(response.data))
}, [])


const onClickHandler = ( ) => {
  axios.get(`/api/users/logout`)
  .then(response => {
    if(response.data.success) {
      props.history.push('/login')
    }else {
      alert('failed to logout')
    }
  })
}



return (
    <div style={ {
      display:'flex', justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'
    }}>
    
    Landing Page
    
    
    <button onClick={onClickHandler}>
      Log out
    </button>
    
    </div>
  )
}

export default withRouter(LandingPage)