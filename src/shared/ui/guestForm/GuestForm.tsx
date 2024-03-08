import { TextField } from "@mui/material";
import React from "react"
import { crossSignIcon } from "../../assets";
import { GuestInviteForm } from "../../types";
import { privateEncrypt } from "crypto";

type Props = {
    id: number,
    setGuestList: React.Dispatch<React.SetStateAction<GuestInviteForm[]>>,
    guestList: GuestInviteForm[],
}
const GuestForm = ({id, guestList, setGuestList}: Props) => {
    const removeGuest = () => {
        setGuestList(prev => {
            if (id <= 1) return prev;
            console.log(prev);
            prev.splice(id, 1);
            return [...prev];
        })
    };
    const handleChange = (trigger: 'name' | 'tg', value: string) => {
        setGuestList(prev => {
            prev[id][trigger === 'name' ? 0 : 1] = value;
            return [...prev];
        })
    }

    return (
        <div>
           <h3>Гость №{id + 1}</h3>
           <div>
                <TextField
                    onChange={(e) => handleChange('name', e.target.value)}
                    label="Имя Фамилия"
                    variant="outlined"
                />
                <TextField
                    onChange={(e) => handleChange('tg', e.target.value)}
                    label="Telegram"
                    variant="outlined"
                />
           </div>
           <button onClick={removeGuest}>
                <img src={crossSignIcon} />
            </button>
        </div>
    )
};

export default GuestForm;
