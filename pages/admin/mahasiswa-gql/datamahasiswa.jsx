import React from "react";
import DataMahasiswa from '../../../components/admin/mahasiswa/DataMahasiswa';
import AdminLayout from '../../../components/admin/AdminLayout';
import MahasiswaByNim from "../../../components/admin/mahasiswa-gql/MahasiswaByNim";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function datamahasiswa({mahasiswas}) {

    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataMahasiswa data={mahasiswas.data} />
                </div>
            </AdminLayout>
        </div>
    )
}

export async function getServerSideProps({query}){
    let nim = query.nim
    {typeof nim == 'string' ? nim = nim : nim = "1"}
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache : new InMemoryCache()
    })

    const {data} = await client.query({
        query:gql`
            query getAllMahasiswa{
                mahasiswas(filters:{nim:{contains:"${nim}"}}){
                    data{
                        id
                        attributes{
                            nim
                            nama
                            angkatan
                            prodi
                        }
                    }
                }
            }
        `
    })

    return { props: { mahasiswas : data.mahasiswas}}
}

export default datamahasiswa;