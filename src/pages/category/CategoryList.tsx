import { useParams } from "react-router-dom";
import CategoryListController from "../../components/categoryList/CategoryListController";
import CategoryListMap from "../../components/categoryList/CategoryListMap";

export const CategoryList = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
            <CategoryListController name={name} />
            <CategoryListMap name={name} />
        </div>
    );
};