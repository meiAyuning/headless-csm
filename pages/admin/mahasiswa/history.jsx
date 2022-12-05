import React from "react";
import AdminLayout from '../../../components/admin/AdminLayout';
import History from "../../../components/admin/mahasiswa/History";

export default function history({historyMahasiswa}) {
    console.log(historyMahasiswa);
    return (
        <div>
            <AdminLayout>
                <History mahasiswa = {historyMahasiswa.data[0]}></History>
            </AdminLayout>
        </div>
    )
};

export async function getServerSideProps({query}){
    const nim = query.nim
    // console.log(nim);
    const url = `http://localhost:1337/api/mahasiswas?filters[nim][$eq]=${nim}&populate=*`
    const res = await fetch(url)
    const historyMahasiswa = await res.json()
    // console.log(url);
    
    return{
        props : {historyMahasiswa}
    }
}