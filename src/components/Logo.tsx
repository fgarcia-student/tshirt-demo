import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

type Props = {
  imageUrl: string;
  srcSet: string;
  className?: string;
}

const Logo: React.FC<Props> = (props) => (
  <Link
    className={props.className}
    to="/"
  >
    <img
      src={props.imageUrl}
      alt="My Logo"
    />
  </Link>
)

export default styled(Logo)`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 99;
  mix-blend-mode: difference;

  img {
    width: 300px;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;