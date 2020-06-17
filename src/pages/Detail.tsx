import React from "react";
import { PageProps, Link } from 'gatsby';
import { Tshirt } from '../models/Tshirt';
import styled from "styled-components";
import Layout from "../components/layout"


type LocationState = {
  tshirt: Tshirt;
}

type Props = PageProps<{}, {}, LocationState>;

const TshirtDetailPage: React.FC<Props> = (props) => {
  const { tshirt } = props.location.state;
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          height: "95vh",
          alignItems: "center"
        }}
      >
        {/* images pane on the left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={tshirt.img_main} />
          <div>
            {tshirt.img_alt.map((imgUrl) => (
              <img style={{ border: "1px solid black", marginRight: "2px" }} src={imgUrl} width={150} height={75} />
            ))}
          </div>
        </div>
        {/* information on the right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: "48px", paddingBottom: "20px" }}>{tshirt.name}</div>
          <div style={{ fontSize: "32px", paddingBottom: "20px"  }}>{tshirt.price}</div>
          <div style={{ fontSize: "18px", paddingBottom: "20px" }}>{tshirt.description}</div>
          <select>
            {tshirt.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <button onClick={() => alert("Added to cart")}>Add to cart</button>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </Layout>
  );
}

export default styled(TshirtDetailPage)`

`

