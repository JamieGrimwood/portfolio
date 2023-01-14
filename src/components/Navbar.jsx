import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function NavbarComponent() {
    const location = useLocation()

    return (
        <div className="dark">
            <Navbar fluid={true} rounded={true}>
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            src="/JMGCoding.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="JMGCoding Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            JMGCoding
                        </span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link to='/'>
                        <Navbar.Link active={location.pathname == "/"}>
                            Home
                        </Navbar.Link>
                    </Link>
                    <Link to='/projects'>
                        <Navbar.Link active={location.pathname == "/projects"}>
                            Projects
                        </Navbar.Link>
                    </Link>
                    <Link to='/shows-and-gigs'>
                        <Navbar.Link active={location.pathname == "/shows-and-gigs"}>
                            Shows and Gigs
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}