import React, { useEffect, useState } from "react"
import { crossSignIcon, plusSignIcon } from "../../shared/assets";
import { GuestInviteForm } from "../../shared/types";
import { defaultGuestListNumber } from "../../shared/constants";
import GuestForm from "../../shared/ui/guestForm";

const GuestList = () => {
    const [guestList, setGuestList] = useState<GuestInviteForm[]>(Array.from({length: defaultGuestListNumber}, (_, k) => ['', '']));
    const addGuest = () => setGuestList(prev => {
        prev.push(['', '']);
        return [...prev];
    });

    return (
        <div>
            <div>
                {guestList.map((guest, i) => (
                    <GuestForm id={i} guestList={guestList} setGuestList={setGuestList} />
                ))}
            </div>
            <button onClick={() => addGuest()}>
                <img src={plusSignIcon} />
                <p>Добавить гостя</p>
            </button>
        </div>
    )
};

export default GuestList;
