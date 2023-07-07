// Write your code here
import './index.css'

const LogIn = props => {
  const {onChangeState} = props
  const onClickBtn = () => {
    onChangeState()
  }

  return (
    <button type="button" className="btn-style" onClick={onClickBtn}>
      {' '}
      Login{' '}
    </button>
  )
}
export default LogIn
