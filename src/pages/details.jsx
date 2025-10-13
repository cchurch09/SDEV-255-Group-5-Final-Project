import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { backendUrl } from "../scripts/script"

export default function Details() {
    let params = useParams()
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPost = async () => {
            try {
            setLoading(true);
            const response = await fetch(`${backendUrl}/${params.id}`)
            const thisCourse = await response.json()
            setPosts(thisCourse);
          } catch (err) {
            console.log(err)
          } finally {
            setLoading(false)
          }
        };

        loadPost();
    }, [10000]);

    return (
        <>
            <div className="App">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <h1>{posts.name}</h1>
                  
                )}
            </div>
        </>
    );
    }