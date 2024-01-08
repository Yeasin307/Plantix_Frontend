import React from 'react'
import Layout from '../layout/Layout'
import GrassIcon from '@mui/icons-material/Grass';
import ForestIcon from '@mui/icons-material/Forest';
import MonitorIcon from '@mui/icons-material/Monitor';
import YardIcon from '@mui/icons-material/Yard';
import LanguageIcon from '@mui/icons-material/Language';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PestControlIcon from '@mui/icons-material/PestControl';

const Cultivation = () => {
    return (
        <Layout>
            <h1 className='text-center my-5'>Cultivation Tips</h1>
            <div className='container'>
                <div className='row g-5 my-5'>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <GrassIcon sx={{ fontSize: '100px' }} />
                            <h5>Plant Selection</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <ForestIcon sx={{ fontSize: '100px' }} />
                            <h5>Planting</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <MonitorIcon sx={{ fontSize: '100px' }} />
                            <h5>Monitoring</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <LanguageIcon sx={{ fontSize: '100px' }} />
                            <h5>Site Selection</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <PestControlIcon sx={{ fontSize: '100px' }} />
                            <h5>Weeding</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <HeatPumpIcon sx={{ fontSize: '100px' }} />
                            <h5>Irrigation</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <YardIcon sx={{ fontSize: '100px' }} />
                            <h5>Fertilization</h5>
                        </div>
                    </div>
                    <div className='col-4' style={{ cursor: 'pointer' }}>
                        <div className='text-center bg-warning rounded-3 py-3'>
                            <AgricultureIcon sx={{ fontSize: '100px' }} />
                            <h5>Harvesting</h5>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Cultivation