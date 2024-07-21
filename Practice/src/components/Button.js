
import '../App.css'
function Button(props){
    console.log(props)
return(
    <>
    <button className="BTN">{props.data}</button>
    </>
  );


}

export default Button