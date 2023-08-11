import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import QuestionCard from "../../components/questionCard/QuestionCard";
import { discussions } from "../../mobx/discussions";
import type { IQuestion } from "../../types/questions";
import AnswerController from "../../components/answerController/AnswerController";
import { answers } from "../../mobx/answers";
import type { IAnswer } from "../../types/answers";
import AnswersMap from "../../components/answersMap/AnswersMap";
import { useEffect, useState } from "react";

const Discussion = () => {
    const { name } = useParams();

    const [question, setQuestion] = useState<IQuestion | null>( null );
    const [usersAnswers, setUsersAnswers] = useState<IAnswer[] | null>( null );

    useEffect( () => {
        if ( name ) {
            if ( discussions.getDiscussions() ) {
                const data: IQuestion = discussions.getDiscussions().find( ( item: IQuestion ) => item.name === name );
                setQuestion( data );
            }

            if ( answers.getAnswers() ) {
                const answersData: IAnswer[] = answers.getAnswers().filter( ( item: IAnswer ) => item?.discussion === name );
                setUsersAnswers( answersData );
            }
        }
    } , [name] );

    return (
        <Box pt={5}>
            <Container maxWidth="lg">
                { question && <QuestionCard name={question.name} date={question.date} fromUser={question.fromUser}
                               category={question.category}/> }

                <Box>
                    { question && <AnswerController name={question.name}/>}
                    { usersAnswers && <AnswersMap answers={usersAnswers} />}
                </Box>
            </Container>
        </Box>
    );
};

export default Discussion;