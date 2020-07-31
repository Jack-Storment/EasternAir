import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/facebook-icon.png'
import instagram from '../img/instagram-icon.png'
import tws from '../img/tws-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Taylored Audio" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About us
              </Link>
              <Link className="navbar-item" to="appointments">
                Appointments
              </Link>
              <Link className="navbar-item" to="/gallery">
                Gallery
              </Link>
              <Link className="navbar-item" to="/testimonials">
                Testimonials
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/Eastern-Air-109819697434099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Triangle Web Solutions" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/easternairnc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Triangle Web Solutions" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://triangleweb.solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={tws} alt="Triangle Web Solutions" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
