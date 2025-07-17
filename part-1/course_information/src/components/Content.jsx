import Part from './Part';

const Content = ({parts}) => {

    return (
        <div>
            {parts.map((p) => (
                <Part name={p.name} exercises={p.exercises}/>
            ))}
        </div>
    );
}

export default Content;