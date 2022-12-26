//@ts-check
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const CreateMahasiswa = () => {
    const [nim,setNim] = useState('');
    const [nama,setNama] = useState('');
    const [angkatan,setAngkatan] = useState('');
    const [prodi,setProdi] = useState('');


    const getNimAndProdi = () => {
        const objProdi = { '11' : 'Teknik Informatika', '31' : ' Manajemen Informatika'}
        const kdProdi = nim.substring(0,2)
        const kdAngkatan = nim.substring(2,4)

        const prodi = objProdi[kdProdi]
        const angkatan = '20' + kdAngkatan

        setProdi(prodi)
        setAngkatan(angkatan)

        console.log(prodi + ',' + kdAngkatan)
    }

    async function submitHandler(e) {
        e.preventDefault()
        try{
            await client.mutate({
                mutation: gql`
                    mutation{
                        createMahasiswa(data:{
                            nim:"${nim}",
                            nama:"${nama}",
                            angkatan:"${angkatan}",
                            prodi:"${prodi}"
                        })
                        {
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
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setNim('')
        setNama('')
        setAngkatan('')
        setProdi('')
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Mahasiswa</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input className="form-control mb-2" id="nim" type="text" placeholder="NIM" value={nim} onChange={(e) => setNama(e.target.value)} onBlur={getNimAndProdi} />
                            <label htmlFor="nim">NIM</label>
                        </div>

                        <div className="form-floating">
                            <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                                <label htmlFor="nim">Nama</label>
                        </div>

                        <div className="form-floating">
                            <input className="form-control mb-2" id="angkatan" type="text" placeholder="angkatan" value={angkatan} onChange={(e) => setAngkatan(e.target.value)}/>
                                <label htmlFor="nim">Angkatan</label>
                        </div>

                        <div className="form-floating">
                            <input className="form-control mb-2" id="prodi" type="text" placeholder="Program Studi" value={prodi} onChange={(e) => setProdi(e.target.value)} />
                            <label htmlFor="nim">Program Studi</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMahasiswa;