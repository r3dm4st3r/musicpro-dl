import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

function Input({ type = 'text', ...props }) {
  const [field, meta] = useField(props['name']);
  const isInvalid = !!(meta.error && meta.touched);

  return (
    <div>
      <input
        className={`form-control ${props['inputClass']} ${isInvalid ? 'is-invalid' : ''}`}
        {...field}
        placeholder={props['placeholder']}
        type={type}
        autoComplete="off"
      />
      <ErrorMessage component="div" className="text-danger block text-left text-xs mt-1" name={field.name} />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
