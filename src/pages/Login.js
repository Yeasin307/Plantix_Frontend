import React, { useContext, useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from 'react-router-dom';
import login from '../assets/images/login.jpg';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const [data, setData] = useState({});
    const { isLoading, loginUser } = useContext(AuthContext);

    let location = useLocation();
    let navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }

    const handleLoginSubmit = async (e) => {
        await loginUser(data.email, data.password, location, navigate);
        e.preventDefault();
    }

    return (
        <Container sx={{ marginTop: '100px', textAlign: 'center' }}>

            {isLoading && <CircularProgress />}

            <Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={2}>

                <Grid item xs={12} md={6}>

                    <Typography sx={{ color: 'blue', fontWeight: 400 }} variant="h4" gutterBottom>Login</Typography>

                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="standard"
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                        />

                        <TextField
                            name="password"
                            type="password"
                            label="Your Password"
                            variant="standard"
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                        >
                            Login
                        </Button>

                    </form>

                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;