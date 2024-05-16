import React, { useEffect, useState } from 'react';
import './Menu.css'; // Import CSS file for styling

const Menu = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

    const openMenu = useEffect(() => {
        document.addEventListener('click', (e) => {
        if (!e.target.closest('.click-menu')) {
            setIsOpen(false);
        }
        });
    } , []);

  return (
    <div className="click-menu">
      <button className="menu-button" onClick={toggleMenu}>
        <i className="bi bi-list"/>
      </button>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
