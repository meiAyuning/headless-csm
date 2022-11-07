import { useState } from "react"
import axios from 'axios'

const CreateMahasiswa = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [angkatan, setAngkatan] = useState('');
    const [prodi, setProdi] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:1337/api/mahasiswas", {
                    nim,
                    nama,
                    angkatan,
                    prodi,
                })
                .then(response => {
                    console.log(response);
                });
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
                            <input
                                className="form-control mb-2"
                                id="nim"
                                type="text"
                                placeholder="NIM"
                                value={nim}
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
                                value={nama}
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
                                value={angkatan}
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
                                value={prodi}
                                onChange={(e) => setProdi(e.target.value)}
                            />
                            <label htmlFor="nim">Program Studi</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMahasiswa;