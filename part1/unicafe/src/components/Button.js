import React from "react";

const Button = ({handleClick, value}) => <button value={value} onClick={handleClick}>{value}</button>


export default Button