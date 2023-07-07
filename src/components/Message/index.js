// Write your code here

const Message = props => {
  const {isLoggedIn} = props
  console.log(isLoggedIn)

  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="msg"> {message} </h1>
}

export default Message
