import { useRouter } from 'next/router';
import React from 'react';

const mahasiswaById = () => {
    const router = useRouter()
    const { 
        mahasiswaById
    } = router.query
    return (
        <div>
            <p>Data</p>
            
            <p>Nama : {mahasiswaById}</p>
        </div>
    );
};

export default mahasiswaById;