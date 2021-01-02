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
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          moreHandler={() => props.moreHandler(ctrl.type)}
          lessHandler={() => props.lessHandler(ctrl.type)}
          label={ctrl.label}
          lessDisabled={props.lessDisabled[ctrl.type]}
        />
      ))}
    </div>
  )
}
