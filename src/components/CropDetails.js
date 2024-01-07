import React from 'react'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

const CropDetails = () => {
    return (
        <div className='container my-5'>
            <div className='row gx-5'>
                <div className='col-4'>
                    <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                        <CalculateOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                        <h5>Fertilizer Calculator</h5>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                        <PestControlOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                        <h5>Pests & Diseases</h5>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ height: '200px', border: '5px solid gray', borderRadius: '24px', textAlign: 'center', backgroundColor: "yellowGreen" }}>
                        <AgricultureOutlinedIcon sx={{ fontSize: '100px', marginY: '8px' }} />
                        <h5>Cultivation Tips</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CropDetails