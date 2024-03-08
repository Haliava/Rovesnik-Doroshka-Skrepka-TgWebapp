import React from "react"
import ReservationCard from "../reservationCard";
import { TEvent } from "../../shared/types";
import { mockApiResponse } from "../../shared/constants";
import EventCard from "../../widgets/eventCard";
import Button from "../../shared/ui/button";
import { useNavigate } from "react-router-dom";

const ReservationList = () => {
    const navigate = useNavigate()
    const userReservations: (TEvent & {eventStatus: string})[] = 
        [...mockApiResponse.events].map(event => ({...event, ...{eventStatus: 'ok'}})); // useAppSelector(selectUserReservations)
    const handleEditReservation = (eventId: number) => {
        // smth
    }
    const redirectToAfisha = () => navigate('/');

    return (
        <div>
            {userReservations.length > 0 && userReservations.map(reservationEvent => (
                <EventCard
                    data={reservationEvent}
                    showActionButton
                    customActionButtonText={'Изменить бронь'}
                    customActionButtonAction={() => handleEditReservation(reservationEvent.id)}
                    showUpperBubble
                />
            ))}
            {userReservations.length <= 0 && (
                <>
                    <p>У вас пока что нет активных билетов. Посмотрите афишу и выберите то, что вас заинтересует.</p>
                    <Button
                        text={'Посмотреть афишу'}
                        type="white" 
                        onClick={() => redirectToAfisha()}
                    />
                </>
            )}
        </div>
    )
};

export default ReservationList;
