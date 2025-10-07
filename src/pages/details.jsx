import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { courses } from "../scripts/script"

export default function Details() {
    let params = useParams()
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    let thisCourse = {}

    useEffect(() => {
        const loadPost = async () => {
            // Till the data is fetch using API
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that
            // promise settles and return its result
            const response = await courses.fetchOne(params.id)
            thisCourse = response

            // After fetching data stored it in posts state.
            setPosts(response.data);

            // Closed the loading page
            setLoading(false);
        };

        // Call the function
        loadPost();
    }, []);

    return (
        <>
            <div className="App">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <h1>{thisCourse.name}</h1>
                )}
            </div>
        </>
    );
    }