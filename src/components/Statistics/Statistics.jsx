function Statistics({totalFeedback, positivePercentage, plus, minus, netural}) {
  
  return (
    <>
        <ul>
            <li>
                <p>Good:</p>
                <span>{plus}</span>
            </li>
            <li>
                <p>Neutral:</p>
                <span>{netural}</span>
            </li>
            <li>
                <p>Bad:</p>
                <span>{minus}</span>
            </li>
            <li>
                <p>Total:</p>
                <span>{totalFeedback}</span>
            </li>
            <li>
                <p>Positive feedback:</p>
                <span>{Math.round(positivePercentage)}%</span>
            </li>
        </ul>
    </>
  );
}

export default Statistics