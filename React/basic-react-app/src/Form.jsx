function handlesubmit(event){
    event.preventDefault();
    console.log("Form was submit");
}



export default function Form(){
    return (
        <form>
            <input type="text" placeholder="write something"/>
            <button onClick={handlesubmit}>Submit</button>
        </form>
    )
}