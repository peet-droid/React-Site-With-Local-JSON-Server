import {Link} from 'react-router-dom';

const Nav = () => {
        return ( 
                <nav className="navbar">
                        <h1>The Dojo</h1>
                        <div className="links">
                                <Link to="/">Home</Link>
                                <Link to="/create">New</Link>
                        </div>
                </nav>
         );
}
 
export default Nav;