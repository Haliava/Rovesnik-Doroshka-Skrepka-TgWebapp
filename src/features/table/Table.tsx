import React from "react";
import styles from './styles.module.scss';
import { TableData } from "../../shared/types";
import { twoPersonTable } from "../../shared/assets";
import { tableCapacityCases } from "../../shared/constants";

type Props = {
    info: TableData,
}
const Table = ({info}: Props) => {
    const {id, capacity, location} = info;

    return (
        <div>
            <div>
                <div>
                    <div className={styles.availability} />
                    <h1>{`Стол №${id}`.toLocaleUpperCase()}</h1>
                </div>
                <div>
                    <p>{`Стол на ${capacity} ${tableCapacityCases.get(capacity)} | ${location} этаж`}</p>
                </div>
            </div>
            <div>
                <img src={twoPersonTable} />
            </div>
        </div>
    )
};

export default Table;
