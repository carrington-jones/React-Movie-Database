import {useState, useEffect} from 'react'
//API
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

//ALWAYS use "use" to start customer hooks

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page) //uses function from API.js file

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    }

    //Initial and search
    useEffect(() => {
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm]);

    return {state, loading, error, searchTerm, setSearchTerm};
}
