//@ts-check
'use strict'
import React, { useEffect, useState } from 'react';

function Ipk({data}) {
    const [ipk,setIpk] = useState(0)
    const [totSks,setTotSks] = useState(0)
    const [totNil,setTotNil] = useState(0)

    const gradeToNil = {
        "A" : 4,
        "AB" : 3.5,
        "B" : 3,
        "BC" : 2.5,
        "C" : 2,
        "CD" : 1.5,
        "D" : 1,
        "DE" : 0.5,
        "E" : 0 
    }
    
    let totalSks = 0;
    let totalNilai = 0
    data.map(dt=>{
        totalSks += dt.attributes.matakuliahs.data[0].attributes.sks
        const nilai = gradeToNil[dt.attributes.nilai]
        const nxk = nilai * dt.attributes.matakuliahs.data[0].attributes.sks
        totalNilai += nxk
    })
    const _ipk = totalNilai / totalSks
    
    useEffect(()=>{
        setTotSks(totalSks)
        setTotNil(totalNilai)
        setIpk(_ipk)
    },[])

    return (
        <div >
            <table className = "table mt-2">
                <tbody>
                    <tr>
                        <td>
                            Total SKS
                        </td>
                        <td className='text text-end'>
                            {totSks}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Total (Nilai x SKS)
                        </td>
                        <td className='text text-end'>
                            {totNil}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Indeks Prestasi Kumulatif (IPK)
                        </td>
                        <td className='text text-end'>
                            {ipk.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Ipk;