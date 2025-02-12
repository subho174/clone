import logo from "./logo.svg";
import "./App.css";
import Boxes from "./Boxes";
import { Lang } from "./Lang";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";

function App() {
  const [featureOn, setfeatureOn] = useState(false);
  const [showDropDown, setshowDropDown] = useState(false);
  const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth <= 1200);
  const [show, setshow] = useState(false);
  const [showBorder, setshowBorder] = useState(window.scrollY > 0);
  useEffect(() => {
    const showBorder = () => {
      setshowBorder(window.scrollY > 0);
    };
    const handleResize = () => {
      setisSmallScreen(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", showBorder);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", showBorder);
    };
  }, []);

  const showNow = () => {
    setshow(true);
  };
  const dropDown = () => {
    setfeatureOn(true);
  };

  return (
    <div className="App">
      {show && isSmallScreen ? (
        <>
          <div className="header">
            <i
              onClick={() => {
                setshow(!show);
              }}
              class="fa-solid fa-xmark"
            ></i>
            <img
              src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
              alt="Whatsapp Logo"
            />
            <div></div>
          </div>
          <div className="option">
            <ul>
              <li>
                <a href="https://www.whatsapp.com/">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://faq.whatsapp.com/">Help Center</a>
              </li>
              <li>
                <a href="https://blog.whatsapp.com/">Blog</a>
              </li>
              <li>
                <a href="https://business.whatsapp.com/">For Business</a>
              </li>
              <li>
                <a href="https://whatsapp.com/download">Download</a>
              </li>
            </ul>
          </div>
          <footer>
            <div className="part1">
              <div className="logo">
                <button className="download">
                  Download <i class="fa-solid fa-download"></i>
                </button>
              </div>
              <div className="logos">
                <a href="https://x.com/whatsapp">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAuerig2N-RZWJT8x75V9yw">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/whatsapp/?hl=en">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064758844406">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>

            <div className="part2">
              <div className="copyright">
                <div>2025 © WhatsApp LLC</div>
                <div>
                  <a href="https://www.whatsapp.com/legal/">
                    Terms & Privacy Policy
                  </a>
                </div>
              </div>

              <Lang />
            </div>
          </footer>
        </>
      ) : (
        <>
          <nav className={showBorder ? "showBorder" : ""}>
            {!isSmallScreen && (
              <>
                <a href="https://www.whatsapp.com/">
                  <img
                    src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                    alt="Whatsapp logo"
                  />
                </a>

                <ul className="lists">
                  <li onClick={dropDown}>
                    Features <i class="fa-solid fa-angle-down"></i>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com/privacy">Privacy</a>
                  </li>
                  <li>
                    <a href="https://faq.whatsapp.com/">Help Center</a>
                  </li>
                  <li>
                    <a href="https://blog.whatsapp.com/">Blog</a>
                  </li>
                  <li>
                    <a href="https://business.whatsapp.com/">For Buisness</a>
                  </li>
                  <li>
                    <a href="https://whatsapp.com/download">Apps</a>
                  </li>
                </ul>

                <div className="btn-secn">
                  <button className="logIn">
                    Log In <i class="fa-solid fa-angle-right"></i>
                  </button>
                  <button className="download">
                    Download <i class="fa-solid fa-download"></i>
                  </button>
                </div>
              </>
            )}

            {isSmallScreen && (
              <>
                <i
                  class="fa-solid fa-bars"
                  style={{
                    margin: "0",
                    position: "relative",
                    top: "2vh",
                    fontSize: "1.5rem",
                  }}
                  onClick={showNow}
                ></i>
                <a href="https://www.whatsapp.com/">
                  <img
                    src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                    alt="Whatsapp logo"
                  />
                </a>
                <button className="download">
                  <i class="fa-solid fa-download"></i>
                </button>
              </>
            )}

            {isSmallScreen && showDropDown && (
              <ul className="lists">
                <li onClick={dropDown}>
                  Features <i class="fa-solid fa-angle-down"></i>
                </li>
                <li>
                  <a href="https://www.whatsapp.com/privacy">Privacy</a>
                </li>
                <li>
                  <a href="https://faq.whatsapp.com/">Help Center</a>
                </li>
                <li>
                  <a href="https://blog.whatsapp.com/">Blog</a>
                </li>
                <li>
                  <a href="https://business.whatsapp.com/">For Buisness</a>
                </li>
                <li>
                  <a href="https://whatsapp.com/download">Apps</a>
                </li>
              </ul>
            )}
          </nav>

          <div className="main">
            <div className="content">
              <div className="message">
                <p>Message privately</p>
                <p className="m" style={{ fontSize: "1.1rem", color: "#fff" }}>
                  Simple, reliable, private messaging and calling for free*,
                  available all over the world.
                </p>
                <div className="btn-secn">
                  <button className="download">
                    <p>Download</p>
                    <i class="fa-solid fa-download"></i>
                  </button>
                  <button className="logIn">
                    Log In <i class="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>

              <div className="photo">
                <img
                  src="https://scontent.whatsapp.net/v/t39.8562-34/473006249_1154248172923085_2330753247219957413_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=5MyR1w8M-GQQ7kNvgEZR7Po&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIOazoSzUIva4GlLEkIv7RKMoC9IvwIbDdxs2Wrj2ylKd&oe=67A928FE"
                  alt=""
                />
                <img
                  id="heart"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/326429760_565901131866976_8960223839941330956_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=2WYbGOt-78QQ7kNvgHqQ5X9&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIEJZh2RGib9db8Hew5Wfv0WQb5pSl2viyH9XeyxITvg_&oe=67A93B48"
                  alt=""
                />
                <img
                  id="cup"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/325411784_1246981732900913_178427211297704021_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=yqEFRQe1I8sQ7kNvgGKp263&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaINFL2vc826zP-8UYQ5StrJHL8HM1gDoyGG4ffWXY0r0N&oe=67A91DF5"
                  alt=""
                />
                <img
                  id="voice"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/473840698_925662963021578_7771367673530742224_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=TxrN7xSvH5wQ7kNvgGOHCV9&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIBIjRrDu2igRXZZnEPYR4bGlB7VzLKUugVN-Fj7CECDz&oe=67A91956"
                  alt=""
                />
                <img
                  id="image"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/327713084_566495871797259_1779906837439389762_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=oZjujAfyDe0Q7kNvgE19pp4&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIF4SEMQHCf1OMbDHgFntbnp_J5KnLQyaRW15FTRWAAy1&oe=67A9119B"
                  alt=""
                />
                <img
                  id="emoji"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/331324920_411994007808830_5458286697352087382_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=b_xvmDZtXGcQ7kNvgFX3LJu&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIDU1D4VQR7ckTpP4J9T9WPB0BXhH3v7F1e7JQ3ROZYT4&oe=67A90C2A"
                  alt=""
                />
                <img
                  id="text"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/472781340_974551431241002_2872185955183231825_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=MTrmjEkFhhwQ7kNvgF36Pcz&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=ARkfuUKJA3ePpwo6swCuMLR&oh=01_Q5AaIEXr8tXqzseM8LNYc2nODbRPbmHxNX7aNOl4iNl1JO59&oe=67A91E95"
                  alt=""
                />
              </div>
            </div>

            <div className="text">
              <p>
                * Data charges may apply. Contact your provider for details.
              </p>
            </div>

            <div className="hello">
              <img
                alt="bubbles of text saying hello in different languages with individual users icons"
                class="_9v7q"
                src="https://scontent.whatsapp.net/v/t39.8562-34/472789625_593649246596394_5449176563091833632_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=yZzz32yYjMcQ7kNvgEcrXU6&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AMHPKzhvJIXc9z10LA-fTAt&amp;oh=01_Q5AaIOFE5HiKnn5SX0aUbd2AryhT7jgPcufSGayS11yUWSqM&amp;oe=67AE405E"
                loading="eager"
              />
            </div>

            <div className="text2">
              <p>
                With private messaging and calling, you can be yourself, speak
                freely and feel close to the most important people in your life
                no matter where they are.
              </p>
            </div>

            <div className="hello">
              <img
                alt="bubbles of text saying hello in different languages with individual users icons"
                class="_9v7q"
                src="https://scontent.whatsapp.net/v/t39.8562-34/473083383_985260680138627_8314586055954509622_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=CCRE-G5uQdcQ7kNvgHNqxpW&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AMHPKzhvJIXc9z10LA-fTAt&amp;oh=01_Q5AaIGtJX28Em9d449soXjAv53x9ERaMSB_he4OWI1RRuDiX&amp;oe=67AE3A0E"
                loading="eager"
              />
            </div>

            <div className="section1">
              <div className="text3">
                <p id="section1_p">
                  Never miss a moment with voice and video calls
                </p>
                <p id="callGuide">
                  From a group call to classmates to a quick call with mom, feel
                  like you’re in the same room with voice and video calls.
                </p>
                <a href="https://www.whatsapp.com/stayconnected">
                  <p>Learn more</p>
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>

              <div className="videoPhoto">
                <img
                  src="https://scontent.whatsapp.net/v/t39.8562-34/472770474_998885868928301_7820026646601892106_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=jj4LenuZy-EQ7kNvgElQcMu&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=AMHPKzhvJIXc9z10LA-fTAt&oh=01_Q5AaIHIggeTs1bki2TxU-HSzMg-GZdMVbr3EURCzxAm5_JNf&oe=67AE4B5E"
                  alt=""
                />
              </div>
            </div>

            <div className="section2">
              <div className="chatphoto">
                <img
                  alt="screenshot of end to end encryption screen showing your personal messages and calls are secured"
                  class="_9v7q"
                  src="https://scontent.whatsapp.net/v/t39.8562-34/473060158_1449917663062833_5908605757370656304_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=lf1okz_mfGIQ7kNvgHqrwVw&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AB3h0GjLKh8EpvJieTyfHWt&amp;oh=01_Q5AaIPm1dJGzLKrpqef_euMZw6Su9MLltOP5jJF0Z3KtDQdb&amp;oe=67AE5DD5"
                  loading="eager"
                />
              </div>

              <div className="text4">
                <div id="section1_p" style={{ lineHeight: "0.5" }}>
                  <p style={{ color: "white " }}>Speak</p>
                  <p style={{ color: "#25d366" }}>freely</p>
                </div>
                <p id="callGuide" style={{ color: "white " }}>
                  With end-to-end encryption, your personal messages and calls
                  are secured. Only you and the person you're talking to can
                  read or listen to them, and nobody in between, not even
                  WhatsApp.
                </p>
                <a href="https://www.whatsapp.com/privacy">
                  <p>Learn more</p>
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="section1">
              <div className="text3">
                <p id="section1_p">Keep in touch with your groups</p>
                <p id="callGuide">
                  Whether it's planning an outing with friends or simply staying
                  on top of your family chats, group conversations should feel
                  effortless.
                </p>
                <a href="https://www.whatsapp.com/community">
                  <p>Learn more</p>
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>

              <div className="twoPhoto">
                <div>
                  <img
                    id="photo1"
                    alt="screenshot of whatsapp feature group conversation including photo and message exchange"
                    class="_9v7q"
                    src="https://scontent.whatsapp.net/v/t39.8562-34/473133701_1117947663095492_624070062160080759_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=TJsreMXtYKQQ7kNvgGo4xRi&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AMUvhZTj61EGqm3hhq8KN1a&amp;oh=01_Q5AaIB_Cha9vP5ntHYJTOCuAWe74eeofb5LTKLW7ImSLhNg1&amp;oe=67AE8595"
                    loading="eager"
                  />
                </div>
                <div>
                  <img
                    id="photo2"
                    alt="screenshot of whatsapp group customized to be called best friend group"
                    class="_9v7q"
                    src="https://scontent.whatsapp.net/v/t39.8562-34/473285216_1384759809157265_1212522016876804051_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=XgIXM7HvZDwQ7kNvgFsTtSw&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AMUvhZTj61EGqm3hhq8KN1a&amp;oh=01_Q5AaIOL-N6bR8hQ2ul_YYoc9et36eFTPm4HkJQrZP-ZLdHe1&amp;oe=67AE852D"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <div className="section1">
              <div className="videoPhoto" style={{ display: "block" }}>
                <div>
                  <img
                    id="photo3"
                    src="https://scontent.whatsapp.net/v/t39.8562-34/311869879_1082331725759559_5382136804801289925_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=Lr4UXhdpozsQ7kNvgE64Aq-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=AMUvhZTj61EGqm3hhq8KN1a&oh=01_Q5AaIDplvKmjP7unPuvn14c2FLEJ4bEyW_hkIUOYNDb7sw8d&oe=67AE642F"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    id="photo4"
                    alt="whatsapp user profile image of happy lady laughing"
                    class="_9v7q"
                    src="https://scontent.whatsapp.net/v/t39.8562-34/409964903_7655947307754468_3960711266215354357_n.png?ccb=1-7&amp;_nc_sid=73b08c&amp;_nc_ohc=MHIkf0g_ejwQ7kNvgGkoEwP&amp;_nc_zt=3&amp;_nc_ht=scontent.whatsapp.net&amp;_nc_gid=AMUvhZTj61EGqm3hhq8KN1a&amp;oh=01_Q5AaIHdsxcrMsqgodNkL13PO-1jtQfvrRqriT9LM2o9i49vP&amp;oe=67AE7A00"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="text3" style={{ display: "block" }}>
                <p id="section1_p">Say what you feel</p>
                <p id="callGuide">
                  Express yourself without words. Use stickers and GIFs or share
                  everyday moments on Status. Record a voice message for a quick
                  hello or a longer story.
                </p>
                <a href="https://www.whatsapp.com/expressyourself">
                  <p>Learn more</p>
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="section1">
              <div className="text3">
                <p id="section1_p">Transform your business</p>
                <p id="callGuide">
                  WhatsApp Business helps you reach your customers globally to
                  deliver compelling experiences at scale. Showcase your
                  products and services, increase sales, and build relationships
                  all with WhatsApp.
                </p>

                <a href="https://business.whatsapp.com/">
                  <p>Learn more</p>
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>

              <div className="Photo">
                <img
                  src="https://scontent.whatsapp.net/v/t39.8562-34/329699257_2856843487782508_7800545505417662242_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=AA4iD5x3tr8Q7kNvgG5jips&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=AQxKpwkYm08urJhLyBAt1ax&oh=01_Q5AaIMOuuACe35hJ8vrXFSHbaWNlWya3SjivSMGXVxYuXAke&oe=67B0F91B"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="Guide-Section">
                <Boxes />
              </div>
            </div>
          </div>

          <footer>
            <div className="part1">
              <div className="logo">
                {isSmallScreen ? (
                  ""
                ) : (
                  <a href="https://www.whatsapp.com/">
                    <img
                      src="https://static.whatsapp.net/rsrc.php/yA/r/hbGnlm1gXME.svg"
                      alt="Whatsapp logo"
                    />
                  </a>
                )}

                <button className="download">
                  Download <i class="fa-solid fa-download"></i>
                </button>
              </div>
              <div className="about-section">
                <div className="about">
                  <p>What we do</p>
                  <a src="https://www.whatsapp.com/stayconnected">Features</a>
                  <a src="https://blog.whatsapp.com/">Blog</a>
                  <a src="https://www.whatsapp.com/security">Security</a>
                  <a src="https://business.whatsapp.com/">For Business</a>
                </div>
                <div className="about">
                  <p>Who we are</p>
                  <a src="https://www.whatsapp.com/about">About Us</a>
                  <a src="https://www.whatsapp.com/join">Carrers</a>
                  <a src="https://www.facebook.com/brand/resources/whatsapp/whatsapp-brand">
                    Brand Center
                  </a>
                  <a src="https://www.whatsapp.com/privacy">Privacy</a>
                </div>
                <div className="about">
                  <p>Use Whatsapp</p>
                  <a src="https://www.whatsapp.com/android">Android</a>
                  <a src="https://www.whatsapp.com/download">iPhone</a>
                  <a src="https://www.whatsapp.com/download">Mac/Pc</a>
                  <a src="https://web.whatsapp.com/">Whatsapp Web</a>
                </div>
                <div className="about">
                  <p>Need Help?</p>
                  <a src="https://www.whatsapp.com/contact">Contact Us</a>
                  <a src="https://faq.whatsapp.com/">Help Center</a>
                  <a src="https://www.whatsapp.com/download">Apps</a>
                  <a src="https://www.whatsapp.com/security/advisories">
                    Security/Advisories
                  </a>
                </div>
              </div>
            </div>

            <div className="part2">
              {isSmallScreen ? (
                ""
              ) : (
                <>
                  <div className="copyright">
                    <div>2025 © WhatsApp LLC</div>
                    <div>
                      <a href="https://www.whatsapp.com/legal/">
                        Terms & Privacy Policy
                      </a>
                    </div>
                    <div>
                      <a href="https://www.whatsapp.com/sitemap">Sitemap</a>
                    </div>
                  </div>
                </>
              )}
              <div className="logos">
                <a href="https://x.com/whatsapp">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAuerig2N-RZWJT8x75V9yw">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/whatsapp/?hl=en">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064758844406">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <Lang />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
