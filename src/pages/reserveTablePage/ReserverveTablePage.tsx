import React, { useState } from "react"
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/footer";
import Button from "../../shared/ui/button";
import BarMap from "../../features/barMap";
import styles from './styles.module.scss';
import ReservationForm from "../../features/reservationForm";
import TableList from "../../features/tableList";
import { Modal } from "@mui/material";
import { ReservationInfo, TableData } from "../../shared/types";
import { reservationsApiMockResponse } from "../../shared/constants";
import { convertTimestampToDateString } from "../../shared/utils";

const ReserveTablePage = () => {
    const [shouldShowMap, setShouldShowMap] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const selectedTable: TableData = {capacity: 4, id: 1, location: '3'}; // useSelector(selectTableUpForReservation)
    const selectedReservationDate: ReservationInfo = reservationsApiMockResponse[1]; // useSelector(selectCurrentReservationDate(selectedTable.id)) 
    const reserveTable = async () => {
        await setTimeout(() => Promise.resolve(true), 1000);
        setCurrentStep(2);
    };
    const handleOpen = () => setIsOpen(true);

    return (
        <div className={styles.root}>
            <Header type="reservations" />
            <div className={styles.main}>
                <h1>{'Забронировать стол'}</h1>
                <p>{'Обратите внимание! Если вы хотите забронировать стол на 2+ часа, тогда свяжитесь с нашим менеджером.'}</p>
                <ReservationForm />
                <div>
                    {/* стили менются в зависимости от shouldShowMap */}
                    <button onClick={() => setShouldShowMap(true)}>{'3D - карта'}</button>
                    <button onClick={() => setShouldShowMap(false)}>{'Таблица'}</button>
                </div>
                {shouldShowMap && <BarMap />}
                <TableList />
                <Button type='white' text={'Забронировать стол'} onClick={handleOpen} />
                <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <div>
                        {currentStep === 1 && (
                            <>
                                <h1>Бронь стола</h1>
                                <p>{`Количество человек: ${selectedReservationDate.guestCount}`}</p>
                                <p>{`Стол №${selectedTable.id}`}</p>
                                <p>{`Дата: ${convertTimestampToDateString(selectedReservationDate.date)}`}</p>
                                <p>{`Время: ${selectedReservationDate.time}`}</p>
                                <div>
                                    <Button type='white' text='Забронировать стол' onClick={reserveTable} />
                                    {/* type='hollow' */}
                                    <Button text='Изменить бронь' onClick={() => setIsOpen(false)} />
                                </div>
                            </>
                        )}
                        {currentStep === 2 && (
                            <>
                            <h1>Спасибо!</h1>
                            <p>{`Стол забронирован для Вас на ${convertTimestampToDateString(selectedReservationDate.date)} в ${selectedReservationDate.time}. Ждём в нашем заведении!`}</p>
                        </>
                        )}
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    )
};

export default ReserveTablePage;
