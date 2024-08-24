import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import useAuth from './useAuth';

export default function usePets() {
    const { user } = useAuth();

    const [pets, setPets] = useState([]);

    useEffect(() => {

        const fetchDataPets = async () => {

            const q = query(collection(db, "pets"), where("iduser", "==", user.uid));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const petsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPets(petsData);
            } else {
                setPets([]);
            }
        }

        fetchDataPets();

    }, [pets]);

    return { pets };
}
