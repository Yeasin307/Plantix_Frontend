import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState } from 'react'

const Post = () => {
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_API}/posts`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
        })
            .then((res) => {
                setPosts(res?.data);
            });
    }, []);

    return (
        <div className='container '>
            <div className='row gx-3'>
                {posts?.map(post =>
                    <div className='col-4 my-5'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`${process.env.REACT_APP_SERVER_API}/static/${post?.image}`}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post?.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='d-flex justify-content-between'>
                                <Typography variant="button" component="div">
                                    {post?.createdByUser?.username}
                                </Typography>
                                <Button size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Post