import PropTypes from 'prop-types'
import classNames from "classnames";

export default function SimpleInput({
                                      type,
                                      placeholder,
                                      label,
                                      id,
                                      name,
                                      onChange,
                                      onBlur,
                                      value,
                                      error
                                    }) {

  const INPUT_CLASS_NAME = classNames({
    'w-full border px-3 py-2 rounded': true,
    'mt-2': label,
    'border-gray-300': !error,
    'border-red-400': error
  })

  const LABEl_CLASS_NAME = classNames({
    'w-full text-sm font-medium': true,

  })
  const SPAN_CLASS = classNames({
    'text-gray-800': !error,
    'text-red-500': error,
    'ml-2': true
  })

  return (
    <div className='flex flex-wrap w-full'>
      {
        label && id &&
        <label
          htmlFor={id}
          className={LABEl_CLASS_NAME}
        >
          {label}
          {error &&
          <span className={SPAN_CLASS} >
             {`Error:  ${error}`}
          </span>
          }
        </label>
      }
      <input
        onBlur={onBlur}
        onChange={onChange}
        className={INPUT_CLASS_NAME}
        id={id}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

SimpleInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.any
}

SimpleInput.defaultProps = {
  label: "",
  name: "",
  placeholder: "",
  type: "text"
}