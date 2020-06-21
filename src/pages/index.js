import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TshirtListPage from "./ListPage"
import { Tshirt } from "../models/Tshirt"

const tshirts = [
  new Tshirt({ id: 1, tag: ["Tyrone"], name: "Call Tyrone", price: "35.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3cTKwCMV036CcXRt-dVxCDnaxNbJQwy2vcwJocFC28NOQndrMyCHR-g6Z0yv8-EQo2OgahCQwmnSlbWCzRSDVrNqujHwuYwEAfqL2raeuIgK_aXOimDrL5lfZaplSq0dXxmXKlN7kXHbgGtbInUJlx2=w1000-h562-no", img_alt: ["https://lh3.googleusercontent.com/pw/ACtC-3fZ-6ysVaUvh_nZVBhgsPdyGTapAMdid_GE4vNOrQIflZ0vSrdCazOf8EwHGDSRvHHU_HSFuE34DKZ1Dz1HopmW_BuN0jP0oMwV862fv4I-ukt6T2rG6mepKXeFVabRYlR2g5IZ2I_Q-4Xe-oCk2Dbl=w1000-h562-no", "https://lh3.googleusercontent.com/pw/ACtC-3fvYpcRuJLazbkG0PUFDyIAAr3CgdAR_sH6iNEaCQ4XSZDQYca9sAOxb4quxpmnLXon3nS5XnCk7t5lHliFxTvoB0pbmX9ykApdDT9zZy6iR-_yc7M6cf-HMgkO_Fn1HKBXFMxZeobP1MQuOz_bPKU9=w1000-h562-no"], description: "No time for small talk, tell Tyrone to leave you alone!", quantity: 5, sizes: ["Small", "Medium", "Large", "X-Large"]}),
  new Tshirt({ id: 2, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3dFM6u7P0ENvr_QVii4hMhWrElDpzU7c6bQyU4DOAyGNAxmKR-McOiJLvfTVA7ic3IF0yInKpxvEKQTvelr2c6aTWwi14-za4oEYlx7949vgpvGGtLoXmI1XO8t_vBWYI-y4sg-kxoBYdfrMRqvXNc6=w1000-h667-no" }),
  new Tshirt({ id: 3, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3f2-zZqZrFVFmfmM70KAHFisuRM6CDcUp5pxk73ek7U_3_k8KlbhPKvV4ic7H905M9RK-ZaDSiR2k2H9l5rS3QQXManIWS3R4vZA1zvJoZBVianlmozkVa2p8aNtuGYqS-EFbdRZ7LVolGvDQh1ZD-_=w1000-h667-no" }),
  new Tshirt({ id: 4, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3dFM6u7P0ENvr_QVii4hMhWrElDpzU7c6bQyU4DOAyGNAxmKR-McOiJLvfTVA7ic3IF0yInKpxvEKQTvelr2c6aTWwi14-za4oEYlx7949vgpvGGtLoXmI1XO8t_vBWYI-y4sg-kxoBYdfrMRqvXNc6=w1000-h667-no" }),
  new Tshirt({ id: 5, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3f2-zZqZrFVFmfmM70KAHFisuRM6CDcUp5pxk73ek7U_3_k8KlbhPKvV4ic7H905M9RK-ZaDSiR2k2H9l5rS3QQXManIWS3R4vZA1zvJoZBVianlmozkVa2p8aNtuGYqS-EFbdRZ7LVolGvDQh1ZD-_=w1000-h667-no" }),
  new Tshirt({ id: 6, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3dFM6u7P0ENvr_QVii4hMhWrElDpzU7c6bQyU4DOAyGNAxmKR-McOiJLvfTVA7ic3IF0yInKpxvEKQTvelr2c6aTWwi14-za4oEYlx7949vgpvGGtLoXmI1XO8t_vBWYI-y4sg-kxoBYdfrMRqvXNc6=w1000-h667-no" }),
  new Tshirt({ id: 7, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3f2-zZqZrFVFmfmM70KAHFisuRM6CDcUp5pxk73ek7U_3_k8KlbhPKvV4ic7H905M9RK-ZaDSiR2k2H9l5rS3QQXManIWS3R4vZA1zvJoZBVianlmozkVa2p8aNtuGYqS-EFbdRZ7LVolGvDQh1ZD-_=w1000-h667-no" }),
  new Tshirt({ id: 8, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3dFM6u7P0ENvr_QVii4hMhWrElDpzU7c6bQyU4DOAyGNAxmKR-McOiJLvfTVA7ic3IF0yInKpxvEKQTvelr2c6aTWwi14-za4oEYlx7949vgpvGGtLoXmI1XO8t_vBWYI-y4sg-kxoBYdfrMRqvXNc6=w1000-h667-no" }),
  new Tshirt({ id: 9, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3f2-zZqZrFVFmfmM70KAHFisuRM6CDcUp5pxk73ek7U_3_k8KlbhPKvV4ic7H905M9RK-ZaDSiR2k2H9l5rS3QQXManIWS3R4vZA1zvJoZBVianlmozkVa2p8aNtuGYqS-EFbdRZ7LVolGvDQh1ZD-_=w1000-h667-no" }),
  new Tshirt({ id: 10, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/pw/ACtC-3dFM6u7P0ENvr_QVii4hMhWrElDpzU7c6bQyU4DOAyGNAxmKR-McOiJLvfTVA7ic3IF0yInKpxvEKQTvelr2c6aTWwi14-za4oEYlx7949vgpvGGtLoXmI1XO8t_vBWYI-y4sg-kxoBYdfrMRqvXNc6=w1000-h667-no" }),
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TshirtListPage
      tshirts={tshirts}
    />
  </Layout>
)

export default IndexPage
