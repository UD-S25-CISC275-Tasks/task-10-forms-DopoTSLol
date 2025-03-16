import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, changeChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        changeChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                {options.map((option: string) => (
                    <Form.Check
                        key={option}
                        type="radio"
                        name="colorChange"
                        onChange={updateChoice}
                        label={option}
                        value={option}
                        checked={choice === option}
                    />
                ))}
            </Form.Group>

            <div>
                {choice === expectedAnswer ?
                    <div>✔️</div>
                :   <div>❌</div>}
            </div>
        </div>
    );
}
