import { useParams } from "react-router-dom";

const Discussion = () => {
    const { name } = useParams();

    return (
        <div>{ name }</div>
    );
};

export default Discussion;