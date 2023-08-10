import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import QuestionCard from "../../components/questionCard/QuestionCard";
import { discussions } from "../../mobx/discussions";
import type { IQuestion } from "../../types/questions";

const Discussion = () => {
    const { name } = useParams();
    const data: IQuestion = name && discussions.getDiscussions() && discussions.getDiscussions().find( ( item: IQuestion ) => item?.name === name );

    return (
        <Box pt={5}>
            <Container maxWidth="lg">
                { data?.name && <QuestionCard name={data.name} date={data.date} fromUser={data.fromUser}
                               category={data.category}/> }
            </Container>
        </Box>
    );
};

export default Discussion;