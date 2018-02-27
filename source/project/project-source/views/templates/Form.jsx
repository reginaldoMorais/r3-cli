import React from 'react';

export const required = value => (value || value == '' ? undefined : 'Campo requerido');

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);

export const minValue = min => value => (value && value < min ? `Must be at least ${min}` : undefined);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const tooOld = value => (value && value > 65 ? 'You might be too old for this' : undefined);

export const aol = value =>
  value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined;

export const renderInput = ({
  input,
  label,
  autoComplete = 'on',
  placeholder,
  type,
  className,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          autoComplete={autoComplete}
          placeholder={placeholder}
          type={type}
          className={`form-control ${className}`}
        />
        {touched &&
          ((error && <span className="formMessage alert-danger">{error}</span>) ||
            (warning && <span className="formMessage alert-warning">{warning}</span>))}
      </div>
    </div>
  );
};

export const renderNumber = ({ input, label, placeholder, min, max, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type="number" min={min} max={max} className="form-control" />
        {touched &&
          ((error && <span className="formMessage alert-danger">{error}</span>) ||
            (warning && <span className="formMessage alert-warning">{warning}</span>))}
      </div>
    </div>
  );
};

export const renderSelect = ({ input, label, key, inline, children, meta: { touched, error, warning } }) => {
  if (inline) {
    return (
      <div className="form-control-inline">
        <label>
          <span>{label}</span>
          <select {...input} className="form-control" key={key}>
            <option value="" />
            {children}
          </select>
          {touched &&
            ((error && <span className="formMessage alert-danger">{error}</span>) ||
              (warning && <span className="formMessage alert-warning">{warning}</span>))}
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <div>
          <select {...input} className="form-control" key={key}>
            <option value="" />
            {children}
          </select>
          {touched &&
            ((error && <span className="formMessage alert-danger">{error}</span>) ||
              (warning && <span className="formMessage alert-warning">{warning}</span>))}
        </div>
      </div>
    );
  }
};

export const renderTextarea = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={placeholder} type="textarea" className="form-control" />
        {touched &&
          ((error && <span className="formMessage alert-danger">{error}</span>) ||
            (warning && <span className="formMessage alert-warning">{warning}</span>))}
      </div>
    </div>
  );
};

export const renderCheckbox = ({ input, label, className, type, key, meta: { touched, error, warning } }) => {
  return (
    <div className="checkbox-item">
      <label>
        <input {...input} type="checkbox" className={className} key={key} />
        <span>{label}</span>
      </label>
      <div>
        {touched &&
          ((error && <span className="formMessage alert-danger">{error}</span>) ||
            (warning && <span className="formMessage alert-warning">{warning}</span>))}
      </div>
    </div>
  );
};
