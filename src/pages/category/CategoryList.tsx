import { useParams } from "react-router-dom";
import DiscussionController from "../../components/discussions/controller/DiscussionController";
import DiscussionsMap from "../../components/discussions/map/DiscussionsMap";

export const CategoryList = () => {
    const { name } = useParams();
    console.log( name, "Yes" );

    return (
        <div>
            <h1>{name}</h1>
            <DiscussionController name={name} />
            <DiscussionsMap name={name} />
        </div>
    );
};