import React from 'react'

const PropsPassingComponent = ({name,id,email}) => {
  return (
    <div>
        {/* <h1>{props.name}</h1>
        <h1>{props.id}</h1>
        <h1>{props.email}</h1> */}
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{id}</h1>

    </div>
  )
}

export default PropsPassingComponent