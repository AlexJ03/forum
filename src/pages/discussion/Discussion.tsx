import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import QuestionCard from "../../components/questionCard/QuestionCard";
import { discussions } from "../../mobx/discussions";
import type { IQuestion } from "../../types/questions";
import AnswerController from "../../components/answerController/AnswerController";
import { answers } from "../../mobx/answers";
import type { IAnswer } from "../../types/answers";
import AnswersMap from "../../components/answersMap/AnswersMap";

const Discussion = () => {
    const { name } = useParams();
    const data: IQuestion = name && discussions.getDiscussions() && discussions.getDiscussions().find( ( item: IQuestion ) => item?.name === name );
    const answersData: IAnswer[] = name && answers.getAnswers() && answers.getAnswers().filter( ( item: IAnswer ) => item?.discussion === name );

    return (
        <Box pt={5}>
            <Container maxWidth="lg">
                { data?.name && <QuestionCard name={data.name} date={data.date} fromUser={data.fromUser}
                               category={data.category}/> }

                <Box>
                    <AnswerController name={data.name} />
                    <AnswersMap answers={answersData} />
                </Box>
            </Container>
        </Box>
    );
};

export default Discussion;