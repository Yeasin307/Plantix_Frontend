import React, { useContext } from 'react'
import riceImg from "../assets/images/Rice.png"
import potatoImg from "../assets/images/Potato.png"
import tomatoImg from "../assets/images/Tomato.png"
import { AuthContext } from '../context/AuthProvider';

const CropSelection = () => {
    const { cropSelection, setCropSelection } = useContext(AuthContext);

    const crops = [
        { name: 'Rice', img: riceImg },
        { name: 'Potato', img: potatoImg },
        { name: 'Tomato', img: tomatoImg }
    ]

    return (
        <div>
            <h1 className='text-center my-5'>Select Your Crop</h1>
            <div className='d-flex justify-content-center align-items-center'>
                {crops.map(crop =>
                    <div className='mx-3' style={{ cursor: 'pointer' }} onClick={() => setCropSelection(crop.name)}>
                        <div style={{ width: '100px', height: '100px', border: `5px solid ${crop.name === cropSelection ? 'green' : 'gray'}`, borderRadius: '50%' }} >
                            <img className='img-fluid' src={crop.img} alt="" />
                        </div>
                        <h5 className='text-center my-3'>{crop.name}</h5>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CropSelection