import { StepDataType } from '../../utils/data/stepsData';
import './Sidebar.css';
type StepperProps = {
    steps: Array<StepDataType>;
    userData: any;
};
declare const Sidebar: ({ steps, userData }: StepperProps) => JSX.Element;
export default Sidebar;
