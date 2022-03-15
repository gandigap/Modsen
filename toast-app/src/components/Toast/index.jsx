import PropTypes from 'prop-types'

function Toast({ label = 'other', handleClick }) {
  return (
    <div>
      <p>Toast</p>
      <span onClick={handleClick}>{label}</span>
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

Toast.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Toast
