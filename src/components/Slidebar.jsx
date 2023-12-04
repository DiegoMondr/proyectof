//Slidebar.jsx
import '../styles/Slidebar.css';
import React, { useState } from "react";
import {
  FaBars,
  FaUsers,
  FaAngleDown,
  FaCircleNotch,

} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Sidebar = ({ children, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({}); // Estado para el control de apertura de los dropdowns

  const toggle = () => setIsOpen(!isOpen);
/* 
Arquetipos
Big5
Enfocate
Herripcf
Motivacion
Mxvsjp
Talentintegral
*/
/* 
Informacion
blog
juego
examen
*/

  const menuItems = {
    Operaciones: [
        {
          path: "/kaskag",
          name: "Kasuga & Kenji",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/kinformacion",
              name: "Informacion",
            },
            {
              path: "/kblog",
              name: "Blog",
            },
            {
              path: "/kjuego",
              name: "Juego",
            },
            {
              path: "/kexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/arquetipos",
          name: "Arquetipos Sistemicos",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/ainformacion",
              name: "Informacion",
            },
            {
              path: "/ablog",
              name: "Blog",
            },
            {
              path: "/ajuego",
              name: "Juego",
            },
            {
              path: "/aexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/big5",
          name: "Big 5",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/binformacion",
              name: "Informacion",
            },
            {
              path: "/bblog",
              name: "Blog",
            },
            {
              path: "/bjuego",
              name: "Juego",
            },
            {
              path: "/bexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/enfocate",
          name: "Enfocate",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/einformacion",
              name: "Informacion",
            },
            {
              path: "/eblog",
              name: "Blog",
            },
            {
              path: "/ejuego",
              name: "Juego",
            },
            {
              path: "/eexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/herripcf",
          name: "Herripcf",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/hinformacion",
              name: "Informacion",
            },
            {
              path: "/hblog",
              name: "Blog",
            },
            {
              path: "/hjuego",
              name: "Juego",
            },
            {
              path: "/hexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/motivacion",
          name: "Motivacion",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/informacion",
              name: "Informacion",
            },
            {
              path: "/blog",
              name: "Blog",
            },
            {
              path: "/juego",
              name: "Juego",
            },
            {
              path: "/examen",
              name: "Examen",
            },
            
          ],
        },
        {
          path: "/mxvsjp",
          name: "Mxvsjp",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/minformacion",
              name: "Informacion",
            },
            {
              path: "/mblog",
              name: "Blog",
            },
            {
              path: "/mjuego",
              name: "Juego",
            },
            {
              path: "/mexamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/talentintegral",
          name: "Talentintegral",
          icon: <FaUsers />,
          subOptions: [
            {
              path: "/tinformacion",
              name: "Informacion",
            },
            {
              path: "/tblog",
              name: "Blog",
            },
            {
              path: "/tjuego",
              name: "Juego",
            },
            {
              path: "/texamen",
              name: "Examen",
            },
          ],
        },
        {
          path: "/autor",
          name: "Autor",
          icon: <FaUsers />,
          
        },
      ]      
  };

  const menu = menuItems[currentPage] || [];
  
  // Función para manejar el clic en el elemento "link" y abrir/cerrar el dropdown correspondiente
  const handleLinkClick = (itemName) => {
    // Crear una copia del estado actual de los dropdowns
    const updatedDropdownStates = { ...dropdownStates };
    // Cambiar el estado del dropdown correspondiente
    updatedDropdownStates[itemName] = !updatedDropdownStates[itemName];
    // Actualizar el estado de los dropdowns
    setDropdownStates(updatedDropdownStates);
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <div style={{ width: isOpen ? "370px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "0px" : "0px" }}
            className="bars">

            <FaBars onClick={toggle} />
          </div>
  
          <img
            src={process.env.PUBLIC_URL + "/Assets/logoa.png"}
            alt="Veotrack"
            style={{display: isOpen ? "block" : "none", width: "90%",}}className="logo"/>
        </div>

        {menu.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              activeClassName="active">

                <div className="link" onClick={() => handleLinkClick(item.name)} >

                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text">{item.name}</div>

                  <div 
                    style={{ display: isOpen ? "block" : "none", 
                    cursor: "pointer",
                    color: 'white'}}
                    className={`flecha ${dropdownStates[item.name] ? 'open' : ''}`}>
                    <FaAngleDown />
                  </div>

                </div>
            </NavLink>



                {/* Verificamos si hay subopciones y las mostramos si existen y el dropdown correspondiente está abierto */}
                {item.subOptions && isOpen && dropdownStates[item.name] && (
                  <div className="sub-options-container">
                    <ul className="sub-options">
                      {item.subOptions.map((subItem, subIndex) => (
                        <NavLink
                          to={subItem.path}
                          key={subIndex}
                          className="sub-link"
                          activeClassName="active"
                        >
                          <div className="sub-link_text" style={{display: isOpen ? "block" : "none"}}>
                            <FaCircleNotch/>{subItem.name}
                          </div>
                        </NavLink>
                      ))}
                    </ul>
                  </div>
              )}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
