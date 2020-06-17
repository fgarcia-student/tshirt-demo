import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import { Tshirt } from '../models/Tshirt';

type Props = {
  tshirts: Tshirt[];
  className?: string;
}

const TshirtListPage: React.FC<Props> = ({ tshirts, className }) => (
  <div className={className}>
    {tshirts?.map((tshirt) => (
      <Link to="Detail" state={{tshirt}} >
        <div className="tshirt-card-container" key={tshirt.img_main}>
          <img className="tshirt-card-image" src={tshirt.img_main} alt={tshirt.name} />
          <div className="tshirt-card-title">{tshirt.name}</div>
          <div className="tshirt-card-price">{tshirt.price}</div>
        </div>
      </Link>
    ))}
  </div>
)

export default styled(TshirtListPage)`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }

  .tshirt-card-container {
    cursor: pointer;
  }

  .tshirt-card-title,
  .tshirt-card-price {
    opacity: 0;
    text-align: center;
    transition: opacity 0.2s ease-in;
  }

  .tshirt-card-image {
    transition: transform 0.2s ease-in;
  }

  .tshirt-card-container:hover >
  .tshirt-card-title {
    opacity: 1;
  }

  .tshirt-card-container:hover >
  .tshirt-card-price {
    opacity: 1;
  }

  .tshirt-card-container:hover >
  .tshirt-card-image {
    transform: scale(1.1);
  }
`;
