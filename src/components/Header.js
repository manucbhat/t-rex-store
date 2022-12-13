import {Badge, Container, FormControl, Navbar,Dropdown} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";

const Header =()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark" style={{height:"80"}}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">TREX STORE</Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl style={{width:"500"}} placeholder="Search a product" className="m-auto"/>

                    </Navbar.Text>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FiShoppingCart color="white" fontSize="25px" />
                        <Badge>10</Badge>  
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth:"370"}}>
                           <span style={{padding:"10"}}></span>
                           </Dropdown.Menu>
                        </Dropdown>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;