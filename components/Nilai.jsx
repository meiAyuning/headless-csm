import React from 'react';


const Nilai = ({data}) => {
    // {Array.isArray(data) ? data = data : data = data.nilai}
    return (
        <div>
            <table className = "table table-secondary table-hover mt-2">
                <thead>
                    <tr>
                        <th>Kode MK</th>
                        <th>Matakuliah</th>
                        <th>Dosen</th>
                        <th>Semester</th>
                        <th>SKS</th>
                        <th>Nilai</th>
                    </tr>
                </thead>
                <tbody>
                { data.map((nilai, idx) => (
                    <tr key ={idx}>
                            <td>
                                {nilai.attributes.matakuliahs.data[0].attributes.kdMk}
                            </td>
                            <td>
                                 {nilai.attributes.matakuliahs.data[0].attributes.matakuliah}
                            </td>
                            <td>
                                {nilai.attributes.dosen}
                            </td>
                            <td>
                                 {nilai.attributes.semester}
                            </td>
                            <td>
                                 {nilai.attributes.matakuliahs.data[0].attributes.sks}
                            </td>
                            <td>
                                 {nilai.attributes.nilai}
                            </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Nilai;