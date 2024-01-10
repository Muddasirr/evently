import React from 'react'
type DropdownProps = {
value?:string,
onChangeHandler?:(value:string)=>void
}

const Dropdown = ( {value,onChangeHandler}:DropdownProps) => {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown