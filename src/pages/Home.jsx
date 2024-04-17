import { useState, useEffect } from 'react';
import DishDatas from '../datas/dishData.json'
import Dish from '../components/Dish'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import '../assets/styles/home.css'

const Home = () => {
    const [ showNewOnly, setShowNewOnly ] = useState(false)
    const [ dishes, setDishes ] = useState([])
    function handleShowNewOnly() {
        setShowNewOnly(!showNewOnly)
    }
    
    useEffect(() => {
        const filteredDishes = showNewOnly ? DishDatas.filter((dish) => dish.isNew) : DishDatas;
        setDishes(filteredDishes)
    }, [showNewOnly]);
    return (
        <Container>
             <Button variant="primary" onClick={handleShowNewOnly}> {showNewOnly ? ("Voir tous les plats") : ("Nouveauté uniquement") }</Button>
            <Row>{dishes.length > 0 && dishes.map((dish, index) => (
                    <Dish 
                        key={index} 
                        name={dish.name}
                        img={dish.img}
                        price={dish.price}
                        slug={dish.slug}
                        description={dish.description}
                        isNew={dish.isNew}
                    />
                ))} </Row> 
        </Container>
    )
}

export default Home