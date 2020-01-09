import React from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Hooks() {
  let history = useHistory();
  let { id } = useParams();
  return (
    <div>
      Hello Hooks <h1>{id}</h1>
      <button onClick={() => history.push("/showtime/2")}>跳转到Topic</button>
    </div>
  );
}
