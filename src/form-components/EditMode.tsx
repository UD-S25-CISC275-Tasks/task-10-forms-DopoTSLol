import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, changeName] = useState<string>("");
    const [isStudent, changeStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Group>
                <Form.Label>In edit mode?</Form.Label>
                <Form.Check
                    type="switch"
                    id="in-edit-mode"
                    label="Edit?"
                    checked={mode}
                    onChange={() => {
                        setMode(!mode);
                    }}
                />
            </Form.Group>
            {mode && (
                <>
                    <Form.Group>
                        <Form.Label>Is a student?</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Is a student?"
                            checked={isStudent}
                            onChange={() => {
                                changeStudent(!isStudent);
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                changeName(e.target.value);
                            }}
                        />
                    </Form.Group>
                </>
            )}

            {mode && isStudent ?
                <div>{name} is a student</div>
            : mode && !isStudent ?
                <div>{name} is not a student</div>
            : !mode && isStudent ?
                <div>Your Name is a student</div>
            :   <div>Your Name is not a student</div>}
        </div>
    );
}
