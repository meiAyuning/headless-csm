import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import {useRouter} from 'next/router'

function Homeadmin(props) {
    const router = useRouter();
    const gotoDatamhs = () => {
        
        router.push(
            {pathname : '/admin/_datamahasiswa',
             query : {id:"123", nama:"push router"}}
        )
    }
    return (
        <AdminLayout>
            <h1>Admin Home</h1>
            <button className="btn btn-primary" onClick={gotoDatamhs}>data Mahasiswa</button>
        </AdminLayout>
    );
}

export default Homeadmin;