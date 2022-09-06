import { Badge } from "react-bootstrap"

const MyBadge = (props) => {
  return(
    <>
      <Badge bg={props.badgeColor}>{props.badgeText}</Badge>
    </>
  )
}

export default MyBadge;