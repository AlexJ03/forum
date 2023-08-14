import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { AnswerController, AnswersMap } from "@components-answers";
import { QuestionCard } from "@components-questions";
import mobx from "@mobx";
import { useEffect, useState } from "react";
import type { IDiscussion, IAnswer } from "@types";

export const Discussion = () => {
    const { name } = useParams();

    const [question, setQuestion] = useState<IDiscussion>( null );
    const [usersAnswers, setUsersAnswers] = useState<IAnswer[] | null>( null );

    useEffect( () => {
        if ( name ) {
            if ( mobx.discussions.getDiscussions() ) {
                const discussions: IDiscussion[] = mobx.discussions.getDiscussions();
                const data: IDiscussion = discussions && discussions.find( ( item: IDiscussion ) => item.name === name );
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
                { question && <QuestionCard name={question.name} date={question.date} fromUser={question.fromUser} category={question.category} /> }

                <Box>
                    { question && <AnswerController name={question?.name}/>}
                    { usersAnswers && <AnswersMap answers={usersAnswers} />}
                </Box>
            </Container>
        </Box>
    );
};