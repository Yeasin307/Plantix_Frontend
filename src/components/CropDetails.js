import React from 'react'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import { Link } from 'react-router-dom';

const CropDetails = () => {
    return (
        <div className='container my-5'>
            <div className='row gx-5'>
                <div className='col-4'>
                    <Link to="/fertilizer" style={{ textDecoration: 'none', color: 'rgb(33, 37, 41)' }}>
                        <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                            <CalculateOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                            <h5>Fertilizer Calculator</h5>
                        </div>
                    </Link>
                </div>
                <div className='col-4'>
                    <Link to="/pests" style={{ textDecoration: 'none', color: 'rgb(33, 37, 41)' }}>
                        <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                            <PestControlOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                            <h5>Pests & Diseases</h5>
                        </div>
                    </Link>
                </div>
                <div className='col-4'>
                    <Link to="/cultivation" style={{ textDecoration: 'none', color: 'rgb(33, 37, 41)' }}>
                        <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                            <AgricultureOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                            <h5>Cultivation Tips</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CropDetails