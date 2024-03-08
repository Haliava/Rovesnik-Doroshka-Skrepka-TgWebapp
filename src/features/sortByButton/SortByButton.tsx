import React, { useRef, useState } from "react";
import classNames from "classnames";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { selectFilter, setFilter } from "../eventList/eventSlice";
import { barList, filterList, filterToWordMap } from "../../shared/constants";
import { searchIcon, showFiltersIcon } from '../../shared/assets';
import Button from "../../shared/ui/button";
import { Drawer, Menu } from "@mui/material";
import { line, triangle } from '../../shared/assets/';
import { coverageConfigDefaults } from "vitest/config";
import { BarName, Filter } from "../../shared/types";

type Props = {
    iconType?: 'showFiltersIcon' | 'searchIcon',
}
const SortByButton = ({iconType = 'showFiltersIcon'}: Props) => {
    const dispatch = useAppDispatch();
    const selectedFilter = useAppSelector(selectFilter);
    const [isOpen, setIsOpen] = useState(false);
    const menuAnchorRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div
            ref={menuAnchorRef}
            className={styles.root}
        >
            <Button
                onClick={toggleMenu}
                className={styles.btnPosition}
                text= {
                    <>
                        {iconType === 'showFiltersIcon' && <img src={showFiltersIcon} />}
                        {iconType === 'searchIcon' && <img src={searchIcon} />}
                    </>}
            />

            <Menu
                open={isOpen}
                onClose={() => toggleMenu()}
                anchorEl={menuAnchorRef.current}
            >
                {filterList.map(filter => (
                    <div
                        key={filter}
                        className={classNames(styles.root, { [styles.selectedFilter]: selectedFilter === filter })}
                        onClick={() => { 
                            dispatch(setFilter(filter as Filter | BarName)); 
                            toggleMenu(); 
                        }}
                    >
                        {filterToWordMap.get(filter as Filter | BarName)}
                    </div>
                ))}
            </Menu>
        </div>
    )
};

export default SortByButton;
