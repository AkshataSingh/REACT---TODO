import React from 'react'

const Work = (props) => {
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
          </div>
          <p className="card-text">
            {props.val} 
          </p>
          <i className="fa-solid fa-trash-can mx-2 ayushbhai" onClick={()=>{
            props.onselect(props.id)
          }}></i>
        </div>
      </div>
    </div>
  )
}

export default Work
