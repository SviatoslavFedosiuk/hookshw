import './App.css'
import { use, useEffect, useState } from "react"; 
import Nofication from './components/Nofication/Nofication';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Title from './components/Title/Title';
import Statistics from './components/Statistics/Statistics';
import StatisticsText from './components/StatisticsText/StatisticsText';
function App() {
  const [good, setGood] = useState(0);
  
  const [neutral, setNetural] = useState(0);
   
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedback = () => {
    const total = countTotalFeedback()

    if (total === 0) {
      return 0
    }

    return (good / total) * 100
  }

  const total = countTotalFeedback()
  return (
    <>
    <Title />

        <FeedbackOptions 
        plus={setGood}
        minus={setBad}
        equal={setNetural}
         />

        <StatisticsText />
     {total > 0 ? (
          <Statistics
            plus={good}
        minus={bad}
        netural={neutral}
            totalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Nofication/>
        )}
    </>
  );
}

export default App