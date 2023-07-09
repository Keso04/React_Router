import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
    return (
        <div>
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/main'}>Main</Link>
            <Link className="link" to={'/about'}>About</Link>

            <Outlet/>
        </div>
    )
}

export default LinkLayout;