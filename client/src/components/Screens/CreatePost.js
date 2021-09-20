import React,{useState} from 'react';

const CreatePost = () => {
    const [Title,setTitle] = useState("");
    const [Body, setBody] = useState("");
    const [Image, setImage] = useState("");
    return(
        <div className="card input-field" 
        style={{
            margin:"30px auto",
            width:"550px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" 
            placeholder="Title" 
            value={Title} 
            onChange={(e)=>{
                setTitle(e.target.value);
            }} />
            <input type="text" 
            placeholder="Description" 
            value={Body} 
            onChange={(e) => {
                setBody(e.target.value);
            }} />
            <div className="file-field input-field">
                <div className="btn waves-effect waves-light #ff5252 red accent-2">
                    <span>Upload Photo</span>
                    <input type="file" 
                    onChange={(e) => {
                        console.log(e.target.files)
                        setImage(e.target.files[0])
                    }}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>    
            <button className="btn waves-effect waves-light #ff5252 red accent-2">Upload Post</button>        
        </div>
    );
}
export default CreatePost;

