import React ,{useState,Fragment}from 'react'
import {Navbar,Container,Nav,Collapse,NavbarToggler,NavItem,NavLink} from "reactstrap"
import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'


function AppNavBar() {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }


  const user=useSelector((state)=>state.auth.user)
  console.log(user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")}

  const guestLinks = (
        <>
        <div>
        <Fragment>
          <NavItem>
            <RegisterModal />
          </NavItem>
          </Fragment>
          </div>
          <div>
          <Fragment>
          <NavItem>
            <LoginModal />
          </NavItem>
          </Fragment>
          </div>
        </>
      );

      const authLinks = (
        <Fragment>
          <NavItem>
            <Link to="/Dashboard">
              <span className="navbar-text mr-3">
              <strong>{user && `Profil de ${user.name} `}</strong>
              </span>
            </Link>
          </NavItem>
          <NavItem>
          <NavLink href="#" onClick={handleLogout} >       
          </NavLink>
          </NavItem>
          <NavItem>
         
              <span className="navbar-text mr-3">
              <Link to="/">
              <strong>Home</strong>
              </Link>
              </span>
            
          </NavItem>
        </Fragment>
      );

  return (
    <div className="Headerlist" >
    <Navbar expand="sm" >
      <Container className="Headerlist">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {user && user ? authLinks: guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNavBar
