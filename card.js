function Card(props){
    return(
<div className="card" >
<img src={props.image} />
<h1>{props.ptitle}</h1>
<p className="price">{props.pPrice}</p>
<p className="txt">{props.ptxt}</p>
<p><button>{props.btn}</button></p>
</div>
    )
}
export default Card