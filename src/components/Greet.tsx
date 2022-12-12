type GreetProps = {
  name: string
  messageCount : number
  isLoggedIn: boolean
}

export const Greet = (props:GreetProps ) => {
  return (
    <div>
      <h2>
      {props.isLoggedIn ?
        `Hello my name is ${props.name}. You have ${props.messageCount} unread messages` : "Wellcome Guest"}
    </h2>
    </div>
  )
}