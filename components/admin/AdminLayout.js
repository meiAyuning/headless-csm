
import SideBar from './SideBar';

function AdminLayout({children}) {
    return (
        <div>
            <SideBar children = {children} />
                {/* {children}
            </SideBar> */}
        </div>
    );
}
export default AdminLayout;

