const Statistics = ({good, neutral, bad}) => {

  const handleAverage = () => {
    const total = good + neutral + bad;
    if (!total || total === 0) {
        return 0;
    }
    const avg = (good - bad) / total
    return avg;
  }

  const handlePositiveAverage = () => {
    const total = good + neutral + bad;
    if (!total || total === 0) {
        return 0;
    }
    const pAvg = good / total;
    return pAvg * 100;
  }

    return (
        <>
        <section>
            <h1>statistics</h1>

            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {handleAverage().toFixed(14)}</p>
            <p>positive {handlePositiveAverage().toFixed(13) + "%"}</p>
        </section>
        </>
    );
};

export default Statistics;