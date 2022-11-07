
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreateMahasiswa from '../../../components/admin/mahasiswa/CreateMahasiswa';

const createmahasiswa = () => {
    return (
        <AdminLayout>
            <CreateMahasiswa />
        </AdminLayout>
    );
};

export default createmahasiswa;