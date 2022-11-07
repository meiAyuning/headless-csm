import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

function datamahasiswa(props) {
    const router = useRouter()
    const {
        id, nama 
    } = router.query
    return (
        <AdminLayout>
            <div className="continer">
                <h1>Data Mahasiswa</h1>
                <p>Selamat datang {nama}, id = {id}</p>
            </div>
        </AdminLayout>
    );
}

export default datamahasiswa;