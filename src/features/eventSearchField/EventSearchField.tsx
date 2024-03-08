import React, { useRef, useState } from "react"
import SortByButton from "../sortByButton";
import styles from './styles.module.scss';
import { searchIcon } from '../../shared/assets';

const EventSearchField = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div>
            <input
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                type="text"
                className={styles.searchInput}
                placeholder="Поиск событий"
            />
            <SortByButton iconType={isInputFocused ? 'searchIcon': 'showFiltersIcon'} />
        </div>
       
    )
};

export default EventSearchField;
