const { default: axios } = require("axios");

const getmahasiswa = ({mahasiswas}) => {
    const mahasiswa = mahasiswas.data

    return (
        <div className="container mt-5">
            <h3>Data Mahasiswa</h3><hr />
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Angkatan</th>
                        <th>Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map((mhs,idx) => (
                        <tr key={idx}>
                            <td>{mhs.attributes.nim}</td>
                            <td>{mhs.attributes.nama}</td>
                            <td>{mhs.attributes.angkatan}</td>
                            <td>{mhs.attributes.prodi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

async function submitHandler(e){
    e.preventDefault()
    try {
        axios
            .post("http://localhost:1337/api/mahasiswas", {
                data:{
                    nim,
                    nama,
                    angkatan,
                    prodi,
                }
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