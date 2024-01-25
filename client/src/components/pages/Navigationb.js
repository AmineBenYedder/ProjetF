import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,} from 'reactstrap';
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Devis from './Devis';



function Navigationb(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")}



  return (
    <div className='Navnav'>
   <Navbar expand="sm" {...args}>
        <NavbarBrand href="/">SHINE-MASTERS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href='/QuiSommesNous'>AdminManagement</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                ACCEUIL
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SERVICES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/NosServices" > NOS SERVICES</DropdownItem>
                <Devis/>
                <DropdownItem divider />
                <DropdownItem>Fermer</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='/Contact'>
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink href="#" onClick={handleLogout} >
          <NavbarText>SE DECONNECTER</NavbarText>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>      
  )
}

export default Navigationb
