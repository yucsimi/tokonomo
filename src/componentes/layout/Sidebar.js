import React, { useState } from 'react';


/* import { Collapse } from "reactstrap" */
import '../../styles/sidebar.css'


import category from '../../assets/category.png'
import rocket from '../../assets/rocket.png'
import lock from '../../assets/lock.png'
import perfil from '../../assets/perfil.png'
import paper from '../../assets/paper.png'
import comparison from '../../assets/comparison.png'
import settings from '../../assets/Setting.png'
import document from '../../assets/Document.png'
import locker from '../../assets/Locker.png'
import document2 from '../../assets/Document2.png'
import activity from '../../assets/Activity.png'

import SidebarItem from './SidebarItem';




const Sidebar = () => {

    const [activeItem, setActiveItem] = useState("")





    const options = [

        { name: "Dashboard", icon: category },
        {
            name: "Launchpad",
            icon: rocket,
            dropdownOptions: [
                { name: "Launch IDO", icon: comparison },
                { name: "Manage IDO", icon: settings },
                { name: "Tokene IDO", icon: document },
            ]
        },
        {
            name: "Locker", icon: lock, dropdownOptions: [
                { name: "Create Look", icon: locker },
                { name: "Manage IDO", icon: document2 },
                { name: "Tokene IDO", icon: activity },
            ]
        },
        { name: "Your Account", icon: perfil },
        { name: "Docs", icon: paper },

    ]


    return (

        <div className='sidebar  '>

            {options.map(element => <SidebarItem {...element} setActiveItem={setActiveItem} activeItem={activeItem} />)}

        </div>



    );
}

export default Sidebar;