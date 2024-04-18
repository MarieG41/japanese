import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DishDatas from '../datas/dishData.json'

const DishPages = () => {
    const { slug } = useParams()
    const [dish, setDish] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const currentDish = DishDatas.find((dish) => dish.slug === slug)
        if(!currentDish) {
            navigate("/plat-non-trouve")
        }
        setDish(currentDish)
    }, [slug, navigate])

    return (
        <>
        <div>
            <Container>
                {dish ? ( 
                    <>
                        <Row>
                            <Col>
                                <img src={dish.img} alt={dish.name} className="mw-100"/>
                            </Col>
                            <Col >
                                <h1>{dish.name}</h1>
                                <p>{dish.description}</p>
                                <p className="bold">{dish.price}€</p>
                                <Button variant="primary">Commander</Button>
                            </Col>
                        </Row>
                    </>
                ) :
                    (<Row>
                        <p>Chargement de la page</p>
                    </Row>)}

            </Container>
        </div>
    </>
    )
}

export default DishPages;