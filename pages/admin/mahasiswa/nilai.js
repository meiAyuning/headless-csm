import React from 'react';
import UserLayout from '../../../components/user/UserLayout'

const nilai = (data) => {
    return (
        <div>
            
            <userLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataMahasiswa data={hasil} />
                </div>
            </userLayout>
        </div>
    );
};

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const nim = query.nim
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    let url = `http://localhost:5000/mahasiswa/nilai/${nim}`


    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    // Pass data to the page via props
    return { props: { data } }
}

export default nilai;