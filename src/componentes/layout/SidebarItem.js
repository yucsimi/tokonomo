import React, { useState } from 'react'
import icono from '../../assets/icon.png'
import { Collapse } from "reactstrap"
function SidebarItem({ name, icon, dropdownOptions, setActiveItem, activeItem }) {

    const [activeCollapse, setActiveCollapse] = useState(false)

    /* 
        const cambiarCollapse = () => {
            setActiveCollapse(!activeCollapse)
        }
     */

    const handleClickItem = (dropdownItem, dropdownName) => {



        if (dropdownOptions && !dropdownItem) {
            setActiveCollapse(!activeCollapse)

        }
        else {
            setActiveItem(dropdownName)
        }
    }




    return (
        <div>
            <p onClick={() => { handleClickItem(false, name) }} className={`sidebar-item ${activeItem === name && "sidebar-item-active"}`}><span><img src={icon} /></span> {name}  {dropdownOptions && <span className='icono '><img src={icono} /></span>}  </p>
            {dropdownOptions &&
                <Collapse isOpen={activeCollapse}>

                    {dropdownOptions.map(element => <p onClick={() => { handleClickItem(true, element.name) }} className={`sidebar-item-collapse  ${activeItem === element.name && "sidebar-item-active"}`}><span><img src={element.icon} /></span> {element.name}   </p>)}

                </Collapse>
            }
        </div>
    )
}


export default SidebarItem
