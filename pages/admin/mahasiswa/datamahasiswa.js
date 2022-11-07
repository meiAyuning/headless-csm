import React from 'react';
import DataMahasiswa from '../../../components/admin/mahasiswa/DataMahasiswa';
import AdminLayout from '../../../components/admin/AdminLayout';
import MahasiswaByNim from '../../../components/admin/mahasiswa/MahasiswaByNim';

function datamahasiswa({ data }) {

    let hasil
    { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataMahasiswa data={hasil} />
                </div>
            </AdminLayout>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const nim = query.nim
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    let url = `http://localhost:5000/mahasiswa`

    if (typeof nim === 'string') {
        url = `http://localhost:5000/mahasiswa/${nim}`
    }
    //{ nim === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}


export default datamahasiswa;