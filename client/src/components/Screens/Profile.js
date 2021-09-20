import React from 'react';

const Profile = () => {
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div className="img-spacing">
                    <div>
                        <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
                            src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        
                    </div>
                    <div>
                        <h4>Ronald Reynolds</h4>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-around",
                            width:"108%"
                        }}>

                            <h6>30 posts</h6>
                            <h6>30 followers</h6>
                            <h6>30 following</h6>
                        </div>
                    </div>

            </div>
            <div className="gallery">
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1508083460982-28b3207400d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGtpZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1560535733-540e0b0068b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1623580674874-68bc291f3236?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZlbWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1422061289586-1060c743ec13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxib3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>            
                    {/* <img  className="item" src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE0fHxib3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>                     */}
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <img  className="item" alt="" src="https://images.unsplash.com/photo-1592082906158-ea8a8c0f3e27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxib3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
    );
}
export default Profile;