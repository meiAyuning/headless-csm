import React from 'react';
import UserLayout from '../../components/user/UserLayout'
import Nilai from '../../components/Nilai'
import {useRouter} from 'next/router'
import Card from '../../components/Card';
import Ipk from '../../components/Ipk';


const nilai = ({data, mhs}) => {
    const router = useRouter();
    //const {nim, nama, angkatan, prodi} = router.query;
    return (
        <div>
            
            <UserLayout>
                <div className="container mt-4">
                    <div className="text-center">
                        <h3>Transkrip Mahasiswa</h3>
                    </div>
                    <Card dataMhs = {router.query} />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Nilai data={data} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col lg-4 sm-4">
                                <Ipk data = {data}/>
                            </div>
                            <div className="col lg-8 sm-8"></div>
                        </div>

                    </div>
                </div>
            </UserLayout>
        </div>
    );
};

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    /* const router = useRouter();
    const {nim, nama, angkatan, prodi} = router.query; */
    //const mhs = {'nim' : nim,'nama' : nama, 'angkatan': angkatan, 'prodi' : prodi}
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    const nim= query.nim
    let url = `http://localhost:5000/nilai/${nim}`


    const res = await fetch(url)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default nilai;