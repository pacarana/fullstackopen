import Part from './Part'

const Content = ({parts}) => {
    return (
        <>
            {/* 
            NOTE:
                Can change '{}' for '()' in map function to implicitly return instead of using return command 
            */}
            {parts.map((part, key) => {
               return <Part key={key} name={part.name} exercises={part.exercises} />
            })}
        </>
    );
}

export default Content;