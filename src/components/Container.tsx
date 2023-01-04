import React from "react"

type ContainerProps = {
  styles : React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
    {/* <div style={{ border: `1px solid black`, padding: `1rem`}}> */}
      Text Content goes here 
    </div>
  )
}