import React from 'react';

import '../App.css';

function Home() {


    return (

        <div className="ms-2 ">
            <div className="row">

                <div className="col-12  mt-4 container">


                    <img
                        src="/images/cover.png"
                    />

                    <div className="centered ">
                        <a  href='/Albums'>
                        Move to Albums
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Home;
