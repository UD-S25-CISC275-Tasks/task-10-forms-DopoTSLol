import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [colors, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {[
                    "red",
                    "yellow",
                    "lime",
                    "cyan",
                    "blue",
                    "magenta",
                    "white",
                    "gray",
                ].map((col: string) => (
                    <Form.Check
                        key={col}
                        type="radio"
                        name="colorChange"
                        onChange={updateColor}
                        label={col}
                        inline
                        style={{ backgroundColor: col }}
                        value={col}
                        checked={colors === col}
                    />
                ))}
            </Form.Group>

            <div>
                You have Chosen
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: colors }}
                >
                    {colors}
                </div>
            </div>
        </div>
    );
}
