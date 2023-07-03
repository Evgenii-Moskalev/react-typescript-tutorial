import { useState, useRef } from "react";

interface Person {
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
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    // const [count, setCount] = useState<number | null | undefined | string>(5);
    // setCount(16);
    // setCount(null);
    const [count, setCount] = useState<{ text: string } | TextNode>({ text: 'hello' });
    // setCount({ text: 'Hi' })
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}