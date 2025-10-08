import {useState} from "react";

export default function LikeButton(){
    let [isLiked,setLiked] = useState(false);
    let [count,setCount] = useState(0);
    let toggleLike = () => {
        setLiked(!isLiked);
          setCount(count+1);
    }
  
    let style = {
        color:"red"
    };
    return (
        <div>
            <p onClick={toggleLike}>
                <h1>count = {count}</h1>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={style}></i>
                ) : (<i className="fa-regular fa-heart"></i>)}
                
            </p>
        </div>
    );
}