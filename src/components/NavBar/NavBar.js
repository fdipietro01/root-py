import React, {useState, useEffect} from "react"
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPaperPlane, faCommentDots, faTruck, faBars, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import { SubMenuContainer } from "../../container/SubMenuContainer/SubMenuContainer";



export const NavBar = ()=>{

    const [subMenu, setSubMenu] = useState(false);
        
        const handleSubMenu = ()=>{
                setSubMenu(!subMenu);
            }
        useEffect (()=>{
           },[subMenu])
    
    
    return (
    <>  
        <nav className="nBar"> 
            
            <li className="nBarLi">                    
                <ul className="nBarIt" onClick={handleSubMenu}><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faBars}/>Categorías</p><SubMenuContainer subMenu={subMenu}/></ul>
                <Link className="linksNav" to={"/"}>
                    <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faTruck}/>Formas de envío</p></ul></Link>
                <Link className="linksNav" to={"/"}>
                    <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/>Nuestro Local</p></ul></Link>
                <Link className="linksNav" to={"/"}>
                    <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faCommentDots}/> Preguntas Frecuentes</p></ul></Link>
                <Link className="linksNav" to={"/"}>
                    <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faPaperPlane}/>Contacto</p></ul></Link>
            </li>
            <Link to={`/cart`} className="linksNav"><CartWidget/></Link>
        </nav> 
    </>
    );
}
