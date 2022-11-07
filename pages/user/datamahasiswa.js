
import DataMahasiswa from '../../components/user/DataMahasiswa';

import UserLayout from '../../components/user/UserLayout';

export default function datamahasiswa({mahasiswas}) {
    console.log(mahasiswas);
    return (
        <div>
            <UserLayout>
                <div className="container">
                   {/* <DataMahasiswa data = {data} /> */}
                </div>
            </UserLayout>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const nim = query.nim
    let url = `http://localhost:1337/api/mahasiswas`
    // const data = await res.json()
    // if (typeof nim === 'string') {
    //     url = `http://localhost:1337/api/mahasiswas?filters[nim][$eq]=${nim}`
    // }
    
    const res = await fetch(url)
    const mahasiswas = await res.json()
    // Pass data to the page via props
    return { props: { mahasiswas } }
  }
  

//export default datamahasiswa;