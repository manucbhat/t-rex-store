import {Container, FormControl, Navbar} from "react-bootstrap";

const Header =()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark" style={{height:"80"}}>
                <Container>
                    <Navbar.Brand>
                        <a href="/">T-Rex-store</a>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl style={{width:"300"}} placeholder="Search a product"/>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;