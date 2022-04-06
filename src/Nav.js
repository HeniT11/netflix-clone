import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListner("scroll");
        };
    }, []);
    
 return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className='nav__logo'
            src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
            alt="Netflix Logo"
        />
        <img
            className='nav__avatar'
            src="https://media-exp1.licdn.com/dms/image/C5603AQHomp9iXGcFiA/profile-displayphoto-shrink_200_200/0/1635407488996?e=2147483647&v=beta&t=leOn5UdeF6qIBgXP9pxCGNY1g2DOwoFS1G0LGwRs4WE"
            alt="Netflix Avatar"
        />
    </div>
  )
}

export default Nav