import React from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/redux";
import { selectEventById } from "../../features/eventList/eventSlice";
import EventCard from "../../widgets/eventCard";
import Button from "../../shared/ui/button";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/footer";
import { eventTypeDescriptionsMap } from "../../shared/constants";
import GuestForm from "../../shared/ui/guestForm";
import GuestList from "../../widgets/guestList";
import styles from './styles.module.scss';

const EventDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useAppSelector((state) => selectEventById(state, Number(id) ?? 0));
    const buyTickets = () => navigate(`/events/${id}/reservation`);

    return (
        <div className={styles.root}>
            <Header />
            <EventCard
                data={data}
                showUpperBubble
            />
            <div>
                <p>О событии</p>
                <p>{data.description}</p>
            </div>
            <div>
                <h3>Тип: {data.type}</h3>
                <p>{eventTypeDescriptionsMap.get(data.type)}</p>
            </div>
            {data.type === 'Бесплатная вечеринка' && (
                <>
                    <div>
                        <GuestList />
                    </div>
                    <Button text='Зарегистрироваться' onClick={buyTickets} />
                </>
                
            )}
            {data.type === 'Депозит' && (
                <>
                    <h3>Цена: {data.price}</h3>
                    <Button text='Купить билет' onClick={buyTickets} />
                </>     
            )}
            <Footer />
        </div>
    );
};

export default EventDetailsPage;
