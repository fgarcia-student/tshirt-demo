import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TshirtListPage from "./ListPage"
import { Tshirt } from "../models/Tshirt"
import { contentfulClient } from "../api/contentful"
import { AppEntities } from '../enums/AppEntities';
import { squareApiWrapper } from '../api/square';
import { AppContext } from '../state/store';
import { Asset } from "../models/Asset"
import { toDictionary } from "../utils/dictionaryUtils"

const initialTshirts: Tshirt[] = [];

const IndexPage = () => {

  const appContext = React.useContext(AppContext);
  const [tshirts, setTshirts] = React.useState(initialTshirts);
  const [form] = React.useState(squareApiWrapper.createPaymentForm({
    cardNonceResponseReceived: (errors, nonce, cardData) => {
      console.log({
        errors,
        nonce,
        cardData
      });
      squareApiWrapper.handlePayment({
        nonce,
        url: process.env.GATSBY_SQUARE_PAYMENT_HANDLE_URL ?? "",
      });
    }
  }));

  const onGetCardNonce = React.useCallback(() => {
    form.requestCardNonce();
  }, []);

  React.useEffect(() => {
    // form.build();
    contentfulClient.sync({
      initial: true,
    })
    .then((res) => {
      const assetsDictionary = res.assets
        .map((asset) => {
          return new Asset({
            id: asset.sys.id,
            title: asset.fields.title,
            description: asset.fields.description,
            fileUrl: asset.fields.file?.["en-US"]?.url,
            fileName: asset.fields.file?.["en-US"]?.fileName,
            contentType: asset.fields.file?.["en-US"]?.contentType,
            imgWidth: asset.fields.file?.["en-US"]?.details?.image?.width,
            imgHeight: asset.fields.file?.["en-US"]?.details?.image?.height,
            imgSize: asset.fields.file?.["en-US"]?.details?.size,
          });
        })
        .reduce(toDictionary(), {});
    
      const tshirtDictionary = res.entries
        .filter((entry) => entry.sys.contentType.sys.id === AppEntities.tshirt)
        .map((item) => {
          return new Tshirt({
            id: item.sys.id,
            formattedPrice: item.fields.formattedPrice?.['en-US'],
            description: item.fields.description?.['en-US'],
            name: item.fields.name?.['en-US'],
            price: item.fields.price?.['en-US'],
            sizes: item.fields.sizes?.['en-US'],
            priceBySize: item.fields.priceBySize?.['en-US'],
            imgMain: assetsDictionary[item.fields.imgMain?.['en-US'].sys.id]?.fileUrl,
            imgAlt: item.fields.imgAlt?.['en-US'].map((imgEntry) => assetsDictionary[imgEntry.sys.id]?.fileUrl),
          });
        })
        .reduce(toDictionary(), {});
      
      appContext.setState?.((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          [AppEntities.tshirt]: tshirtDictionary,
          [AppEntities.assets]: assetsDictionary,
        }
      }));
    });
  }, []);

  const tshirtsArray = React.useMemo(() => {
    return Object.values(appContext.state.items.tshirt ?? {})
  }, [appContext.state.items.tshirt])

  return (
    <Layout>
      <SEO title="Home" />
      <TshirtListPage
        tshirts={tshirtsArray}
      />
    </Layout>
  )
}

export default IndexPage
