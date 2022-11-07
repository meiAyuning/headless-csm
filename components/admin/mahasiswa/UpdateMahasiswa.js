//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

const UpdateMahasiswa = () => {
    //Deklarasi state
    const [_nim, setNim] = useState('');
    const [_nama, setNama] = useState('');
    const [_angkatan, setAngkatan] = useState('');
    const [_prodi, setProdi] = useState('');
    const [_foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    // mengambil data yang dikrim melalui router
    const router = useRouter();
    const { nim, nama, angkatan, prodi } = router.query;

    useEffect(() => {
        if (typeof nim == 'string') {
            setNim(nim);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof angkatan == 'string') {
            setAngkatan(angkatan)
        }
        if (typeof prodi == 'string') {
            setProdi(prodi)
        }
    }, [nim, nama, angkatan, prodi])

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        const _file = e.target.files[0];

        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        // setSubmitting(true)
        try {

            axios
                .put(`http://localhost:1337/api/mahasiswas?filters[nim][$eq]=${_nim}`, {
                    nim: _nim,
                    nama: _nama,
                    angkatan: _angkatan,
                    prodi: _prodi,
                })
                .then(response => {
                    console.log(response);
                });

            alert("Update Data Sukses")
            Router.push('/admin/mahasiswa/datamahasiswa')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-bold text-center mb-3">Edit Data Mahasiswa</h1>

                    <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style={{
                                    background: "gray",
                                    width: "100px", height: "100px"
                                }} />
                        </label>
                        <input
                            id="uploadGambar"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nim"
                                type="text"
                                placeholder="NIM"
                                value={_nim}
                                onChange={(e) => setNim(e.target.value)}
                            />
                            <label htmlFor="nim">NIM</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nama"
                                type="text"
                                placeholder="nama"
                                value={_nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <label htmlFor="nim">Nama</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="angkatan"
                                type="text"
                                placeholder="angkatan"
                                value={_angkatan}
                                onChange={(e) => setAngkatan(e.target.value)}
                            />
                            <label htmlFor="nim">Angkatan</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="prodi"
                                type="text"
                                placeholder="Program Studi"
                                value={_prodi}
                                onChange={(e) => setProdi(e.target.value)}
                            />
                            <label htmlFor="nim">Program Studi</label>
                        </div>

                        <div className="d-flex flex-row-reverse">
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateMahasiswa;