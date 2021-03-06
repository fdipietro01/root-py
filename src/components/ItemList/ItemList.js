import React from "react";
import "./ItemList.css";
import { Item } from "../Item/Item";


export const ItemList = ({props})=>{
    return(
               
        <div className="catalogoCont"> 
            <p className="catalogo">Nuestro Catalogo</p>
         
            <div className="body">
                <div className="productListBox">
                    {props.map((item)=>
                            <div key={item.id} className="productBox"> <Item id={item.id} url={item.url} name={item.name} kind={item.kind} price={item.price} stock={item.stock}/></div>
                    )}
                </div>
            </div>
        </div>
    
    )
}