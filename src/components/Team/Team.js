import React from 'react';
import './Team.css'
const Team = () => {
    return (
        <div className='container '>
            <h2 style={{ marginBlock: "2rem" }} className='heading__2'>Team</h2>
            <div className="team__container">
                <div>
                    <img src="https://www.queensyoungleaders.com/wp-content/uploads/2019/10/36-Ayman-Sadiq-Bangladesh-2018-2-1.jpg" alt="" />
                    <p>Ayman Sadiq</p>
                </div>
                <div>
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQUc5eUblAmd5OaHakNhtr2L9BSCyN_2duY1tcbIw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>Sadman Sadiq</p>
                </div>
                <div>
                    <img src="https://yt3.ggpht.com/ytc/AKedOLStebzg-DZcc-gZ_yeQsDHv0m9pnvnOXY-1tDZyBQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>Khalid Farhan</p>
                </div>
                <div>
                    <img src="https://iwfm.buet.ac.bd/site/wp-content/uploads/2019/11/Enayet-Passport-Pic.jpg" alt="" />
                    <p>Enayet Chowdhory</p>
                </div>
            </div>




        </div>
    );
};

export default Team;