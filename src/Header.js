import React from 'react';

import {Navbar,NavItem,Nav,Input,Button,List,Dropdown,Menu,Icon,Layout,MenuItem} from 'antd';

import {Link} from 'react-router-dom';




class Header extends React.Component {
   
  
    render() {
      return (
          <div style={{margin:50}}>
              <ul>
                  <Link to='/Home' style={{padding:20}}>MVT Console</Link>
                  <Link to='/All Projects' style={{padding:20}}>All MVT Projects</Link>
                  <Link style={{padding:20}}>
                    Create
                  </Link>
            
                 
                  <Link to='/About' style={{padding:20}}>About</Link>
              </ul>
            
          </div>


      );
    }
  }
  export default Header;