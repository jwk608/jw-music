import React, { userState, useState } from 'react';
import AlbumSearch from './components/albumSearch.js';
import Albums from './components/Albums/Albums';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function App() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('album');
    const [count, setCount] = useState(25);

    function handleAlbumSearch(e) {
        setQuery(e.target.value);
    }

    const { loading, error, albums } = AlbumSearch(query, search, count);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header className="App-header"></header>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>JW's Album Search</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <div className="InputContainer">
                            <input
                                type="text"
                                onChange={handleAlbumSearch}
                                placeholder="Search by Albums by Artist Name or Album Name!"
                            ></input>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Container maxWidth="sm">
                            <Albums albums={albums} />

                            <div>{loading && 'Loading...'}</div>
                            <div>{error && 'Error'}</div>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
