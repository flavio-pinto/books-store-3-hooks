import { Alert } from "react-bootstrap"

const WarningSign = (props) => {
  return(
    <>
      <Alert variant={props.alertColor}>{props.alertText}</Alert>
    </>
  )
}

export default WarningSign;