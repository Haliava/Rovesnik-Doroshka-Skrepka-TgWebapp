import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Formik, Form, Field } from 'formik'
import { InputLabel, MenuItem, Select } from '@mui/material';
import { dateSelectRange, maxGuestCount } from '../../shared/constants';
import { addDaysToDate, convertTimestampToDateString, getTimeSelectList } from '../../shared/utils';
import { Timestamp } from '../../shared/types';
import { useAppDispatch } from '../../app/hooks/redux';
import Button from '../../shared/ui/button';

const ReservationForm = () => {
    let date = new Date();
    const dispatch = useAppDispatch();
    const timeSelectList = getTimeSelectList(date);
    const [formData, setFormData] = useState(['', 2, addDaysToDate(date, 0).toISOString().split('T')[0] as Timestamp, timeSelectList[0]]);

    return (
        <div>
            <Formik
                initialValues={{
                    guestCount: 2,
                    dateSelect: addDaysToDate(date, 0).toISOString().split('T')[0] as Timestamp,
                    timeSelect: timeSelectList[0],
                }}
                onSubmit={values => {
                    // dispatch(setAvailableTables(values))
                }}
            >
                {({handleSubmit}) => (
                    <Form>
                        <Field name="name" placeholder="Имя Фамилия" />
                        <Select defaultValue={formData[1]} name="guestCount">
                            {Array.from({length: maxGuestCount}).map((_, i) => (
                                <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                            ))}
                        </Select>
                        <div>
                            <Select defaultValue={formData[2]} name="dateSelect" label="Дата">
                                {Array.from({length: dateSelectRange}).map((_, i) => {
                                    const newDateTimestamp = addDaysToDate(date, i).toISOString().split('T')[0] as Timestamp;
                                    return (<MenuItem key={i} value={newDateTimestamp}>
                                        {convertTimestampToDateString(newDateTimestamp)}
                                    </MenuItem>)
                                })}
                            </Select>
                            <Select defaultValue={formData[3]} name="timeSelect" label="Время">
                                {timeSelectList.map((time, i) => (
                                    <MenuItem key={i} value={time}>{time}</MenuItem>
                                ))}
                            </Select>
                        </div>
                        <Button type="white" text="Применить" onClick={handleSubmit} />
                    </Form>
                )} 
            </Formik>
        </div>
    )
}

export default ReservationForm
