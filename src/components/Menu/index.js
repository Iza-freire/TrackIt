
import * as C from "./style";
import { Link, useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

export default function Menu() {
  const location = useLocation();

  const percentage = 66;

  return (
    <C.Footer>
      <C.StyledLink to="/habits">Hábitos</C.StyledLink>
       <C.ContentProgressbar>
        <C.CircularProgressbarContainer>
          <Link to="/today">
            <CircularProgressbar
              text={"Hoje"}
              background
              backgroundPadding={7}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </C.CircularProgressbarContainer>
      </C.ContentProgressbar>

      <C.StyledLink to="/historic">Histórico</C.StyledLink>
    </C.Footer>
  );
}