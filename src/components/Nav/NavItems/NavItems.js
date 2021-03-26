import React,{useState} from "react";
import NavItem from "../NavItem/NavItem";

import "./NavItems.css";


const NavItems = (props) => {

    const [items] = useState({
      navItems: [
        { name: "Add", href: "/add" },
        { name: "Home", href: "/" },
      ],
    });



  return (
    <nav>
      <ul className="links-ul">
          {
              items.navItems.map((item)=>{
                  return (
                      <NavItem key={item.name} href={item.href} name={item.name} />
                  )
              })
          }
      </ul>
    </nav>
  );
};

export default NavItems;
