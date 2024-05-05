import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useRef } from "react";
import styles from './Layout.module.css'

const Layout = () => {


    return(
        <>
        <div className={styles.navbar}>
            <Menu onClick={handleClick} ref={navItemsContainer} className={styles.hamburger}/>
                    {showNavItems &&
                        <div className={styles.navigation}>
                            <NavLink className={({ isActive}) => isActive ?  styles.active : ''} to='/'>Home</NavLink>
                            <NavLink className={({ isActive}) => isActive ?  styles.active : ''} to='essence'>The Essence of Scrum</NavLink>
                            <NavLink className={({ isActive}) => isActive ?  styles.active : ''} to='scrum-team'>Scrum Team</NavLink>
                            <NavLink className={({ isActive}) => isActive ?  styles.active : ''} to='events'>Sprint Events</NavLink>
                            <NavLink className={({ isActive}) => isActive ?  styles.active : ''} to='artifacts'>Three Artifacts</NavLink>
                        </div>
                    }
        </div>
        <Outlet />
        </>
    )
}

export default Layout;