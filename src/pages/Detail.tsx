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
  
  const [activeImage, setActiveImage] = React.useState(tshirt.img_main ?? "");
  const handleSetActiveImage = React.useCallback((url: string) => () => { setActiveImage(url); }, [])
  
  const [backgroundPosition, setBackgroundPosition] = React.useState("0% 0%");
  const handleSetBackgroundPosition = React.useCallback((e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  }, []);

  const [isHovering, setIsHovering] = React.useState(false);
  const handleStartHovering = React.useCallback(() => setIsHovering(true), []);
  const handleStopHovering = React.useCallback(() => setIsHovering(false), []);

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
          <div style={{ width: "650px", height: "350px" }} onMouseEnter={handleStartHovering} onMouseMoveCapture={handleStartHovering} onMouseLeave={handleStopHovering}>
            {isHovering && (
              <figure className="main_image" onMouseMove={handleSetBackgroundPosition} style={{ backgroundImage: `url(${activeImage})`, backgroundPosition, width: "100%", height: "100%", margin: "0px" }} />
            )}
            {!isHovering && (
              <img style={{ width: "100%", height: "100%", margin: "0px" }} src={activeImage} />
            )}
          </div>
          <div style={{ flex: 1, marginTop: "5px" }}>
            <img className="image_preview" onClick={handleSetActiveImage(tshirt.img_main)} src={tshirt.img_main} width={150} height={75} />
            {tshirt.img_alt.map((imgUrl) => (
              <img className="image_preview" onClick={handleSetActiveImage(imgUrl)} src={imgUrl} width={150} height={75} />
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
          <div style={{ fontSize: "48px", paddingBottom: "20px", lineHeight: "60px" }}>{tshirt.name}</div>
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
            <button disabled={tshirt.quantity === 0} onClick={() => alert("Coming soon!")}>Add to cart</button>
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
    width: 100%;
  }

  .image_preview {
    border: 1px solid black;
    margin-right: 5px;
    transition: border-width 0.1s ease-in;
    cursor: pointer;

    &:hover {
      border-width: 3px;
    }
  }

  .main_image {
    opacity: 1;
    background-repeat: no-repeat;
    margin: 0px;

    > img {
      display: block;
      width: 100%;
      pointer-events: none;
    }

    &:hover {
      > img {
        opacity: 0;
      } 
    }
  }
  
  @media screen and (max-width: 750px) {
    flex-direction: column;

    .sold-out-label {
      left: 125px;
    }

    .image_preview {
      transition: unset;
    }
  }
`

