import React from 'react';


const Nilai = ({data}) => {
    {Array.isArray(data) ? data = data : data = data.nilai}
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
                                {nilai.kdMk}
                            </td>
                            <td>
                                 {nilai.matakuliah}
                            </td>
                            <td>
                                {nilai.dosen}
                            </td>
                            <td>
                                 {nilai.semester}
                            </td>
                            <td>
                                 {nilai.sks}
                            </td>
                            <td>
                                 {nilai.nilai}
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