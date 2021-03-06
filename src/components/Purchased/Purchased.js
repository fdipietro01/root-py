import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Purchased.css"
import { SeekerContext} from "../../context/SeekerContext"


export const Purchased = ()=>{

    const { orderId } = useContext(CartContext)
    const { loading } = useContext(CartContext)
    const { reiniciarBusqueda} = useContext(SeekerContext)
    
    return (

    <div className ="bodyCart">
        <div className="box">
            <div className ="txtCont">
                <img className="tickImg" src="https://firebasestorage.googleapis.com/v0/b/roots-stor.appspot.com/o/a1.svg?alt=media&token=3418909a-90cc-4c24-9590-19c0b41bcb4e" alt="done"/>
                <p className="txt1"> ¡Su orden ha sido procesada exitosamente!</p>
            </div>    
            {loading === true? 
            <div className= "txtCont">
                 <div className="spinner"></div>   
                 <p className="txt2">Aguarde mientras se genera su comprobante </p>
            </div>:
            <div className= "txtCont">
            <p className="txt2"> Su número identificador de pedido es: {orderId}</p>
            </div>}
            <Link to={"/"}><button onClick={()=> reiniciarBusqueda()} className="return">Volver al Inicio</button></Link>
        </div>
    </div>
)
}