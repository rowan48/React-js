import React from "react";
import {NavLink, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import albums from "./Albums";

const ShowArtist = () => {

    const {id} = useParams();////////////////////////////////////////////////////////


    const [singer,setSinger]=useState([]);
    const [error, setError] = useState("")
    const url = "";
    useEffect(  ()=>{

        fetch(`http://localhost:8000/artists/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw Error("error in fetching data");
                }
                return res.json();
            })
            .then(data => {
                setSinger(data);
                // console.log((data));

            })
            .catch(error => {
                setError(error.message)///////
            })


    },[]);
    let renderAlbums=()=>{
        if(singer.id){
            return(singer.albums.length>0 &&
                    singer.albums.map(album=>
                        <div key={album.title}><img src ={`/images/albums/${album.cover}.jpg`}/></div>
                    )
            )

        }

    }




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
                        <th className="align-center" scope="col">Photo</th>
                        <th  scope="col">Bio</th>
                        <th className="align-center">Genre</th>
                        <th className="align-center">View Albums</th>
                    </tr>
                    </thead>
                    <tbody>
                                 <tr key={singer.id}>
                                     <td className="">{singer.name} </td>
                                     <td className="">{singer.cover}</td>
                                     <td>{singer.bio}</td>
                                     <td>{singer.genre}</td>
                               <td>{renderAlbums()}</td>
                                     {/*<td><img src={`/images/covers/${singer.cover}.jpg`}/></td>*/}
                                 </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
}
export default ShowArtist;