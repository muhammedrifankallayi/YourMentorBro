
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import ArrowRight from "../../assets/Lottie-Files/arrow-right.json"

import { navItems } from "../../assets/data-sets/navItems"

import { socailMediaLinks } from "assets/data-sets/socialMedia";
import Lottie from "lottie-react";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();



  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <div className="title-wraper" >
                  {/* <span className="title-2" style={{fontWeight:"800",color:"#1e407c"}}> Mentor </span>  <span style={{color:"#ffcd00"}}>Bro</span>  */}
                  {
                    window.location.pathname == '/' ? (
                      <img width={"75px"} height={"5px"} className="black-logo" src={require("../../assets/img/brand/org-img-black.png")} ></img>
                    ) : (
                      <img width={"75px"} height={"5px"} className="white-logo" src={require("../../assets/img/brand/mentorbro-log-white.png")} ></img>
                    )
                  }


                </div>

              </NavbarBrand>
              <div className="d-flex" >

                {


                  window.location.pathname == "/" ? (
                    <Lottie className="lottie-arrow" animationData={ArrowRight} style={{ width: "50px", height: "50px" }} />
                  ) : (
                    <span></span>
                  )
                }
                <button className="navbar-toggler" id="navbar_global">

                  <span className="navbar-toggler-icon" />
                </button>

              </div>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <div className="title-wraper" ><span className="title-2  title-toggle" style={{ fontWeight: "800", color: "#1e407c" }}> Mentor </span>  <span style={{ color: "#ffcd00" }}>Bro</span> </div>
                      </Link>
                    </Col>

                    <Col className="collapse-close" xs="6">

                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>

                  {
                    navItems.map((x) => {
                      return (
                        <UncontrolledDropdown nav>
                          <DropdownToggle nav onClick={() => window.location.href = x?.url}>
                            <i className="ni ni-collection d-lg-none mr-1" />
                            <span className="nav-link-inner--text" style={{ fontWeight: window.location.pathname == x?.url ? "bold" : "normal" }}> {x?.name} </span>
                          </DropdownToggle>
                        </UncontrolledDropdown>
                      )
                    })
                  }

                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>




                  <NavItem>
                    <NavLink
                      className="nav-link-icon s-icon"
                      href={socailMediaLinks?.youtube}
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        youtube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on youtube
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon s-icon"
                      href={socailMediaLinks?.whatsApp}
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        whatsapp
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Contact us on whatsapp
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon s-icon"
                      href={socailMediaLinks?.instagram}
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>




                  <NavItem className="d-none d-lg-block ml-lg-4">
                    {/* <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-chat-round mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Contact Us
                      </span>
                    </Button> */}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
