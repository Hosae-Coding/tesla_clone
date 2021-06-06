import React from 'react';
import './buttonPrimary.css';

const ButtonPrimary = ({name , type, onClick}) => {
   return <button className="buttonPrimary" onClick={onClick} type={type} >
       {name}
   </button>;
};

export default ButtonPrimary;
