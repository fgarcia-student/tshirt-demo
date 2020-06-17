import React from "react";
import { PageProps, Link } from 'gatsby';
import { Tshirt } from '../models/Tshirt';
import styled from "styled-components";
import Layout from "../components/layout"


type LocationState = {
  tshirt: Tshirt;
}

type StyledProps = { className?: string }

type Props = StyledProps & PageProps<{}, {}, LocationState>;

const TshirtDetailPage: React.FC<Props> = (props) => {
  const tshirt = props.location.state?.tshirt ?? new Tshirt({});
  return (
    <Layout>
      <div
        className={props.className}
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
            {tshirt.img_alt.length === 0 && (
              <img style={{ border: "1px solid black", marginRight: "5px" }} src={tshirt.img_main} width={150} height={75} />
            )}
            {tshirt.img_alt.map((imgUrl) => (
              <img style={{ border: "1px solid black", marginRight: "5px" }} src={imgUrl} width={150} height={75} />
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
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {tshirt.quantity === 0 && (
              <div className={"sold-out-label"}>
                SOLD OUT
              </div>
            )}
            <select>
              {tshirt.quantity === 0 && (
                <option key={"SOLD OUT"} value={"SOLD OUT"}>SOLD OUT</option>
              )}
              {tshirt.quantity !== 0 && tshirt.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <button disabled={tshirt.quantity === 0} onClick={() => alert("Added to cart")}>Add to cart</button>
          </div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </Layout>
  );
}

export default styled(TshirtDetailPage)`
  flex-direction: row;
  .sold-out-label {
    color: red;
    position: absolute;
    left: 50px;
    bottom: 50px;
    font-size: 34px;
    line-height: 50px;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;

    .sold-out-label {
      left: 125px;
    }
  }
`

