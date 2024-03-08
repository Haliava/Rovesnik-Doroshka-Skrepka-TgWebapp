import React from 'react';
import styles from './styles.module.scss';
import { Optional, TEvent } from '../../shared/types';
import Button from '../../shared/ui/button';
import EventInfoText from '../eventInfoText';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
    data: Optional<TEvent, 'price'>,
    showUpperBubble: boolean,
    customUpperBubbleText?: string,
    customActionButtonText?: string,
    customActionButtonAction?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    showActionButton?: boolean,
}
const EventCard = ({
    data,
    showUpperBubble,
    customUpperBubbleText,
    showActionButton,
    customActionButtonAction,
    customActionButtonText
}: Props) => {
    const navigate = useNavigate();
    const buyTickets = () => {
    };
    // вообще у нас в данных есть только цена, а не время начала, так что пусть для начала так останется
    const { date, name, place, price } = data;

    return (
        <div
            className={classNames(styles.root)}
            // как появится api, у каждого ивента будет свой id, который надо будет сюда прокидывать
            onClick={() => navigate(`/events/0`)}
        >
            {showUpperBubble && (
                <div className={styles.rootTime}>
                    {/* {customUpperBubbleText ?? price} */}
                    {customUpperBubbleText ?? 'c 20:00'}
                </div>
            )}
            <EventInfoText data={{ date, name, place }} />
            {!!showActionButton && <Button
                className={styles.buttonBuy}
                text={customActionButtonText ?? 'Купить билет'}
                type='white'
                onClick={customActionButtonAction ?? buyTickets}
            />}

        </div>
    );
};

export default EventCard;
