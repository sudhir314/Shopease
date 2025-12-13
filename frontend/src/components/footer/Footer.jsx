import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container1">
        <div className="footer_content">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item1"
            />
            <span style={{ fontSize: "13px" }}>Quick Delivery</span>
          </div>
        </div>

        <div className="footer_content">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item2"
            />
            <span style={{ fontSize: "13px" }}>Easy Returns</span>
          </div>
        </div>

        <div className="footer_content-alt">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item3"
            />
            <span style={{ fontSize: "13px" }}>Quality Assured</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer_container2">
        <div className="footer_content2">
          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      KNOW US
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">About Shopease</li>
                    <li className="footer_li">Blog</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>KNOW US</p>
              <ul>
                <li className="footer_li">About Shopease</li>
                <li className="footer_li">Blog</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>

          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      HELPDESK
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">Terms of use</li>
                    <li className="footer_li">Warranty Policy</li>
                    <li className="footer_li">Shipping Policy</li>
                    <li className="footer_li">Cancellation Policy</li>
                    <li className="footer_li">Return & exchange Policy</li>
                    <li className="footer_li">Privacy & Security Policy</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>HELPDESK</p>
              <ul>
                <li className="footer_li">Terms of use</li>
                <li className="footer_li">Warranty Policy</li>
                <li className="footer_li">Shipping Policy</li>
                <li className="footer_li">Cancellation Policy</li>
                <li className="footer_li">Return & exchange Policy</li>
                <li className="footer_li">Privacy & Security Policy</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>

          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      NETWORK
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">Contact Us</li>
                    <li className="footer_li">Corporate Gifting</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>NETWORK</p>
              <ul>
                <li className="footer_li">Contact Us</li>
                <li className="footer_li">Corporate Gifting</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>
        </div>

        <div className="footer_content3">
          <div className="footer_social">
            <span className="footer_social-title">FOLLOW US ON</span>
            <div className="footer_social-link">
              <a
                style={{ marginRight: "9px" }}
                href="https://www.linkedin.com/in/sudhir-kumar-646982327"
                target="_blank"
                rel="noreferrer">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedin"
                />
              </a>
              <a
                style={{ marginRight: "9px" }}
                href="mailto:sudhir@solvewithsudhir.in">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="email"
                />
              </a>
            </div>
          </div>

          <hr />

          <div className="footer_download">
            <span className="footer_app-title">DOWNLOAD OUR APP</span>
            <div className="footer_app-link">
              <img
                style={{
                  width: "118px",
                  height: "38px",
                  cursor: "pointer",
                  marginRight: "25px",
                }}
                src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                alt="playstore"
              />
              <img
                style={{ width: "118px", height: "38px", cursor: "pointer" }}
                src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                alt="applestore"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer_container3">
        <div className="footer_payment-div">
          <span className="footer_payment">100% SECURE PAYMENT</span>
        </div>

        <div className="footer_partner">
          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="amex"
              />
            </picture>
          </div>
          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="maestro"
              />
            </picture>
          </div>
          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="mastercard"
              />
            </picture>
          </div>
          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="visa"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="footer_end">
        &#169; 2025 Sudhir Kumar. All rights reserved. | Built with MERN Stack
      </div>
    </footer>
  );
};

export default Footer;