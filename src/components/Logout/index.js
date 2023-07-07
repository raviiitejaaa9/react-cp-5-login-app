// Write your code here
const LogOut = props => {
  const {onChangeState} = props
  const onClickBtn = () => {
    onChangeState()
  }

  return (
    <button type="button" className="btn-style" onClick={onClickBtn}>
      {' '}
      LogOut{' '}
    </button>
  )
}
export default LogOut
