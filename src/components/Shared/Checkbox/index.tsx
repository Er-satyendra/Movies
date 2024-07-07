import './Checkbox.scss';
const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
    return (
        <div className="input-group mb-3 d-flex align-items-center justify-content-center">
            <label className="checkbox__label">{label}
                <input type="checkbox" checked={value} onChange={onChange}/>
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default Checkbox