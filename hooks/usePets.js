import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import useAuth from './useAuth';

export default function usePets() {
    const { user } = useAuth();
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isSubscribed = true; // To prevent state update on unmounted component

        const fetchPets = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const q = query(collection(db, "pets"), where("iduser", "==", user.uid));
                const querySnapshot = await getDocs(q);

                if (isSubscribed) {
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
            } catch (err) {
                if (isSubscribed) setError(err);
            } finally {
                if (isSubscribed) setLoading(false);
            }
        };

        fetchPets();

        return () => {
            isSubscribed = false; // Cleanup function to prevent memory leaks
        };
    }, [user]);

    return { pets, loading, error };
}
