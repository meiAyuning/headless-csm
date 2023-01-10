import React from 'react';
import DataMahasiswa from '../../../components/admin/mahasiswa/DataMahasiswa';
import AdminLayout from '../../../components/admin/AdminLayout';
import MahasiswaByNim from '../../../components/admin/mahasiswa/MahasiswaByNim';
import { getSession, useSession } from 'next-auth/react';

function datamahasiswa({ data }) {

    let hasil
    { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataMahasiswa data={data.data} />
                </div>
            </AdminLayout>
        </div>
    );
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    // const nim = query.nim
    const session = await getSession(context);
    console.log(session);
    //check if session exist or not, if not, redirect
    if (session == null) {
        return {
            redirect: {
                destination: '/auth/not-authenticated',
                permanent: true,
            },
        };
    }
    //Fetch data from external API
    const nim = context.nim
    let url = 'http://localhost:1337/api/mahasiswa'
    if (typeof nim === 'string') {
        url = `http://localhost:1337/api/mahasiswas?filters[nim][$eq]=$nim`
    }

    const res = await fetch(url)
    const mahasiswas = await res.json()
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    // let url = `http://localhost:1337/api/mahasiswas`

    // if (typeof nim === 'string') {
    //     url = `http://localhost:1337/api/mahasiswas?filters[nim][$eq]=${nim}`
    // }
    // //{ nim === undefined ? res = await fetch(url2) : res = await fetch(url) }

    // const res = await fetch(url)
    // const data = await res.json()

    // Pass data to the page via props
    return { props: { mahasiswas } }
}


export default datamahasiswa;