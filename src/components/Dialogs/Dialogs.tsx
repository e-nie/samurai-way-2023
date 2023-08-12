import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog + ' ' + s.active}>
                    <NavLink to = {'/dialogs/1'}>Evchen</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = {'/dialogs/2'}>Eloise</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = {'/dialogs/3'}>Florence</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = {'/dialogs/4'}>Natalie</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = {'/dialogs/5'}> Isabella</NavLink>
                </div>
            </div>
            <div className = {s.messages}>
                <div className = {s.message}>Hi</div>
                <div className = {s.message}>How is it going ?</div>
                <div className = {s.message}>Yo</div>
            </div>
        </div>

    )
}

export default Dialogs
