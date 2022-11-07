import Link from "next/link";
import Rect from "react";
//import {useRouter} from 'next/router'

const Card = ({ gambar, dataMhs }) => {
  return (
    <div>
      <div className="card bg-success text-white">
        {/* <img src={`/${gambar}`} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{dataMhs.nama}</h5>
          <div className="card-text d-block">
            {dataMhs.nim}
          </div>
          <div className="card-text d-block">
            {dataMhs.angkatan}
          </div>
          <div className="card-text d-block">
            {dataMhs.prodi}
          </div>
          <button className="btn btn-dark mt-4">
          <Link href={{pathname : `/user/nilai`,
                       query : {nim : dataMhs.nim, nama: dataMhs.nama, angkatan:dataMhs.angkatan, prodi:dataMhs.prodi} }}>
            <span className="text-white">Transkrip</span>
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
