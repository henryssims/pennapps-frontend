import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [sticky, setSticky] = useState(false);
    const navbarOffset = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > navbarOffset.current.clientHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>  
            <div ref={navbarOffset} id="navbarOffset"></div>
            <div id='navbar' className={sticky ? 'sticky' : ''}>
                <div className='left'>
                    <a href="#header">PENNAPPS</a>
                </div>
                <div className='right'>
                    <a href="#about">ABOUT</a>
                    <a href="#apply">APPLY</a>
                </div>
            </div>
            <div style={sticky ? ({ marginTop: 80 }) : ({})}></div>
        </>
    )
}