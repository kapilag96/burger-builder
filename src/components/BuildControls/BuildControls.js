import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

export const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          moreHandler={() => props.moreHandler(ctrl.type)}
          lessHandler={() => props.lessHandler(ctrl.type)}
          label={ctrl.label}
          lessDisabled={props.lessDisabled[ctrl.type]}
        />
      ))}
      <button className='OrderButton' disabled={!props.purchasable}>Order Now</button>
    </div>
  )
}
