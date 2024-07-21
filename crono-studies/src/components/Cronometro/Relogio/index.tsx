import React from "react";
import style from "./Relogio.module.scss";

export default function Relogio() {
    return ( //poderia usar também apenas a tag em branco <></>
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )
}