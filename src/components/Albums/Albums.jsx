import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        minWidth: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function Albums({ albums }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            {albums.map((album, index) => {
                return (
                    <div
                        key={album.albumName + index}
                        style={{ width: '100%' }}
                    >
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.cover}
                                image={album.albumArt}
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography
                                        component="h5"
                                        variant="h5"
                                    ></Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="textSecondary"
                                    >
                                        <div>Artist : {album.artistName}</div>
                                        <div>Album Name: {album.albumName}</div>
                                        <div>
                                            {' '}
                                            Year Released :{' '}
                                            {album.yearReleased.substring(0, 4)}
                                        </div>
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? (
                                            <SkipNextIcon />
                                        ) : (
                                            <SkipPreviousIcon />
                                        )}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon
                                            className={classes.playIcon}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? (
                                            <SkipPreviousIcon />
                                        ) : (
                                            <SkipNextIcon />
                                        )}
                                    </IconButton>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}
