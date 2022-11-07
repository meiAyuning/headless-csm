
import NavBar from "./NavBar";

const UserLayout = ({children}) => {
    return ( 
        <div>
            <NavBar />
            {children}
        </div>
     );
}
export default UserLayout;

