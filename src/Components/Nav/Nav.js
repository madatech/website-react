import { faBars, faCloud, faHamburger, faHeart, faHome, faPuzzlePiece, faRetweet, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from 'hamburger-react';
import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [isOpen, setOpen] = useState(false);

    function setToggleMode() {
        debugger;
        setOpen(!isOpen);
    }
    return (
        <Fragment>
            <div className="Nav">
                <div className="top-row">
                    <div className="brand">
                        <img src="/img/NavLogo.jpg" className="logo" />
                        <span className="brandname">Madatech</span>
                    </div>
                    <div className='toggler'>
                        <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>

                <div className="menu" >
                    <ul>
                        <li>
                            <Link to='/'>
                                <FontAwesomeIcon className='icon' icon={faHome} />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/productivity'>
                                <FontAwesomeIcon className='icon' icon={faHeart} />
                                <span>Productivity</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/cloud'>
                                <FontAwesomeIcon className='icon' icon={faCloud} />
                                <span>Cloud</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/automation'>
                                <FontAwesomeIcon className='icon' icon={faRetweet} />
                                <span>Automation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/products'>
                                <FontAwesomeIcon className='icon' icon={faThList} />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                <FontAwesomeIcon className='icon' icon={faPuzzlePiece} />
                                <span>Services</span>
                            </Link>
                        </li>
                    </ul>
                </div >

                {isOpen ?
                    <div className="menu-mobile" >
                        <ul>
                            <li>
                                <Link to='/'>
                                    <FontAwesomeIcon className='icon' icon={faHome} />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/productivity'>
                                    <FontAwesomeIcon className='icon' icon={faHeart} />
                                    <span>Productivity</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/cloud'>
                                    <FontAwesomeIcon className='icon' icon={faCloud} />
                                    <span>Cloud</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/automation'>
                                    <FontAwesomeIcon className='icon' icon={faRetweet} />
                                    <span>Automation</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/products'>
                                    <FontAwesomeIcon className='icon' icon={faThList} />
                                    <span>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/services'>
                                    <FontAwesomeIcon className='icon' icon={faPuzzlePiece} />
                                    <span>Services</span>
                                </Link>
                            </li>
                        </ul>
                    </div > :
                    <div></div>
                }

            </div>
        </Fragment>
    );
}

export default Nav;