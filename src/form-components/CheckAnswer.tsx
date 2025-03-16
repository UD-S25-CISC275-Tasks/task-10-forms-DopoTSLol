import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, changeAnswer] = useState<string>();

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswerImput">
                <Form.Label>Input Answer to question here:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(e) => {
                        changeAnswer(e.target.value);
                    }}
                />
            </Form.Group>

            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
