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

            <table>
                <tr>
                    <td><StatisticLine statName={"good"}/></td>
                    <td><StatisticLine statValue={good}/></td>
                </tr>
                <tr>
                    <td><StatisticLine statName={"neutral"}/></td>
                    <td><StatisticLine statValue={neutral}/></td>
                </tr>
                <tr>
                    <td><StatisticLine statName={"bad"}/></td>
                    <td><StatisticLine statValue={bad}/></td>
                </tr>
                <tr>
                    <td><StatisticLine statName={"all"}/></td>
                    <td><StatisticLine statValue={good + neutral + bad}/></td>
                </tr>
                <tr>
                    <td><StatisticLine statName={"average"}/></td>
                    <td><StatisticLine statValue={handleAverage().toFixed(1)}/></td>
                </tr>
                <tr>
                    <td><StatisticLine statName={"positive"}/></td>
                    <td><StatisticLine statValue={handlePositiveAverage().toFixed(1) + "%"}/></td>
                </tr>
            </table>
        </section>
        </>
    ) : (
        <div>
            <p>No feedback given</p>
        </div>
    )
};

export default Statistics;