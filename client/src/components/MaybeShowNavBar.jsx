import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * @function MaybeShowNavBar
 * @description Componente que mostra a barra de navegação se a rota for diferente de "/"
 */

const MaybeShowNavBar = ({ children }) => {
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        if (location.pathname === "/") {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [location]);

    return (
        <div>
            {showNavBar && children}
        </div>
    )
}

export default MaybeShowNavBar;