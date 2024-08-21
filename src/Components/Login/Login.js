import { useState } from "react";
import "../Login/Login.css";

/**
 * This component for handling login individual field error message
 */
export default function Login(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label className="label1">{label}</label>
            <input className="input1"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className="span1">{errorMessage}</span>
        </div>
    );
};