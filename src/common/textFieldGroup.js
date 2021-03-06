import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  label,
  name,
  placeholder,
  value,
  id,
  error,
  info,
  type,
  onChange,
  disabled,
  max,
  min
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} style={{color: 'grey'}}>{ label }</label>
      <input
        id={id}
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        max={max}
        min={min}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired

};

TextFieldGroup.defaultProps = {
  placeholder: '',
  label: '',
  id: '',
  error: '',
  disabled: '',
  info: ''

};

export default TextFieldGroup;
