import React from 'react';
// import styled from 'styled-components';

//https://www.youtube.com/watch?v=5mO-T2o9zuk
// https://www.youtube.com/watch?v=IF6k0uZuypA
import "./Navbar.css"

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        <img src="" alt="" className="logo"/>
        <ul>
            <li>About</li>
            <li>Tenets</li>
            <li>News</li>
            <li>Join</li>
            <li>Sponsor</li>
            <li>Resources</li>
        </ul>

        <div className="searchbox">
            <input type="text" placeholder="Search coming soon!"/>
            <img src="" alt=""/>
        </div>
    </div>
  );
};

export default Navbar;