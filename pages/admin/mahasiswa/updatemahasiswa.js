//@ts-check

import UpdateMahasiswa from "../../../components/admin/mahasiswa/UpdateMahasiswa"
import AdminLayout from "../../../components/admin/AdminLayout";
const updatemahasiswa = () => {
    return ( 
        <div>
            <AdminLayout>
                <UpdateMahasiswa />
            </AdminLayout>
        </div>
     );
}
 
export default updatemahasiswa;