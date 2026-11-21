import { List, GreenBtn, BlueBtn, RedBtn } from "./FeedbackOptions.styled";

function FeedbackOptions({plus, minus, equal,}) {
  
  return (
    <>
            <List>
                <li><GreenBtn type="button" onClick={()=> plus(prev=> prev + 1)}>Good</GreenBtn></li>
                <li><BlueBtn type="button"onClick={()=> equal(prev=> prev + 1)}>Neutral</BlueBtn></li>
                <li><RedBtn type="button"onClick={()=> minus(prev=> prev + 1)}>Bad</RedBtn></li>
            </List>
    </>
  );
}

export default FeedbackOptions