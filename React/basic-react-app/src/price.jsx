export default function price({oldPrice,newPrice}){
    let styles={
        textDecorationLine: "line-through",
    };
    let newstyle= {
        fontWeight:"bold",
    };

    let bodystyle = {
        backgroundColor:"#e0c367",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    };
    return(
        <div style={bodystyle}>
            <span style={styles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newstyle}>{newPrice}</span>
        </div>

    )
}