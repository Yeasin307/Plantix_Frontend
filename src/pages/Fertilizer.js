import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '../layout/Layout'
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../context/AuthProvider';

const Fertilizer = () => {
    const [unit, setUnit] = React.useState("1");
    const [unitValue, setUnitValue] = React.useState(1);
    const [calculateShow, setCalculateShow] = React.useState(false);
    const { cropSelection } = React.useContext(AuthContext);

    function createData(mop, ssp, urea) {
        return { mop, ssp, urea };
    }

    const rows = [
        createData(cropSelection === "Rice" ? (parseInt(unitValue) * 8) : cropSelection === "Potato" ? (parseInt(unitValue) * 10) : (parseInt(unitValue) * 6), cropSelection === "Rice" ? (parseInt(unitValue) * 2) : cropSelection === "Potato" ? (parseInt(unitValue) * 4) : (parseInt(unitValue) * 3), cropSelection === "Rice" ? (parseInt(unitValue) * 12) : cropSelection === "Potato" ? (parseInt(unitValue) * 8) : (parseInt(unitValue) * 10))
    ];

    return (
        <Layout>
            <h1 className='text-center mt-5'>Fertilizer Calculator</h1>
            <FormControl sx={{ marginLeft: '400px', marginY: '50px' }}>

                <h3>Select Unit</h3>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel onClick={() => setUnit("1")} value="1" control={<Radio checked={unit === '1'} />} label="Acre" />
                    <FormControlLabel onClick={() => setUnit("2")} value="2" control={<Radio checked={unit === '2'} />} label="Hectare" />
                </RadioGroup>

                <TextField value={unitValue} onChange={(e) => setUnitValue(e.target.value)} sx={{ marginY: '20px' }} id="standard-basic" size="medium" label="Enter Plot Size" variant="outlined" />

                <Button onClick={() => setCalculateShow(true)} color='success' variant='contained'>Calculate</Button>
                {calculateShow && <>
                    <h3 className='mt-5'>Suggested Fertilizer Combination</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>MOP</TableCell>
                                    <TableCell>SSP</TableCell>
                                    <TableCell >Urea</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell >{row.mop}</TableCell>
                                        <TableCell>{row.ssp}</TableCell>
                                        <TableCell>{row.urea}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}
            </FormControl>
        </Layout>
    )
}

export default Fertilizer