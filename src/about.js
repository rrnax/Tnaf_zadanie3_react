export const About = (props) => {
    if (props.id == 0){
        return null;
    } else {
        return (
            <div>
                <h1>{props.info[props.id].name} {props.info[props.id].lastName}</h1>
                <h3>Date birth: {props.info[props.id].date}</h3>
                <h3>E-mail: {props.info[props.id].email}</h3>
            </div>
        )
    }
}