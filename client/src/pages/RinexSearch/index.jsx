import React, { useState, useEffect } from "react";
import { Row, Col, Form, Table, Button } from "react-bootstrap";
import Container from "../../components/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import conn from "../../api/connection";

function RinexSearch() {
    // States
    const [data, setData] = useState([]);
    const [station, setStation] = useState([]);
    const [selectedStations, setSelectedStations] = useState([]);
    const [fileType, setFileType] = useState([]);
    const [filePeriod, setFilePeriod] = useState([]);
    const [rinexVersion, setRinexVersion] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isVisible, setIsVisible] = useState(false);


    // Função para obter a lista de estações
    const getStationList = async () => {
        try {
            const res = await conn.get(`/stations`);
            setStation(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    const searchRinex = async () => {
        try {
            // const res = await axios.get(`/rinex?station=${selectedStations}`);
            // setData(res.data);
            console.log("SearchRinex");
        } catch (error) {
            console.error(error);
        }
    };

    // ASCG00SHN_R_20220010000_01D_30S_MO.crx.gz
    // ASCG00SHN -> Station
    // R -> Receiver
    // 20220010000 -> Date UTC
    // 01D -> Period
    // 30S -> Sampling Rate
    // MO -> Data Source
    // crx.gz -> File Type


    // Função para buscar os dados
    const fetchData = async () => {
        if (startDate === null || endDate === null || selectedStations.length === 0 || fileType.length === 0 || filePeriod.length === 0 || rinexVersion.length === 0 || dataSource.length === 0) {
            alert("Preencha os todos os campos");
            return;
        }
        setIsVisible(true);
        // search all files with station name on name file

        const res = await conn.get(`/rinex?query=${selectedStations}`);
        const data = res.data;


    };
    const resetSearch = () => {
        setSelectedStations([]);
        setFileType([]);
        setFilePeriod([]);
        setRinexVersion([]);
        setDataSource([]);
        setStartDate(null);
        setEndDate(null);
    };

    useEffect(() => {
        getStationList();
    });

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedStations(selectedOptions);
        console.log(selectedOptions);
    };

    const handleFileTypeChange = (event) => {
        setFileType(event.target.value);
        console.log(event.target.value);
    };

    const handleFilePeriodChange = (event) => {
        setFilePeriod(event.target.value);
        console.log(event.target.value);
    };
    const handleRinexVersionChange = (event) => {
        setRinexVersion(event.target.value);
        console.log(event.target.value);
    };
    const handleDataSourceChange = (event) => {
        setDataSource(event.target.value);
        console.log(event.target.value);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        console.log(date);
    }
    const handleEndDateChange = (date) => {
        setEndDate(date);
        console.log(date);
    }

    return (
        <>
            <Row sm={2} md={2}>
                <Col xs={5} sm={4} md={3} lg={3} className="border-end my-5">
                    <Container >
                        <Form >
                            <div className="mb-3">
                                <Form.Group controlId="multiSelect">
                                    <Form.Label><strong>GNSS Station</strong></Form.Label>
                                    <Form.Control as="select" multiple onChange={handleSelectChange} value={selectedStations}>
                                        {station.map((station, index) => (
                                            <option key={index} value={station}>
                                                {station}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            {/* FILE TYPE */}
                            <div className="mb-3">
                                <Form.Label ><strong>File Type</strong></Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Observation"
                                    value="obs"
                                    id="radioObs"
                                    name="fileType"
                                    onChange={handleFileTypeChange}
                                    checked={fileType === "obs"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Navigation"
                                    value="nav"
                                    id="radioNav"
                                    name="fileType"
                                    onChange={handleFileTypeChange}
                                    checked={fileType === "nav"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Meteorological"
                                    value="met"
                                    id="radioMet"
                                    name="fileType"
                                    onChange={handleFileTypeChange}
                                    checked={fileType === "met"}
                                />
                            </div>
                            {/* FILE PERIOD */}
                            <div className="mb-3">
                                <Form.Label><strong>File Period</strong></Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Daily"
                                    value="01D"
                                    id="radio01D"
                                    name="filePer"
                                    onChange={handleFilePeriodChange}
                                    checked={filePeriod === "01D"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Hourly"
                                    value="01H"
                                    id="radio01H"
                                    name="filePer"
                                    onChange={handleFilePeriodChange}
                                    checked={filePeriod === "01H"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="15 min"
                                    value="15M"
                                    id="radio15M"
                                    name="filePer"
                                    onChange={handleFilePeriodChange}
                                    checked={filePeriod === "15M"}
                                />
                            </div>
                            {/* RINEX VERSION */}
                            <div className="mb-3">
                                <Form.Label><strong>RINEX Version:</strong></Form.Label>
                                <br />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="2"
                                    value="2"
                                    id="radioV2"
                                    name="rinexV"
                                    onChange={handleRinexVersionChange}
                                    checked={rinexVersion === "2"}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="3"
                                    value="3"
                                    id="radioV3"
                                    name="rinexV"
                                    onChange={handleRinexVersionChange}
                                    checked={rinexVersion === "3"}
                                />
                            </div>
                            {/* DATA SOURCE */}
                            <div className="mb-3">
                                <Form.Label><strong>Data Source</strong></Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Receiver"
                                    value="R"
                                    id="radioRec"
                                    name="dataSrc"
                                    onChange={handleDataSourceChange}
                                    checked={dataSource === "R"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Stream"
                                    value="S"
                                    id="radioStr"
                                    name="dataSrc"
                                    onChange={handleDataSourceChange}
                                    checked={dataSource === "S"}
                                />
                            </div>
                            {/* DATA PICKER */}
                            <div className="mb-3">
                                <Form.Label><strong>Date Filter</strong></Form.Label>
                                <DatePicker
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    placeholderText="Start Date"
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    timeIntervals={5}
                                    showTimeSelect
                                    shouldCloseOnSelect={false}
                                    maxDate={new Date()}
                                />
                            </div>
                            <div className="mb-3">
                                <DatePicker
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    placeholderText="End Date"
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    timeIntervals={5}
                                    showTimeSelect
                                    shouldCloseOnSelect={false}
                                    maxDate={new Date()}
                                />
                            </div>
                            {/* BUTTONS */}
                            <Button className="btn-dark" onClick={searchRinex}>
                                Search
                            </Button>
                            <Button variant="secondary" className="mx-2" type="reset" onClick={resetSearch}>
                                Reset
                            </Button>
                        </Form>
                    </Container>
                </Col>
                <Col xs={7} sm={8} md={9} lg={9} className="my-5">
                    {isVisible && (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Start Date</th>
                                    <th>Version</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((file, index) => (
                                    <tr key={index}>
                                        <td type="checkbox"></td>
                                        <td>{file.name}</td>
                                        <td>{file.start_date}</td>
                                        <td>{file.version}</td>
                                        <td>{file.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row >
        </>
    );
}

export default RinexSearch;
