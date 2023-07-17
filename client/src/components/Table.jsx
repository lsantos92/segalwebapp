/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Container, Card, Col, Row, Table, Spinner } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import conn from '../api/connection'

/**
 * 
 * @function TableBrowser
 * @description Componente da tabela de navegação
 * @returns TableBrowser
 */

function TableBrowser() {
    const [data, setData] = useState([]);
    const [currentPath, setCurrentPath] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    /**
     * @function useEffect
     * @description Hook que faz o fetch dos dados da diretoria atual
     */
    useEffect(() => {
        fetchData();
    }, [currentPath]);

    /**
     * @function fetchData
     * @description Função que faz o fetch dos dados da diretoria atual
     */
    const fetchData = () => {
        setIsLoading(true);
        conn
            .get(`/root_ftp?path=${currentPath}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    /**
     * @function handleItemClick
     * @description Função que faz o update do estado do ficheiro selecionado e da diretoria atual
     */
    const handleItemClick = (item) => {
        if (item.type === "d") {
            setCurrentPath(`${currentPath}/${item.name}`);
            setSelectedFile(null);
        } else {
            setSelectedFile(item);
        }
    };

    /**
     * @function handleGoBack
     * @description Função que faz o volta à diretoria anterior. Caso a pasta atual seja a raiz, redireciona para a página inicial.
     */
    const handleGoBack = () => {
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
        setSelectedFile(null);
        if (currentPath === "") {
            window.location.href = "/grc";
        }
        setCurrentPath(parentPath || "");
    };

    /**
     * @function handleDownload
     * @description Função que faz o download do ficheiro selecionado
     */
    const handleDownload = () => {
        if (selectedFile) {
            const filePath = `${currentPath}/${selectedFile.name}`;
            conn.get(`/single?path=${filePath}`);
            alert("Downloading File!");
        }
    };
    return (
        <Container>
            <Row>
                <Col className="table-col-left">
                    <div className="table-wrapper">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Last modified</th>
                                    <th>Size</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            {!isLoading && (
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#/" onClick={handleGoBack}>
                                                <Icon.ArrowCounterclockwise />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#/" onClick={handleGoBack}>
                                                Parent Directory
                                            </a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    {data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.type === "d" ? "📁" : "📄"}</td>
                                                <td>
                                                    <a
                                                        href="#/"
                                                        onClick={() => {
                                                            handleItemClick(item);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </td>
                                                <td>
                                                    {new Date(item.modifyTime).toISOString()}
                                                </td>
                                                {item.type === "d" ? (
                                                    <td>-</td>
                                                ) : (
                                                    <td>{((item.size) / 1000000).toFixed(1)}MB</td>
                                                )}
                                                <td>{item.description}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            )}
                        </Table>
                        {isLoading && (
                            <div className="spinner-container">
                                <Spinner
                                    animation="border"
                                    role="status"
                                    className="spinner"
                                >
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        )}
                    </div>
                </Col>
                <Col className="table-col-right">
                    {selectedFile && (
                        <Card>
                            <Card.Body>
                                <div>
                                    <p>File name: {selectedFile.name}</p>
                                    <p>Path: {currentPath}</p>
                                    <p>Size: {((selectedFile.size) / 1000000).toFixed(1)}MB</p>
                                    <p>Last modified:{new Date(selectedFile.modifyTime).toLocaleString()}</p>
                                    <p>Access time: {new Date(selectedFile.accessTime).toLocaleString()}</p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-end align-items-end ">
                                    <a className="me-3" href="#/" onClick={handleDownload}>
                                        <Icon.Download />
                                    </a>
                                    <a href="#/">
                                        <Icon.EyeFill />
                                    </a>
                                </div>
                            </Card.Footer>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default TableBrowser