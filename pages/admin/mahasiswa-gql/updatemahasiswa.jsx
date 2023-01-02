//@ts-check

import React from "react";
import UpdateMahasiswa from "../../../components/admin/mahasiswa-gql/UpdateMahasiswa";
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