import { Alert } from "react-bootstrap";

export default function WarningComponent(props) {
  return (
    <div>
      <Alert variant="danger">{props.alertText}</Alert>
    </div>
  );
}
