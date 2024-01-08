import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Layout from '../layout/Layout'
import { AuthContext } from '../context/AuthProvider';

const Pests = () => {
    const { cropSelection } = React.useContext(AuthContext);

    return (
        <Layout>
            <h1 className='text-center my-5'>Pests & Diseases Control</h1>
            <div className='container '>
                <div className='row gx-3'>
                    {cropSelection === "Rice" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/rice-yellow-mottle-virus-rice-1580124458.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Rice Yellow Mottle Virus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Younger leaves are mottled with yellow to green spots. After infection (2 weeks) these spots elongate parallel to the leaf veins. In the center of the yellow streaks, dark patches develop. Older leaves show yellow or orange discoloration. The growth of the plants can be stunted and the yield is reduced.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button target="_blank" href='https://plantix.net/en/library/plant-diseases/200021/rice-yellow-mottle-virus' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                    {cropSelection === "Rice" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/ring-spot-of-sugarcane-sugarcane-1569940753.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Heal your crop
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Initial symptoms show small, elongated, oval-shaped spots that are dark green to reddish-brown with yellow halos. Older symptoms are characterised by large and elongated lesions with irregular outlines and red-brown margins. The spots may join together to form larger patches, which can result in chlorosis.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button target="_blank" href='https://plantix.net/en/library/plant-diseases/100348/ring-spot-of-sugarcane' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                    {cropSelection === "Rice" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/brown-spot-of-rice-rice-1.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Brown Spot of Rice
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This disease is characterized by a wide range of symptoms. However, the presence of circular or oval brown spots with a yellow halo during the tillering stage is the most visible sign of the infection. As they enlarge, a gray center develops in the middle of these spots and a  reddish-brown margin becomes visible.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button target="_blank" href='https://plantix.net/en/library/plant-diseases/100064/brown-spot-of-rice' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                    {cropSelection === "Rice" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/udbatta-disease-of-rice-1.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Udbatta Disease of Rice
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Symptoms first become evident at the time of panicle emergence. Infection is systemic and all tillers are involved. Infected plants are usually stunted and characterized by a white mycelial mat that ties panicle branches together. Panicles emerge as single, straight, dirty-coloured, cylindrical rods out of the sheath.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    target="_blank"
                                    href='https://plantix.net/en/library/plant-diseases/100181/udbatta-disease-of-rice/' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                    {cropSelection === "Potato" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/black-scurf-potato-1580745943.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Black Scurf
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Raised black spots, irregular in size or shape, appear on the surface of the potato tubers (scurfs). These black marks can be rubbed or scraped off easily. With the help of a hand lens, white fungal material can be observed around these spots. The fungus also causes symptoms resembling those of stem canker on stems.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    target="_blank"
                                    href='https://plantix.net/en/library/plant-diseases/100043/black-scurf/' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                    {cropSelection === "Potato" && <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://content.peat-cloud.com/w400/potato-s-virus-potato-1575475070.jpg"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Potato S Virus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Symptoms of the virus highly vary and depend on several factors including the host, environmental conditions. In most cultivars, the viral infection remains symptomless. Some varieties will show a slight deepening of the veins, rough leaves, more open growth, milt mottling, bronzing or tiny necrotic (black) spots.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    target="_blank"
                                    href='https://plantix.net/en/library/plant-diseases/200060/potato-s-virus/' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
                </div>
            </div>
        </Layout>
    )
}

export default Pests