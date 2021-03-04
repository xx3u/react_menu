import './Aftermath.css';
import { Alert, AlertTitle } from '@material-ui/lab';


const Aftermath = () => {
  return (
    <div className="Aftermath">
      <Alert severity="success">
        <AlertTitle>Thank you for your Order!</AlertTitle>
        We will be glad to see you again on Our Website! <strong><a href="/">Please come back!</a></strong>
      </Alert>
    </div>
  )
};

export default Aftermath;