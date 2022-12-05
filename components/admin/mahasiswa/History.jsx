import React, { useState} from "react";
import ReactMarkdown from "react-markdown";

export default function History ({mahasiswa}) {

    const history = mahasiswa.attributes.histories.data

    return(
        <div className="container">
            <h3>History Mahasiswa</h3>
            <hr />
            <div className="row mb-1">
                <div className="col-2">NIM</div>
                <div className="col-10">: &nbsp;&nbsp;&nbsp;{mahasiswa.attributes.nim}</div>
            </div>
            <div className="row mb-1">
                <div className="col-2">Nama</div>
                <div className="col-10">: &nbsp;&nbsp;&nbsp;{mahasiswa.attributes.nama}</div>
            </div>
            <div className="row mb-1">
                <div className="col-2">Angkatan</div>
                <div className="col-10">: &nbsp;&nbsp;&nbsp;{mahasiswa.attributes.angkatan}</div>
            </div>
            <div className="row mb-1">
                <div className="col-2">Program Studi</div>
                <div className="col-10">: &nbsp;&nbsp;&nbsp;{mahasiswa.attributes.prodi}</div>
            </div><hr />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Semester</th>
                            <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((hist, idx) => (
                            <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {hist.attributes.tanggal}
                                </td>
                                <td>
                                    {hist.attributes.semester}
                                </td>
                                <td>
                                    <ReactMarkdown>
                                        {hist.attributes.history}
                                    </ReactMarkdown>
                                    <p dangerouslySetInnerHTML={{__html:hist.attributes.history}}></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};