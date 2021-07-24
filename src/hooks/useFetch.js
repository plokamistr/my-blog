import React, { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const abortControl = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortControl.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("Fetch Aborted")
                    } else {
                        setError(err.message);
                    }

                });
        }, 1000);
        return () => {
            abortControl.abort();
        }
    }, [url]);

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch;