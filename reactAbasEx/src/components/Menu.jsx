import { useState, useEffect } from 'react';
import style from './Menu.module.css';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const closeMenu = (event) => {
        if (!event.target.closest(`.${style['wrap-menu']}`) && !event.target.closest(`.${style['menu-button']}`)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, []);

    return(
        <div>
            <div className={style['menu-button']} onClick={toggleMenu}>
                <div className={`${style.bar} ${isOpen ? style['change-bar1'] : ''}`}></div>
                <div className={`${style.bar} ${isOpen ? style['change-bar2'] : ''}`}></div>
                <div className={`${style.bar} ${isOpen ? style['change-bar3'] : ''}`}></div>
            </div>
            <div className={`${style['wrap-menu']} ${isOpen ? style['open'] : ''}`}>
                <p><a href={'/'}>Tecnologias</a></p>
                <p><a href={'/media'}>Média</a></p>
                <p><a href={'/zap'}>Zap</a></p>
                <p><a href={'/ReB'}>Poké</a></p>
            </div>
        </div>
    );
}
