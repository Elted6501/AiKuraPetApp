import { useEffect, useState } from "react";

export default function useCatBreeds() {
    const [catBreeds, setCatBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/breeds');
                const data = await response.json();

                const temp = data.map((item) => {
                    return item.name;
                });

                setCatBreeds(temp);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBreeds();
    }, []);

    return { catBreeds };
}