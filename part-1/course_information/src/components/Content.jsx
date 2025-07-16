const Content = ({parts}) => {

    return (
        <div>
            {/* using () instead of {} in map
                implicitly says 'return' */}
            {parts.map((p) => (
                <p>
                    {p.name} {p.exercises}
                </p>
            ))}
        </div>
    );
}

export default Content;