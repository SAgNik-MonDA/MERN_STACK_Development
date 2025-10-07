function  Hello(){
    console.log("hellow");
}

function by(){
    console.log("bye!!!!");
}

function dbclick(){
    console.log("you double click");
}


export default function Button(){
    return (
        <div>
            <button onClick={Hello}>click me !</button>

            <p onMouseOver={by}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae dignissimos voluptate magnam soluta error.</p>

            <button onDoubleClick={dbclick}>button</button>
        </div>
    );
}