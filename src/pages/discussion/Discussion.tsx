import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import QuestionCard from "../../components/questions/card/QuestionCard";
import type { IQuestion } from "../../types/questions";
import AnswerController from "../../components/answers/controller/AnswerController";
import mobx from "../../mobx";
import type { IAnswer } from "../../types/answers";
import AnswersMap from "../../components/answers/map/AnswersMap";
import { useEffect, useState } from "react";

export const Discussion = () => {
    const { name } = useParams();

    const [question, setQuestion] = useState<IQuestion | null>( null );
    const [usersAnswers, setUsersAnswers] = useState<IAnswer[] | null>( null );

    useEffect( () => {
        if ( name ) {
            if ( mobx.discussions.getDiscussions() ) {
                const data: IQuestion = mobx.discussions.getDiscussions().find( ( item: IQuestion ) => item.name === name );
                setQuestion( data );
            }

            if ( mobx.answers.getAnswers() ) {
                const answersData: IAnswer[] = mobx.answers.getAnswers().filter( ( item: IAnswer ) => item?.discussion === name );
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