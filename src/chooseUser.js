import  {useState} from "react";
import {About, about} from "./about";

export const ChooseUser = (props) => {
    const [id, setId] = useState(0);
    return (
        <div>
            <p>Wybierz osobe:</p>
            <select onChange={(e) =>
                setId(e.target.value)
            }>
                {
                    props.info.map((choice) =>
                        <option value={choice.id}>{choice.name + " " + choice.lastName}</option>
                    )
                }
            </select>
            <About info={props.info} id={id}></About>
        </div>
    )
}