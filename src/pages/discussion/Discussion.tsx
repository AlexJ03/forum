import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { AnswerController, AnswersMap } from "@components-answers";
import { QuestionCard } from "@components-questions";
import mobx from "@mobx";
import { filterAnswers, findCurrentDiscussion, decrypt } from "@utils";
import { observer } from "mobx-react-lite";
import { Progress } from "@components-progress";

export const Discussion = observer( () => {
    const { name: n } = useParams();

    const name = decrypt( n );

    const question = name && mobx.discussions.getDiscussions() && findCurrentDiscussion( mobx.discussions.getDiscussions(), name );
    const answers = name && mobx.answers.getAnswers() && filterAnswers( mobx.answers.getAnswers(), name );

    return (
        <>
            {
                ( question && answers ) ? (
                    <Box pt={5}>
                        <Container maxWidth="lg">
                            { question && <QuestionCard name={question.name} date={question.date} fromUser={question.fromUser} category={question.category} /> }

                            <Box>
                                { question && <AnswerController name={question?.name}/>}
                                { answers && <AnswersMap answers={answers} />}
                            </Box>
                        </Container>
                    </Box>
                ) : <Progress />
            }
        </>
    );
} );