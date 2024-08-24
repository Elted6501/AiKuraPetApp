import { useEffect, useState } from "react";

export default function useDogBreeds() {
    const [dogBreeds, setDogBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/list/all');
                const data = await response.json();
                const breedList = Object.keys(data.message);
                setDogBreeds(breedList);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBreeds();
    }, []);

    return { dogBreeds };
}