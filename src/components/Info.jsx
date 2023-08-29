import { useEffect, useState } from "react";
import InfoHaveSub from "./InfoHaveSub";
import InfoHaveNotSub from "./UserProfile";

const BASE_URL = process.env.REACT_APP_BASE_URL


export default function Info() {


    const [user, setUser] = useState()
    const [status, setStatus] = useState("")

    useEffect(() => {
        fetch(BASE_URL + "users/current", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        }).then(response => response.json()).then(res => {
            setUser(res)
            setStatus(res.subName)
        });
    }, [])


    if (status == 'HAVE_SUB') {
        return (
            <InfoHaveSub user={user} />
        )
    } else if (status == 'HAVE_NOT_SUB') {
        return (
            <InfoHaveNotSub user={user} />
        )
    }
}