import Card from "./Card";

const DataMahasiswa = ({ data }) => {
    // const {data , error} = useDataMahasiswa();

    // if(error){
    //     return <div> Error loading</div>
    // }
    // if(!data){
    //     return <div>Loading......</div>
    // }

    // console.log(data);

    return (
        <div style={{ marginLeft: "50px" }}>
            <h3>Data Mahasiswa</h3>
            <div className="row">
                {data.map((dt, id) => (
                    <div className="col col-lg-3" key={id}>

                        <div className="container box-shadow">
                            <Card gambar='me.jpg' dataMhs={dt} />
                        </div>

                    </div>
                ))}
            </div>

            {/* <table className = "table">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Angkatan</th>
                        <th>Prodi</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((mhs, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {mhs.nim}
                            </td>
                            <td>
                                 {mhs.nama}
                            </td>
                            <td>
                                {mhs.angkatan}
                            </td>
                            <td>
                                 {mhs.prodi}
                            </td>
                    </tr>
                    ))
                }
                </tbody>
            </table> */}
        </div>
    );
}

export default DataMahasiswa;