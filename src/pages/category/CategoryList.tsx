import { useParams } from "react-router-dom";
import { DiscussionController, DiscussionsMap } from "@components-discussions";

export const CategoryList = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
            <DiscussionController name={name} />
            <DiscussionsMap name={name} />
        </div>
    );
};