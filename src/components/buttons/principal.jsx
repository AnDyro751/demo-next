import PropTypes from 'prop-types'
import classNames from "classnames";

export default function PrincipalButton({disabled, text, type}) {
  const BUTTON_CLASS = classNames({
    'w-full text-white px-3 py-3 rounded hover:shadow': true,
    'cursor-not-allowed bg-indigo-400': disabled,
    'cursor-pointer bg-indigo-700 ': !disabled
  })
  return (
    <button
      disabled={disabled}
      className={BUTTON_CLASS}
      type={type}
    >
      {text}
    </button>
  )
}

PrincipalButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

PrincipalButton.defaultProps = {
  disabled: false,
  text: "",
  type: "button"
}