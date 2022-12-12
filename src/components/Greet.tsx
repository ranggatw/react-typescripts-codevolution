type GreetProps = {
  name: string
}

export const Greet = (props:GreetProps ) => {
  return (
    <div>Hello my name is {props.name}</div>
  )
}