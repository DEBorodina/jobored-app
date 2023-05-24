import { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/redux";
import { addToFavorites, deleteFromFavorites, getFavorites } from "../../utils/localStorage";
import Empty from "../Empty";
import VacancyCard from "../VacancyCard";

const VacanciesBlock: React.FC= () => {
    const vacancies = useAppSelector(state => state.vacancyReducer.vacancies);

    const [favorites, setFavorites] = useState<number[]>([]);
    
    useEffect(() => {
        const favoritesFromLocalStorage = getFavorites();
        setFavorites(favoritesFromLocalStorage);
    }, [])

    const updateFavorites = (key: number) => {
        if(favorites.includes(key)){
            setFavorites(deleteFromFavorites(key));
        } else {
            setFavorites(addToFavorites(key));
        }
    }

    return (
        <>
         {vacancies.length ?  
             vacancies.map((vacancy) => 
                <VacancyCard 
                    isFavorite={favorites.includes(vacancy.id)} 
                    updateFavorites={updateFavorites} 
                    vacancy={vacancy} 
                    key={vacancy.id}
                    main={false}
                    />)
         : <Empty message={'Упс, ничего не найдено!'}/>
         }  
        </>           
    )
}

export default VacanciesBlock;