import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TshirtListPage from "./ListPage"
import Logo from "../components/Logo"
import { Tshirt } from "../models/Tshirt"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TshirtListPage
      tshirts={[
        new Tshirt({ id: 1, tag: ["Tyrone"], name: "Call Tyrone", price: "35.00 USD", img_main: "https://lh3.googleusercontent.com/HywpRSgA_tYNr3FClGKiboKazytcMkRgK2FLYlpTFs8YeNVsza4Bo-hgbKcKlUKQ6Z4DukbTGU3gLJBy5FilKIYJq-_VStpAxiCswLGPeB07n7PaEksZmV3OY4nqiwiwOhLMHMB439U1Nk6aVCuOuIfIogeKJfUb31xRnCu-XMl7-NU7hB-6tesisIv80m25hOpoWJYLuTbdYir3zgTOqebODn6RmM9X6-4nWIDbBwqPQmBjKSIxPOAKNLgBYrfBy4n76UI4rxzVPc5t-nXt1qWQCfndDDqNUPc2NgVaCBERZUQ301VyPeAcxCa3XjxasZlLDDzrje2QzCBjBPtf28b3ILAWVoDihh_sVUgSdJ8Ee3m1sCZk9Qb7WcrXpHhTDbBXhL_EGyO8rO9Jyen6gCORDgYwFkeYGP4VHGb1nJuuKGOTbm-18xyII90kE9EO7VdvKdDkJM7rGfVwAEpmBePlSHYgvtGs8U4vUlLP4s_88Uo3jnBO6R7HfnIwi-7lO1U1DM04KMk0oS0fnMg96FzCMfq2Eh40CSt0lD0gH89jcKQ3JpTc1acgsxbBqT_Do7xc8ZR3xjopVfqLb3xQgDxu2Xzz9Dgzij9NdCy66EXBDW2LbrLrtvDetvIlc8nQ3K_GHqld94w0U_5qGEeeu7_ydZsJ9NZVsYlF8SDEsKnD8DsTkp2LLM7N-oH7=w1000-h562-no?authuser=0", description: "No time for small talk, tell Tyrone to leave you alone!", quantity: 5, sizes: ["Small", "Medium", "Large", "X-Large"], img_alt: ["https://lh3.googleusercontent.com/HywpRSgA_tYNr3FClGKiboKazytcMkRgK2FLYlpTFs8YeNVsza4Bo-hgbKcKlUKQ6Z4DukbTGU3gLJBy5FilKIYJq-_VStpAxiCswLGPeB07n7PaEksZmV3OY4nqiwiwOhLMHMB439U1Nk6aVCuOuIfIogeKJfUb31xRnCu-XMl7-NU7hB-6tesisIv80m25hOpoWJYLuTbdYir3zgTOqebODn6RmM9X6-4nWIDbBwqPQmBjKSIxPOAKNLgBYrfBy4n76UI4rxzVPc5t-nXt1qWQCfndDDqNUPc2NgVaCBERZUQ301VyPeAcxCa3XjxasZlLDDzrje2QzCBjBPtf28b3ILAWVoDihh_sVUgSdJ8Ee3m1sCZk9Qb7WcrXpHhTDbBXhL_EGyO8rO9Jyen6gCORDgYwFkeYGP4VHGb1nJuuKGOTbm-18xyII90kE9EO7VdvKdDkJM7rGfVwAEpmBePlSHYgvtGs8U4vUlLP4s_88Uo3jnBO6R7HfnIwi-7lO1U1DM04KMk0oS0fnMg96FzCMfq2Eh40CSt0lD0gH89jcKQ3JpTc1acgsxbBqT_Do7xc8ZR3xjopVfqLb3xQgDxu2Xzz9Dgzij9NdCy66EXBDW2LbrLrtvDetvIlc8nQ3K_GHqld94w0U_5qGEeeu7_ydZsJ9NZVsYlF8SDEsKnD8DsTkp2LLM7N-oH7=w1000-h562-no?authuser=0", "https://lh3.googleusercontent.com/HywpRSgA_tYNr3FClGKiboKazytcMkRgK2FLYlpTFs8YeNVsza4Bo-hgbKcKlUKQ6Z4DukbTGU3gLJBy5FilKIYJq-_VStpAxiCswLGPeB07n7PaEksZmV3OY4nqiwiwOhLMHMB439U1Nk6aVCuOuIfIogeKJfUb31xRnCu-XMl7-NU7hB-6tesisIv80m25hOpoWJYLuTbdYir3zgTOqebODn6RmM9X6-4nWIDbBwqPQmBjKSIxPOAKNLgBYrfBy4n76UI4rxzVPc5t-nXt1qWQCfndDDqNUPc2NgVaCBERZUQ301VyPeAcxCa3XjxasZlLDDzrje2QzCBjBPtf28b3ILAWVoDihh_sVUgSdJ8Ee3m1sCZk9Qb7WcrXpHhTDbBXhL_EGyO8rO9Jyen6gCORDgYwFkeYGP4VHGb1nJuuKGOTbm-18xyII90kE9EO7VdvKdDkJM7rGfVwAEpmBePlSHYgvtGs8U4vUlLP4s_88Uo3jnBO6R7HfnIwi-7lO1U1DM04KMk0oS0fnMg96FzCMfq2Eh40CSt0lD0gH89jcKQ3JpTc1acgsxbBqT_Do7xc8ZR3xjopVfqLb3xQgDxu2Xzz9Dgzij9NdCy66EXBDW2LbrLrtvDetvIlc8nQ3K_GHqld94w0U_5qGEeeu7_ydZsJ9NZVsYlF8SDEsKnD8DsTkp2LLM7N-oH7=w1000-h562-no?authuser=0"] }),
        new Tshirt({ id: 2, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/tgcdecember_0006_Backgroundcopy2_0054_untitled-19_1024x1024.jpg" }),
        new Tshirt({ id: 3, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/togetherteeweb_1024x1024.jpg" }),
        new Tshirt({ id: 4, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/tgcdecember_0006_Backgroundcopy2_0054_untitled-19_1024x1024.jpg" }),
        new Tshirt({ id: 5, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/togetherteeweb_1024x1024.jpg" }),
        new Tshirt({ id: 6, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/tgcdecember_0006_Backgroundcopy2_0054_untitled-19_1024x1024.jpg" }),
        new Tshirt({ id: 7, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/togetherteeweb_1024x1024.jpg" }),
        new Tshirt({ id: 8, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/tgcdecember_0006_Backgroundcopy2_0054_untitled-19_1024x1024.jpg" }),
        new Tshirt({ id: 9, tag: ["Togetherness"], name: "Together tee (white)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/togetherteeweb_1024x1024.jpg" }),
        new Tshirt({ id: 10, tag: ["Peace"], name: "Welcome tee (black)", price: "40.00 USD", img_main: "https://cdn.shopify.com/s/files/1/1728/8999/products/tgcdecember_0006_Backgroundcopy2_0054_untitled-19_1024x1024.jpg" }),
      ]}
    />
  </Layout>
)

export default IndexPage
