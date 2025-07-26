const Total = ({courseParts}) => {
    const total = courseParts.reduce((acc, part) => acc + part.exercises, 0);

    return (
        <>
            <p><strong>total of {total} exercises</strong></p>
        </>
    );
}

export default Total;