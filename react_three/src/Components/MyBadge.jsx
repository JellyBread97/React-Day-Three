import { Badge } from "react-bootstrap";

export default function MyBadge(props) {
  return (
    <div>
      <Badge variant={props.color}>{props.badgeText}</Badge>
    </div>
  );
}
