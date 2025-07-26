import Header from './Header'
import Content from './Content'
import Total from './Total';

const Course = ({course}) => {
    return (
        <>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total courseParts={course.parts} />
        </>
    );
}

export default Course;