import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
function AppNavbar(props) {
    const [input, setInput] = useState('');
    // const [inputVal,setInputVal]=useState('')
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleData = () => {
        props.setInputVal(input);
    }
    return (
        <div>
            <Navbar expand="lg" className='nav'>
                <Container fluid>
                    <header className='navHeading'>Weather App</header>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 form-control-lg"
                            aria-label="Search"
                            value={input}
                            onChange={handleChange}
                        />
                        <Button variant="outline-success" onClick={handleData}>Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;