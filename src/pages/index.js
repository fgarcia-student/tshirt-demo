import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TshirtListPage from "./ListPage"
import { Tshirt } from "../models/Tshirt"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TshirtListPage
      tshirts={[
        new Tshirt({ id: 1, tag: ["Tyrone"], name: "Call Tyrone", price: "35.00 USD", img_main: "https://lh3.googleusercontent.com/vCp35-JQOuw2Ih6InbdJ_sEt9GJCbRzvxO_M8eSzo-bQ00N7yl64bRfIQyfzPFnOlRKUbuziv2Nbj-mTdfTRGrARFWkzrX9ZfqwZKesnKhH8PnS5V13WsQYKiyaQS3tga_YKzcgBxA=w2400", description: "No time for small talk, tell Tyrone to leave you alone!", quantity: 5, sizes: ["Small", "Medium", "Large", "X-Large"]}),
        new Tshirt({ id: 2, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/OQkOPwHkjvPd-nvH5fUfJsn91FedS1q2CN7oXzM9TYdPULgrZUMKPnBB3g60N4dZ0qx9v5PPAdUHhLNGifQxoGhgoCx44iTPvhxStNZHFOfZI9EPDyMMgShRAmBawfSJXqg4hm7Lmw=w2400" }),
        new Tshirt({ id: 3, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/mhfH6ntSz75VZLlWa14agj42AC1AIYngOedyLRnuT-qKXVCyfqehL4LtOMOkQTdXUP4YQAd2t3sMxL9xOkV_fqrdLZIAGQnt1HTlZ7-ICXlIlKHScICaD1_VIE40uSaBm6HHUZCQiQ=w2400" }),
        new Tshirt({ id: 4, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/OQkOPwHkjvPd-nvH5fUfJsn91FedS1q2CN7oXzM9TYdPULgrZUMKPnBB3g60N4dZ0qx9v5PPAdUHhLNGifQxoGhgoCx44iTPvhxStNZHFOfZI9EPDyMMgShRAmBawfSJXqg4hm7Lmw=w2400" }),
        new Tshirt({ id: 5, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/mhfH6ntSz75VZLlWa14agj42AC1AIYngOedyLRnuT-qKXVCyfqehL4LtOMOkQTdXUP4YQAd2t3sMxL9xOkV_fqrdLZIAGQnt1HTlZ7-ICXlIlKHScICaD1_VIE40uSaBm6HHUZCQiQ=w2400" }),
        new Tshirt({ id: 6, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/OQkOPwHkjvPd-nvH5fUfJsn91FedS1q2CN7oXzM9TYdPULgrZUMKPnBB3g60N4dZ0qx9v5PPAdUHhLNGifQxoGhgoCx44iTPvhxStNZHFOfZI9EPDyMMgShRAmBawfSJXqg4hm7Lmw=w2400" }),
        new Tshirt({ id: 7, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/mhfH6ntSz75VZLlWa14agj42AC1AIYngOedyLRnuT-qKXVCyfqehL4LtOMOkQTdXUP4YQAd2t3sMxL9xOkV_fqrdLZIAGQnt1HTlZ7-ICXlIlKHScICaD1_VIE40uSaBm6HHUZCQiQ=w2400" }),
        new Tshirt({ id: 8, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/OQkOPwHkjvPd-nvH5fUfJsn91FedS1q2CN7oXzM9TYdPULgrZUMKPnBB3g60N4dZ0qx9v5PPAdUHhLNGifQxoGhgoCx44iTPvhxStNZHFOfZI9EPDyMMgShRAmBawfSJXqg4hm7Lmw=w2400" }),
        new Tshirt({ id: 9, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/mhfH6ntSz75VZLlWa14agj42AC1AIYngOedyLRnuT-qKXVCyfqehL4LtOMOkQTdXUP4YQAd2t3sMxL9xOkV_fqrdLZIAGQnt1HTlZ7-ICXlIlKHScICaD1_VIE40uSaBm6HHUZCQiQ=w2400" }),
        new Tshirt({ id: 10, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://lh3.googleusercontent.com/OQkOPwHkjvPd-nvH5fUfJsn91FedS1q2CN7oXzM9TYdPULgrZUMKPnBB3g60N4dZ0qx9v5PPAdUHhLNGifQxoGhgoCx44iTPvhxStNZHFOfZI9EPDyMMgShRAmBawfSJXqg4hm7Lmw=w2400" }),
      ]}
    />
  </Layout>
)

export default IndexPage
