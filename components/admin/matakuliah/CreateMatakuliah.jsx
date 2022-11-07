import axios from 'axios'
import { useState } from "react"
const CreateMatakuliah = () => {
    const [kdMk, setKdMk] = useState('');
    const [matakuliah, setMatakuliah] = useState('');
    const [sks, setSks] = useState('');
    const [semester, setSemester] = useState('');
  
    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/matakuliah", {
                    kdMk,
                    matakuliah,
                    sks,
                    semester,
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
        setKdMk('')
        setMatakuliah('')
        setSks('')
        setSemester('')
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Matakuliah</h1>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="kdMk"
                                type="text"
                                placeholder="Kode Matakuliah"
                                value={kdMk}
                                onChange={(e) => setKdMk(e.target.value)}
                            />
                            <label htmlFor="kdMk">Kode Matakuliah</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="matakuliah"
                                type="text"
                                placeholder="Matakuliah"
                                value={matakuliah}
                                onChange={(e) => setMatakuliah(e.target.value)}
                            />
                            <label htmlFor="kdMk">Matakuliah</label>
                        </div>

                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="sks"
                                type="text"
                                placeholder="SKS"
                                value={sks}
                                onChange={(e) => setSks(e.target.value)}
                            />
                            <label htmlFor="kdMk">SKS</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="semester"
                                type="text"
                                placeholder="Semester"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                            />
                            <label htmlFor="kdMk">Semester</label>
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
 
export default CreateMatakuliah;