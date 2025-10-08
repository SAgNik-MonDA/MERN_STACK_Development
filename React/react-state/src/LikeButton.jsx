import {useState} from "react";

export default function LikeButton(){
    let [isLiked,setLiked] = useState(false);
    let toggleLike = () => {
        setLiked(!isLiked);
    }

    let style = {
        color:"red"
    };
    return (
        <div>
            <p onClick={toggleLike}>

                {isLiked ? (
                    <i className="fa-solid fa-heart" style={style}></i>
                ) : (<i className="fa-regular fa-heart"></i>)}
                
            </p>
        </div>
    );
}