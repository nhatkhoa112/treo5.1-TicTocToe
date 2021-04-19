import React from 'react';
import {Navbar, Nav, Form} from 'react-bootstrap';
const NavigationBar = ({account, setAccount}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', account)
        document.location.reload();
    }

const handleSignOut = () => {

    
    localStorage.setItem('user', "")
}

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img src="data:image/png;base64,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" alt="tictoctoe" className="logo" />
                    TicTocToe
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    
                    </Nav>
                    {(localStorage.getItem("user") === "") ? (
                        <Form inline onSubmit={handleSubmit}>
                            <input type="text" placeholder="username" className="input-text" onChange={(e) => setAccount(e.target.value)} />
                            <input type="submit" value="Sign-in" className="input-submit" onClick={handleSubmit} />
                        </Form>
                    ) : (
                        <Form inline >
                            <h4 class="user-text"> {localStorage.getItem("user")} </h4>
                            <input type="submit" value="Sign-out" className="input-signout" onClick={handleSignOut} />

                        </Form>
                    )}
                    

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
