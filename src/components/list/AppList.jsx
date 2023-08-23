import React from 'react'
import AppItem from '../item/AppItem'

const AppList = (props) => {
  return (
    <ul className='list'>
        {props.data.map((item) => (
          <AppItem name={item.name} salary={item.salary} key={item.id} />
        ))}
    </ul>
  )
}

export default AppList