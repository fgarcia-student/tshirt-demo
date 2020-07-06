import React from "react";
import { PageProps } from 'gatsby';
import { Tshirt } from '../models/Tshirt';
import styled from "styled-components";
import Layout from "../components/layout"
import { AppEntities } from '../enums/AppEntities';
import { AppContext, IAppContext } from "../state/store";

type LocationState = {
  tshirt: Tshirt;
}

type StyledProps = { className?: string }

type Props = StyledProps & PageProps<{}, {}, LocationState>;

const TshirtDetailPage: React.FC<Props> = (props) => {
  const appContext = React.useContext(AppContext);
  const tshirt = React.useMemo(() => {
    // if no tshirt could be located in location state
    if (!(props.location.state?.tshirt)) {
      
    }
    return props.location.state?.tshirt ?? new Tshirt({});
  }, [appContext.state.items.tshirt]);
  
  const [activeImage, setActiveImage] = React.useState(tshirt.imgMain ?? "");
  const handleSetActiveImage = React.useCallback((url: string) => () => { setActiveImage(url); }, []);
  
  const [selectedSize, setSelectedSize] = React.useState(tshirt.sizes ? tshirt.sizes[0] ?? "" : "");
  const handleSetSelectedSize = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setSelectedSize(e.currentTarget.value), []);

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

  const handleAddItemToCart = React.useCallback(() => {
    if (selectedSize) {
      appContext.addItemToCart?.(AppEntities.tshirt, tshirt, selectedSize);
    }
  }, [tshirt, selectedSize, appContext.addItemToCart]);

  const price = React.useMemo(() => {
    const p  = tshirt.priceBySize[selectedSize] ?? tshirt.price;
    return tshirt.formattedPrice.replace("{price}", `${p}`);
  }, [selectedSize]);

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
            <img className="image_preview" onClick={handleSetActiveImage(tshirt.imgMain)} src={tshirt.imgMain} width={150} height={75} />
            {tshirt.imgAlt.map((imgUrl) => (
              <img key={imgUrl} className="image_preview" onClick={handleSetActiveImage(imgUrl)} src={imgUrl} width={150} height={75} />
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
          <div style={{ fontSize: "32px", paddingBottom: "20px"  }}>{price}</div>
          <div style={{ fontSize: "18px", paddingBottom: "20px" }}>{tshirt.description}</div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <select className="size_selection_dropdown" onChange={handleSetSelectedSize}>
              {tshirt.sizes.length !== 0 && tshirt.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <button className={`add_to_cart_button ${tshirt.sizes.length === 0 ? "disabled" : ""}`} disabled={tshirt.sizes.length === 0} onClick={handleAddItemToCart}>Add to cart</button>
          </div>
          <div 
            className="go_back_button"
            onClick={() => window.history.back()}
          >
            <i className="material-icons">arrow_back</i>
            <span>Go Back</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default styled(TshirtDetailPage)`
  flex-direction: row;

  .go_back_button {
    display: flex;
    padding-left: 0px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid black;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: #a1a1a1;
      color: white;
    }
  }

  .add_to_cart_button {
    border: 1px solid black;
    background-color: white;
    margin-top: 5px;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
      color: white;
    }

    &:focus {
      outline: none;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover {
        background-color: white;
        color: grey;
      }
    }
  }

  .size_selection_dropdown {
    border: 1px solid black;
    background-color: white;
    margin-top: 5px;

    &:focus {
      outline: none;
    }
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
  
  @media screen and (max-width: 912px) {
    flex-direction: column;

    .image_preview {
      transition: unset;
    }
  }
`

