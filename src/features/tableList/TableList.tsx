import React from "react"
import { TableData } from "../../shared/types";
import Table from "../table";
import { mockAvailableTables } from "../../shared/constants";

const TableList = () => {
    const availableTables: TableData[] = mockAvailableTables; // useSelector(selectAvailableTables)

    return (
        <div>
            {availableTables.map((table, id) => (
                <Table key={id} info={table} />
            ))}
        </div>
    )
};

export default TableList;
