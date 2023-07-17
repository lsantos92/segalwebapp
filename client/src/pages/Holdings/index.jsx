import React from "react";
import { Table } from "react-bootstrap";




function Holdings() {
    return (
        <div className="holdings table-responsive-sm mx-4 my-4">
            <h4>GNSS Data and Product Holdings</h4>
            <h5 className="header-holding">Data</h5>

            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Extension (RINEX v3/v2)</th>
                        <th>Format</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RINEX Met</td>
                        <td>.MM.rnx / .yym</td>
                        <td><a href="https://igs.org/formats-and-standards/" className="href">RINEX</a></td>
                        <td>RINEX meteorological files</td>
                    </tr>
                    <tr>
                        <td>RINEX Nav</td>
                        <td>.[GREJCSM]N.rnx / .yy[ngp]</td>
                        <td><a href="https://igs.org/formats-and-standards/" className="href">RINEX</a></td>
                        <td>RINEX navigation files</td>
                    </tr>
                    <tr>
                        <td>RINEX Obs</td>
                        <td>.MO.crx / .yyd</td>
                        <td><a href="https://igs.org/formats-and-standards/" className="href">RINEX</a></td>
                        <td>Hatanaka compressed RINEX observation files</td>

                    </tr>
                    <tr>
                        <td>RINEX Skeleton</td>
                        <td>.skl</td>
                        <td><a href="https://igs.org/formats-and-standards/" className="href">RINEX</a></td>
                        <td>RINEX header skeleton file (unofficial!)</td>
                    </tr>
                    <tr>
                        <td>site log</td>
                        <td>.log</td>
                        <td><a href="https://files.igs.org/pub/station/general/blank.log">site log</a></td>
                        <td>site/station description file incl. history</td>
                    </tr>
                </tbody>
            </Table>
            <h5 className="header-holding">Products</h5>
            <p>Product files are located for each network in the subdirectory "products", (colocar o link)</p>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Format</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Clocks</td>
                        <td>.clk</td>
                        <td><a href="https://files.igs.org/pub/data/format/rinex_clock304.txt" className="href">RINEX clock</a></td>
                        <td>station and satellite clocks, see <a href="https://cddis.nasa.gov/Data_and_Derived_Products/GNSS/clock_products.html">here</a></td>
                    </tr>
                    <tr>
                        <td>Coordinates</td>
                        <td>.crd</td>
                        <td><a href="http://www.bernese.unibe.ch/" className="href">Bernese</a></td>
                        <td>station coordinates</td>
                    </tr>
                    <tr>
                        <td>Earth rotation parameters</td>
                        <td>.erp</td>
                        <td>ERP</td>
                        <td><a href="https://lists.igs.org/pipermail/igsmail/1998/003315.html">IGSMAIL-1943</a></td>
                    </tr>
                    <tr>
                        <td>Ionosphere TEC</td>
                        <td>.ion</td>
                        <td>IONosphere EXchange (<a href="https://files.igs.org/pub/data/format/rinex_ion304.txt" className="href">SINEX</a>) format</td>
                        <td>ionospheric TEC grid products</td>
                    </tr>
                    <tr>
                        <td>Precise orbits</td>
                        <td>.sp3, .sp3c</td>
                        <td><a href="https://files.igs.org/pub/data/format/sp3_docu.txt">SP3</a>, <a href="https://files.igs.org/pub/data/format/sp3c.txt">SP3c</a></td>
                        <td><a href="https://cddis.nasa.gov/Data_and_Derived_Products/GNSS/orbit_products.html">orbits</a></td>
                    </tr>
                    <tr>
                        <td>Station positions</td>
                        <td>.snx</td>
                        <td>Software INdependent EXchange (<a href="https://www.iers.org/IERS/EN/Organization/AnalysisCoordinator/SinexFormat/sinex.html">SINEX</a>) format</td>
                        <td>station positions and velocity solutions</td>
                    </tr>
                    <tr>
                        <td>Tropospheric products</td>
                        <td>.tro</td>
                        <td><a href="https://files.igs.org/pub/data/format/sinex_tro_v2.00.pdf">Tropo SINEX</a></td>
                        <td>SINEX format for tropospheric and meteorological parameters</td>
                    </tr>
                </tbody>
            </Table>
            <p className="mt-4">Information about formats and standards can be found at <a href="https://igs.org/formats-and-standards/">https://igs.org/formats-and-standards/.</a></p>
        </div>
    );
}
export default Holdings;