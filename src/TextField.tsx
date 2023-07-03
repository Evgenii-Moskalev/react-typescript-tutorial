import React from "react";

interface Person{
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    integer?: number;
    // fn: () => void;
    // fn: () => number;
    fn?: (bob: string) => string;
    // obj: {
    //     f1: string,
    // }
    // obj: Person;
    person: Person;
}

export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    )
}