import React from 'react'

export default function List(props) {
    
  return (
    props.length > 0 &&
    <div>
        <table>
        <tr>
            <td>temp</td>
            </tr>
          {/* {
            
            props && props.map((item)=>
            <tr>
            <td>{item.todo}</td>
            </tr>
            )
          } */}
        </table>
    </div>
  )
}
