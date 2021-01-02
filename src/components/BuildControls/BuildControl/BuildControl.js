import './BuildControl.css';

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button disabled={props.lessDisabled} onClick={props.lessHandler} className="Less">Less</button>
    <button onClick={props.moreHandler} className="More">More</button>
  </div>
);

export default BuildControl;
