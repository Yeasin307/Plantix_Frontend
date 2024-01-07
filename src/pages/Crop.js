import Layout from '../layout/Layout'
import Weather from '../components/Weather'
import CropSelection from '../components/CropSelection'
import CropDetails from '../components/CropDetails'

const Crop = () => {
    return (
        <Layout>
            <CropSelection />
            <CropDetails />
            <Weather />
        </Layout>
    )
}

export default Crop