import React from 'react';
import { useState , useEffect} from 'react';

import '../App.css';
import {NavLink} from "react-router-dom";

function Albums() {
    const [albums,setAlbums]=useState([]);
    const [error, setError] = useState("")
    const url = "";

    useEffect(  ()=>{

              fetch('http://localhost:8000/artists')
                .then(res => {
                    if (!res.ok) {
                        throw Error("error in fetching data");
                    }
                    return res.json();
                })
                .then(data => {
                    setAlbums(data);
                    console.log(typeof (Object.keys(albums)));

                })
                .catch(error => {
                    setError(error.message)///////
                })


    },[]);

    return (
        <div>
            <div>
                {error && <div>{error}</div>}
            </div>
        <div className="row ">
            <table className=" table table-striped table-bordered">
                <thead>
                <tr>
                    <th className="align-center" scope="col">Name</th>
                    <th className="align-center" scope="col">cover</th>
                    <th  scope="col">Image</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                {albums.length > 0 && (
                        albums.map(album =>
                                <tr key={album.id}>
                                    <td   className="">{album.name} </td>
                                    <td   className="">{album.cover}</td>
                                    <td><img src={`/images/covers/${album.cover}.jpg`}/></td>
                                    <td>
                                        <NavLink className="btn-primary align-center" type="button" to={`/Artist/${album.id}`} end>
                                            show
                                        </NavLink>
                                    </td>
                                </tr>
                       )
               )}
                </tbody>
            </table>
        </div>

        </div>

    );

}

export default Albums;
