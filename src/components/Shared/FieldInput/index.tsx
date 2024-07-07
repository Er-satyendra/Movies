import './FieldInput.scss';

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, name, error = '' }) => {
  return (
    <div className="form-group position-relative">
      <input name={name} type={type} id={label} value={value} onChange={onChange} placeholder={label}/>
      {error && <div className='text-danger fs12 fw700 error'>{error}</div>}
    </div>
  );
};

export default InputField