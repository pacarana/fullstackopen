import StatisticLine from "./StatisticLine";

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

    return good || neutral || bad ? (
        <>
        <section>
            <h1>statistics</h1>

            <StatisticLine statName={"good"} statValue={good} />
            <StatisticLine statName={"neutral"} statValue={neutral} />
            <StatisticLine statName={"bad"} statValue={bad} />
            <StatisticLine statName={"all"} statValue={good + neutral + bad} />
            <StatisticLine statName={"average"} statValue={handleAverage().toFixed(14)} />
            <StatisticLine statName={"positive"} statValue={handlePositiveAverage().toFixed(13) + "%"} />
        </section>
        </>
    ) : (
        <div>
            <p>No feedback given</p>
        </div>
    )
};

export default Statistics;