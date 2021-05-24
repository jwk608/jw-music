import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AlbumSearch(query, search, count) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        setAlbums([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'https://itunes.apple.com/search',
            params: { term: query, entity: search, limit: count },
            cancelToken: new axios.CancelToken((c) => {
                cancel = c;
            }),
        })
            .then((res) => {
                setAlbums(() => {
                    return res.data.results.map((album) => {
                        return {
                            artistName: album.artistName,
                            albumName: album.collectionName,
                            yearReleased: album.releaseDate,
                            albumArt: album.artworkUrl100,
                        };
                    });
                });
                setLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
                setError(true);
            });
        return () => cancel();
    }, [query, search, count]);
    return { loading, error, albums };
}
