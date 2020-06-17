import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from "gatsby"

const Header = ({ className }) => (
  <header className={className}>
    <Logo
      imageUrl="https://lh3.googleusercontent.com/R7quBrGEafYRbApMuwwJkKziApPIHsUWbmhXDfy3rnsiqZ06rGbuUwnrRegMdNai5-zig0TKLXJLw1Hnicpvelof4GTBt-bmM1wMWgD1NKhV9BH3VYrUH9d6bS6fTDCjkNorfYmn5VE3fuZU_nTskQrIWpaowEVKXBtEJJDsbdhJ7XclA9acWrNz27YmhKilwlferiyt7ZnpO-dIxTT_JsgkjBp6l1Dg0vQl7tG5ts0IVG79RzA96pKUg6jf1Ef0mFhpMXHHywOC7vzyfy-Sr0Lkxo8xR870PdHr8M9HBCOOS_I_QqSZPsNnAxsX5G7F7sW9G9eAkeYuuY4bhIotwMW9OLEXPFpaUDWZQzA23xD_M8kRNLPQywinte_5bKV6JjcVp--1GqORtmYVC2WWlVu1jw8c2DL2fKu19vo7edHYdP8IYZSM3bCWFC6J29CmQmQUZtyU_qwTOGX_Ge_sDtGrqARrOTx2WoV1LNZVGcfitWP_napqqWeYM6r1gKd89tl3yrEi2Dg0vBfgelSoZbAtUUtztiht7Uf3bBoVdNvQDUJBCPRWgRtzBIBezy15wAM8OKo3396uPxUrh85aC5LnuNG5nRpMNild6mObwxS4F2vhconsHBgPKH5bXBhbt00CNmaE1XndxmJk85EFD1j2Nu0GLrBcIl0KuclmaLWPFJpS_BWCLRCFp8qA=w400-h82-no?authuser=0"
    />
    {/* <Link className="shopping-cart-link" to="ShoppingCart" onClick={() => alert("Coming soon!")}> */}
    <Link className="shopping-cart-link" to="/" onClick={() => alert("Coming soon!")}>
      <i className="material-icons">shopping_cart</i>
    </Link>
  </header>
)

export default styled(Header)`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;

  a.shopping-cart-link {
    position: fixed;
    z-index: 100;
    color: black;
    text-decoration: none;
    transition: transform 0.2s ease-in;

    &:hover {
      transform: scale(1.4) translate(-10px, 10px);
    }
  }
`
