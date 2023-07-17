import React from 'react'

/**
 * 
 * @function Container
 * @description Componente de container para o conteúdo da página
 */


function Container({ children }) {
    return (
        <div className="container-fluid px-5">
            {children}
        </div>
    )
}

export default Container