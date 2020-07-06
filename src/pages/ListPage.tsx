import React from "react"
import styled from "styled-components"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import { Tshirt } from '../models/Tshirt';
import { Link } from 'gatsby';

type Props = {
  tshirts?: Tshirt[];
  className?: string;
}

const TshirtListPage: React.FC<Props> = ({ tshirts, className }) => {

  return (
    <div className={className}>
      {tshirts?.map((tshirt) => {
        let price = tshirt.formattedPrice.replace("{price}", `${tshirt.price}`);
        const sizeCount = Object.keys(tshirt.priceBySize).length;
        if (tshirt.priceBySize && sizeCount > 0) {
          let lowestPrice = 999;
          Object.entries(tshirt.priceBySize)
          .forEach(([, price]) => {
            if (price < lowestPrice) { lowestPrice = price };
          });
          price = tshirt.formattedPrice.replace("{price}", `Starting from ${lowestPrice}`);
        }
        return (
          <Link id={`${tshirt.id}`} key={tshirt.id} to={`/Detail?id=${tshirt.id}`} state={{tshirt}} >
            <div className="tshirt-card-container" key={tshirt.imgMain}>
              <img className="tshirt-card-image" src={tshirt.imgMain} alt={tshirt.name} />
              <div className="tshirt-card-title">{tshirt.name}</div>
              <div className="tshirt-card-price">{price}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

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
