import React from 'react';

import "./custom-button.styles.scss"

//Nested classes custom-button google-sign-in
//you need otherProps for the passed onClick prop
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
        {children}
    </button>
};

export default CustomButton;