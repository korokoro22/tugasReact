import React, { useState } from "react";
import '../components/dataDiriStyle.css';

const DataDiri = () => {
    const [data, setData] = useState({
        nama: '',
        nim: '',
        angkatan: '',
        hobby: ''
    });
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()

        // const isiNama = document.getElementById('1');
        // isiNama.innerHTML = (data.nama);

        // const isiNim = document.getElementById('2');
        // isiNim.innerHTML = (data.nim);

        // const isiAngkatan = document.getElementById('3');
        // isiAngkatan.innerHTML = (data.angkatan);

        // const isiHobby = document.getElementById('4');
        // isiHobby    .innerHTML = (data.hobby);
    }

    return (
        <div className="dataWrapper">
           {login ? (
            <div className="buttonTrue">
                <div className="trueTitle">
                    <h2>DATA DIRI</h2>
                </div>
                <div className="trueForm">
                    <p>Nama: {data.nama}</p>
                    <p>NIM: {data.nim}</p>
                    <p>Angkatan: {data.angkatan}</p>
                    <p>Hobby: {data.hobby}</p>

                    <button onClick={() => {
                        setLogin(false);
                    }}>Kembali</button>
                </div>
            </div>
        ):
        (
            <div className="buttonFalse">
                <div className="falseTitle">
                    <h2>DATA DIRI</h2>
                </div>
                <div className="falseForm">
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setData({...data, nama: e.target.value})} value={data.nama} type="text"name="as" placeholder="masukkan nama anda"/>
                        
                        <input onChange={(e) => setData({...data, nim: e.target.value})} value={data.nim} type="text"name="as" placeholder="masukkan nim anda"/>
                        
                        <input onChange={(e) => setData({...data, angkatan: e.target.value})} value={data.angkatan} type="text"name="as" placeholder="masukkan angkatan anda"/>
                        
                        <input onChange={(e) => setData({...data, hobby: e.target.value})} value={data.hobby} type="text"name="as" placeholder="masukkan hobi anda"/>
                        <button onClick={() =>{
                            setLogin(true);
                        }}>submit</button>                
                    </form>
                </div>

            </div>
        )} 
        </div>
        

    )
}   

export default DataDiri;





// bikin komponen baru, buat semacam form dan isinya 
// 1. Nama
// 2. NIM
// 3. Angkatan
// 4. Hobby
// ada tombol submit dan hasil inputan ditampilkan setelah button d klik
            