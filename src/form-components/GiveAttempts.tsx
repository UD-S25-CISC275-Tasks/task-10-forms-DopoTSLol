import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);
    const [reqAttempts, changeReqAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Group>
                <Form.Label>Input Number of Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(e) => {
                        e.target.value !== "" ?
                            changeReqAttempts(Number(e.target.value))
                        :   e;
                    }}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    changeAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(attempts + reqAttempts);
                }}
            >
                gain
            </Button>
            <div>Number of Attempts : {attempts}</div>
        </div>
    );
}
