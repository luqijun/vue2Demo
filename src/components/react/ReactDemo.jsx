import React from 'react'

function reactDemo(props) {
  const { message } = props
  return (
    <div>
      <h2>{ message }</h2>
    </div>
  )
}

export default reactDemo