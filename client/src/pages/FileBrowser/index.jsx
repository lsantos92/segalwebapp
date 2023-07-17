import React from "react";
import { Card } from "react-bootstrap";
import TableBrowser from "../../components/Table";

/**
 * @function FileBrowser
 * @description Componente da página de navegação de ficheiros
 */

function FileBrowser() {
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h2>File Browser</h2>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <TableBrowser />
                </Card.Body>
            </Card>
        </div>
    );
}

export default FileBrowser;
