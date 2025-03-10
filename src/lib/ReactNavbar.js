import React, { useState, useRef, Fragment, useEffect } from "react";
const Link = ({ LinkTag, children, ...props }) => {
  if (LinkTag) return <LinkTag {...props}>{children}</LinkTag>;
  return React.createElement(LinkTag ?? "a", props, children);
};
const ReactNavbar = ({
  burgerColor = "black",
  burgerColorHover = burgerColor,
  navColor1 = "rgb(35, 35, 35)",
  navColor2 = navColor1,
  navColor3 = navColor2,
  navColor4 = navColor3,
  logo,
  logoWidth = "100px",
  logoHeight = "unset",
  logoHoverSize = "15px",
  logoHoverColor = "green",
  logoTransition = 0.5,
  logoAnimationTime = 1,

  nav1FlexDirection = "row",
  nav2FlexDirection = "row",
  nav3FlexDirection = "row",
  nav4FlexDirection = "row",

  nav1alignItems = "center",
  nav1justifyContent = "center",
  nav2alignItems = "center",
  nav2justifyContent = "center",
  nav3alignItems = "center",
  nav3justifyContent = "center",
  nav4alignItems = "center",
  nav4justifyContent = "center",

  nav1Transition = 0.4,
  nav2Transition = nav1Transition + 0.4,
  nav3Transition = nav2Transition + 0.4,
  nav4Transition = nav3Transition + 0.4,

  LinkTag,

  link1Text = "Text 1",
  link2Text = "Text 2",
  link3Text = "Text 3",
  link4Text = "Text 4",
  link1Url = "/text1",
  link2Url = "/text2",
  link3Url = "/text3",
  link4Url = "/text4",
  link1Size = "1vmax",
  link2Size = link1Size,
  link3Size = link2Size,
  link4Size = link3Size,
  link1Family = "Roboto",
  link2Family = link1Family,
  link3Family = link2Family,
  link4Family = link3Family,
  link1Color = "black",
  link2Color = link1Color,
  link3Color = link2Color,
  link4Color = link3Color,

  link1BackgroundColor = "",
  link2BackgroundColor = link1BackgroundColor,
  link3BackgroundColor = link2BackgroundColor,
  link4BackgroundColor = link3BackgroundColor,

  link1ColorHover = link1Color,
  link2ColorHover = link1ColorHover,
  link3ColorHover = link2ColorHover,
  link4ColorHover = link3ColorHover,
  link1Decoration = "none",
  link2Decoration = link1Decoration,
  link3Decoration = link2Decoration,
  link4Decoration = link3Decoration,
  link1Margin = "0",
  link2Margin = link1Margin,
  link3Margin = link2Margin,
  link4Margin = link3Margin,
  link1Padding = "0",
  link2Padding = link1Padding,
  link3Padding = link2Padding,
  link4Padding = link3Padding,
  link1Border = "none",
  link2Border = link1Border,
  link3Border = link2Border,
  link4Border = link3Border,
  link1Transition = 0.5,
  link2Transition = link1Transition,
  link3Transition = link2Transition,
  link4Transition = link3Transition,
  link1AnimationTime = 1.5,
  link2AnimationTime = link1AnimationTime + 0.5,
  link3AnimationTime = link2AnimationTime + 0.5,
  link4AnimationTime = link3AnimationTime + 0.5,

  searchIcon = false,
  SearchIconElement,
  searchIconMargin = "0",
  searchIconUrl = "/Search",
  searchIconSize = "2vmax",
  searchIconColor = "white",
  searchIconColorHover = searchIconColor,
  searchIconTransition = 0.5,
  searchIconAnimationTime = 2,

  cartIcon = false,
  CartIconElement,
  cartIconMargin = "0",
  cartIconUrl = "/Cart",
  cartIconSize = "2vmax",
  cartIconColor = "white",
  cartIconColorHover = cartIconColor,
  cartIconTransition = 0.5,
  cartIconAnimationTime = searchIconAnimationTime + 0.5,

  profileIcon = false,
  ProfileIconElement,
  profileIconMargin = "0",
  profileIconUrl = "/Account",
  profileIconSize = "2.5vmax",
  profileIconColor = "white",
  profileIconColorHover = profileIconColor,
  profileIconTransition = 0.5,
  profileIconAnimationTime = cartIconAnimationTime + 0.5,
}) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menuBurgerItem1 = useRef(null);
  const menuBurgerItem2 = useRef(null);
  const menuBurgerItem3 = useRef(null);
  const menuBurger = useRef(null);
  const logoRef = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const menuToggleHandler = () => {
    if (menuToggle) {
      menuBurgerItem1.current.classList.remove("menuBurgerItem1");
      menuBurgerItem2.current.classList.remove("menuBurgerItem2");
      menuBurgerItem3.current.classList.remove("menuBurgerItem3");
      return setMenuToggle(false);
    }
    menuBurgerItem1.current.classList.add("menuBurgerItem1");
    menuBurgerItem2.current.classList.add("menuBurgerItem2");
    menuBurgerItem3.current.classList.add("menuBurgerItem3");
    setMenuToggle(true);
  };

  const closeBarOnClick = () => {
    menuBurgerItem1.current.classList.remove("menuBurgerItem1");
    menuBurgerItem2.current.classList.remove("menuBurgerItem2");
    menuBurgerItem3.current.classList.remove("menuBurgerItem3");
    return setMenuToggle(false);
  };

  useEffect(() => {
    const handleColor = (element, color) => {
      element.style.color = color;
    };

    const handleBackgroundColor = (element, color) => {
      element.style.backgroundColor = color;
    };
    const handleFilter = (element, filter) => {
      element.style.filter = filter;
    };

    menuBurger.current.addEventListener("mouseover", () => {
      handleBackgroundColor(menuBurgerItem1.current, burgerColorHover);
      handleBackgroundColor(menuBurgerItem2.current, burgerColorHover);
      handleBackgroundColor(menuBurgerItem3.current, burgerColorHover);
    });
    menuBurger.current.addEventListener("mouseleave", () => {
      handleBackgroundColor(menuBurgerItem1.current, burgerColor);
      handleBackgroundColor(menuBurgerItem2.current, burgerColor);
      handleBackgroundColor(menuBurgerItem3.current, burgerColor);
    });

    logoRef.current.addEventListener("mouseover", () => {
      handleFilter(logoRef.current, `drop-shadow(0 0 ${logoHoverSize} ${logoHoverColor})`);
    });

    logoRef.current.addEventListener("mouseleave", () => {
      handleFilter(logoRef.current, `none`);
    });

    link1.current.addEventListener("mouseover", () => {
      handleColor(link1.current, link1ColorHover);
    });

    link1.current.addEventListener("mouseleave", () => {
      handleColor(link1.current, link1Color);
    });

    link2.current.addEventListener("mouseover", () => {
      handleColor(link2.current, link2ColorHover);
    });

    link2.current.addEventListener("mouseleave", () => {
      handleColor(link2.current, link2Color);
    });

    link3.current.addEventListener("mouseover", () => {
      handleColor(link3.current, link3ColorHover);
    });

    link3.current.addEventListener("mouseleave", () => {
      handleColor(link3.current, link3Color);
    });

    link4.current.addEventListener("mouseover", () => {
      handleColor(link4.current, link4ColorHover);
    });

    link4.current.addEventListener("mouseleave", () => {
      handleColor(link4.current, link4Color);
    });

    const search = document.querySelector("#searchIcon");
    const cart = document.querySelector("#cartIcon");
    const profile = document.querySelector("#profileIcon");

    if (searchIcon) {
      search.addEventListener("mouseover", () => {
        handleColor(search, searchIconColorHover);
      });

      search.addEventListener("mouseleave", () => {
        handleColor(search, searchIconColor);
      });
    }

    if (cartIcon) {
      cart.addEventListener("mouseover", () => {
        handleColor(cart, cartIconColorHover);
      });

      cart.addEventListener("mouseleave", () => {
        handleColor(cart, cartIconColor);
      });
    }

    if (profileIcon) {
      profile.addEventListener("mouseover", () => {
        handleColor(profile, profileIconColorHover);
      });

      profile.addEventListener("mouseleave", () => {
        handleColor(profile, profileIconColor);
      });
    }
  }, [
    menuBurger.current,
    menuBurgerItem1.current,
    menuBurgerItem2.current,
    menuBurgerItem3.current,
    burgerColor,
    burgerColorHover,
    logoRef.current,
    logoHoverSize,
    logoHoverColor,
    link1.current,
    link1ColorHover,
    link1Color,
    link2.current,
    link2ColorHover,
    link2Color,
    link3.current,
    link3ColorHover,
    link3Color,
    link4.current,
    link4ColorHover,
    link4Color,
    searchIcon,
    cartIcon,
    profileIcon,
    searchIconColorHover,
    searchIconColor,
    cartIconColorHover,
    cartIconColor,
    profileIconColorHover,
    profileIconColor,
  ]);

  return (
    <Fragment>
      <div className="menuBurger" ref={menuBurger} onClick={menuToggleHandler}>
        <div
          ref={menuBurgerItem1}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
        <div
          ref={menuBurgerItem2}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
        <div
          ref={menuBurgerItem3}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
      </div>

      <div className="nav">
        {/* --------------------NAV PART 1-------------------------------- */}
        <div
          className="nav1"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: navColor1,
            flexDirection: nav1FlexDirection,
            alignItems: nav1alignItems,
            justifyContent: nav1justifyContent,
            transition: `all ${nav1Transition}s`,
          }}
        >
          <img
            className="logoReactNavbar"
            src={logo}
            style={{
              cursor: "pointer",
              width: logoWidth,
              height: logoHeight,
              transition: `all ${logoTransition}s`,
              animation: menuToggle
                ? `LogoleftIn ${logoAnimationTime}s`
                : `LogoleftOut ${logoAnimationTime}s`,
            }}
            ref={logoRef}
            alt="Not Passed"
          />
        </div>

        {/* --------------------NAV PART 2-------------------------------- */}
        <div
          className="nav2"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: navColor2,
            flexDirection: nav2FlexDirection,
            alignItems: nav2alignItems,
            justifyContent: nav2justifyContent,
            transition: `all ${nav2Transition}s`,
          }}
        >
          <Link
            className="linksReactNavbar"
            ref={link1}
            LinkTag={LinkTag}
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            href={link1Url}
            onClick={closeBarOnClick}
          >
            {link1Text}
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link2}
            LinkTag={LinkTag}
            style={{
              fontSize: link2Size,
              fontFamily: link2Family,
              color: link2Color,
              backgroundColor: link2BackgroundColor,
              textDecoration: link2Decoration,
              margin: link2Margin,
              padding: link2Padding,
              border: link2Border,
              transition: `all ${link2Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link2AnimationTime}s`
                : `LinkOut ${link2AnimationTime}s`,
            }}
            href={link2Url}
            onClick={closeBarOnClick}
          >
            {link2Text}
          </Link>
        </div>

        {/* --------------------NAV PART 3-------------------------------- */}
        <div
          className="nav3"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: navColor3,
            flexDirection: nav3FlexDirection,
            alignItems: nav3alignItems,
            justifyContent: nav3justifyContent,
            transition: `all ${nav3Transition}s`,
          }}
        >
          <Link
            LinkTag={LinkTag}
            className="linksReactNavbar"
            ref={link3}
            style={{
              fontSize: link3Size,
              fontFamily: link3Family,
              color: link3Color,
              backgroundColor: link3BackgroundColor,
              textDecoration: link3Decoration,
              margin: link3Margin,
              padding: link3Padding,
              border: link3Border,
              transition: `all ${link3Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link3AnimationTime}s`
                : `LinkOut ${link3AnimationTime}s`,
            }}
            href={link3Url}
            onClick={closeBarOnClick}
          >
            {link3Text}
          </Link>
          <Link
            LinkTag={LinkTag}
            className="linksReactNavbar"
            ref={link4}
            style={{
              fontSize: link4Size,
              fontFamily: link4Family,
              color: link4Color,
              backgroundColor: link4BackgroundColor,
              textDecoration: link4Decoration,
              margin: link4Margin,
              padding: link4Padding,
              border: link4Border,
              transition: `all ${link4Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link4AnimationTime}s`
                : `LinkOut ${link4AnimationTime}s`,
            }}
            href={link4Url}
            onClick={closeBarOnClick}
          >
            {link4Text}
          </Link>
        </div>

        {/* --------------------NAV PART 4-------------------------------- */}
        <div
          className="nav4"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: navColor4,
            flexDirection: nav4FlexDirection,
            alignItems: nav4alignItems,
            justifyContent: nav4justifyContent,
            transition: `all ${nav4Transition}s`,
          }}
        >
          {searchIcon ? (
            <Link
              LinkTag={LinkTag}
              href={searchIconUrl}
              onClick={closeBarOnClick}
            >
              <SearchIconElement
                id="searchIcon"
                style={{
                  transition: `all ${searchIconTransition}s`,
                  margin: searchIconMargin,
                  animation: menuToggle
                    ? `IconIn ${searchIconAnimationTime}s`
                    : `IconOut ${searchIconAnimationTime}s`,
                }}
                fontSize={searchIconSize}
                color={searchIconColor}
              />
            </Link>
          ) : (
            ""
          )}
          {cartIcon ? (
            <Link
              LinkTag={LinkTag}
              href={cartIconUrl}
              onClick={closeBarOnClick}
            >
              <CartIconElement
                id="cartIcon"
                style={{
                  transition: `all ${cartIconTransition}s`,
                  margin: cartIconMargin,
                  animation: menuToggle
                    ? `IconIn ${cartIconAnimationTime}s`
                    : `IconOut ${cartIconAnimationTime}s`,
                }}
                fontSize={cartIconSize}
                color={cartIconColor}
              />
            </Link>
          ) : (
            ""
          )}
          {profileIcon ? (
            <Link
              LinkTag={LinkTag}
              href={profileIconUrl}
              onClick={closeBarOnClick}
            >
              <ProfileIconElement
                id="profileIcon"
                style={{
                  transition: `all ${profileIconTransition}s`,
                  margin: profileIconMargin,
                  animation: menuToggle
                    ? `IconIn ${profileIconAnimationTime}s`
                    : `IconOut ${profileIconAnimationTime}s`,
                }}
                fontSize={profileIconSize}
                color={profileIconColor}
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ReactNavbar;
