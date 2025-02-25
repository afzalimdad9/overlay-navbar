"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ReactNavbar.min.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReactNavbar = function ReactNavbar(_ref) {
  var _ref$burgerColor = _ref.burgerColor,
    burgerColor = _ref$burgerColor === void 0 ? "black" : _ref$burgerColor,
    _ref$burgerColorHover = _ref.burgerColorHover,
    burgerColorHover = _ref$burgerColorHover === void 0 ? burgerColor : _ref$burgerColorHover,
    _ref$navColor = _ref.navColor1,
    navColor1 = _ref$navColor === void 0 ? "rgb(35, 35, 35)" : _ref$navColor,
    _ref$navColor2 = _ref.navColor2,
    navColor2 = _ref$navColor2 === void 0 ? navColor1 : _ref$navColor2,
    _ref$navColor3 = _ref.navColor3,
    navColor3 = _ref$navColor3 === void 0 ? navColor2 : _ref$navColor3,
    _ref$navColor4 = _ref.navColor4,
    navColor4 = _ref$navColor4 === void 0 ? navColor3 : _ref$navColor4,
    logo = _ref.logo,
    _ref$logoWidth = _ref.logoWidth,
    logoWidth = _ref$logoWidth === void 0 ? "100px" : _ref$logoWidth,
    _ref$logoHeight = _ref.logoHeight,
    logoHeight = _ref$logoHeight === void 0 ? "unset" : _ref$logoHeight,
    _ref$logoHoverSize = _ref.logoHoverSize,
    logoHoverSize = _ref$logoHoverSize === void 0 ? "15px" : _ref$logoHoverSize,
    _ref$logoHoverColor = _ref.logoHoverColor,
    logoHoverColor = _ref$logoHoverColor === void 0 ? "green" : _ref$logoHoverColor,
    _ref$logoTransition = _ref.logoTransition,
    logoTransition = _ref$logoTransition === void 0 ? 0.5 : _ref$logoTransition,
    _ref$logoAnimationTim = _ref.logoAnimationTime,
    logoAnimationTime = _ref$logoAnimationTim === void 0 ? 1 : _ref$logoAnimationTim,
    _ref$nav1FlexDirectio = _ref.nav1FlexDirection,
    nav1FlexDirection = _ref$nav1FlexDirectio === void 0 ? "row" : _ref$nav1FlexDirectio,
    _ref$nav2FlexDirectio = _ref.nav2FlexDirection,
    nav2FlexDirection = _ref$nav2FlexDirectio === void 0 ? "row" : _ref$nav2FlexDirectio,
    _ref$nav3FlexDirectio = _ref.nav3FlexDirection,
    nav3FlexDirection = _ref$nav3FlexDirectio === void 0 ? "row" : _ref$nav3FlexDirectio,
    _ref$nav4FlexDirectio = _ref.nav4FlexDirection,
    nav4FlexDirection = _ref$nav4FlexDirectio === void 0 ? "row" : _ref$nav4FlexDirectio,
    _ref$nav1alignItems = _ref.nav1alignItems,
    nav1alignItems = _ref$nav1alignItems === void 0 ? "center" : _ref$nav1alignItems,
    _ref$nav1justifyConte = _ref.nav1justifyContent,
    nav1justifyContent = _ref$nav1justifyConte === void 0 ? "center" : _ref$nav1justifyConte,
    _ref$nav2alignItems = _ref.nav2alignItems,
    nav2alignItems = _ref$nav2alignItems === void 0 ? "center" : _ref$nav2alignItems,
    _ref$nav2justifyConte = _ref.nav2justifyContent,
    nav2justifyContent = _ref$nav2justifyConte === void 0 ? "center" : _ref$nav2justifyConte,
    _ref$nav3alignItems = _ref.nav3alignItems,
    nav3alignItems = _ref$nav3alignItems === void 0 ? "center" : _ref$nav3alignItems,
    _ref$nav3justifyConte = _ref.nav3justifyContent,
    nav3justifyContent = _ref$nav3justifyConte === void 0 ? "center" : _ref$nav3justifyConte,
    _ref$nav4alignItems = _ref.nav4alignItems,
    nav4alignItems = _ref$nav4alignItems === void 0 ? "center" : _ref$nav4alignItems,
    _ref$nav4justifyConte = _ref.nav4justifyContent,
    nav4justifyContent = _ref$nav4justifyConte === void 0 ? "center" : _ref$nav4justifyConte,
    _ref$nav1Transition = _ref.nav1Transition,
    nav1Transition = _ref$nav1Transition === void 0 ? 0.4 : _ref$nav1Transition,
    _ref$nav2Transition = _ref.nav2Transition,
    nav2Transition = _ref$nav2Transition === void 0 ? nav1Transition + 0.4 : _ref$nav2Transition,
    _ref$nav3Transition = _ref.nav3Transition,
    nav3Transition = _ref$nav3Transition === void 0 ? nav2Transition + 0.4 : _ref$nav3Transition,
    _ref$nav4Transition = _ref.nav4Transition,
    nav4Transition = _ref$nav4Transition === void 0 ? nav3Transition + 0.4 : _ref$nav4Transition,
    _ref$Link = _ref.Link,
    Link = _ref$Link === void 0 ? /*#__PURE__*/_react["default"].createElement("a") : _ref$Link,
    _ref$link1Text = _ref.link1Text,
    link1Text = _ref$link1Text === void 0 ? "Text 1" : _ref$link1Text,
    _ref$link2Text = _ref.link2Text,
    link2Text = _ref$link2Text === void 0 ? "Text 2" : _ref$link2Text,
    _ref$link3Text = _ref.link3Text,
    link3Text = _ref$link3Text === void 0 ? "Text 3" : _ref$link3Text,
    _ref$link4Text = _ref.link4Text,
    link4Text = _ref$link4Text === void 0 ? "Text 4" : _ref$link4Text,
    _ref$link1Url = _ref.link1Url,
    link1Url = _ref$link1Url === void 0 ? "/text1" : _ref$link1Url,
    _ref$link2Url = _ref.link2Url,
    link2Url = _ref$link2Url === void 0 ? "/text2" : _ref$link2Url,
    _ref$link3Url = _ref.link3Url,
    link3Url = _ref$link3Url === void 0 ? "/text3" : _ref$link3Url,
    _ref$link4Url = _ref.link4Url,
    link4Url = _ref$link4Url === void 0 ? "/text4" : _ref$link4Url,
    _ref$link1Size = _ref.link1Size,
    link1Size = _ref$link1Size === void 0 ? "1vmax" : _ref$link1Size,
    _ref$link2Size = _ref.link2Size,
    link2Size = _ref$link2Size === void 0 ? link1Size : _ref$link2Size,
    _ref$link3Size = _ref.link3Size,
    link3Size = _ref$link3Size === void 0 ? link2Size : _ref$link3Size,
    _ref$link4Size = _ref.link4Size,
    link4Size = _ref$link4Size === void 0 ? link3Size : _ref$link4Size,
    _ref$link1Family = _ref.link1Family,
    link1Family = _ref$link1Family === void 0 ? "Roboto" : _ref$link1Family,
    _ref$link2Family = _ref.link2Family,
    link2Family = _ref$link2Family === void 0 ? link1Family : _ref$link2Family,
    _ref$link3Family = _ref.link3Family,
    link3Family = _ref$link3Family === void 0 ? link2Family : _ref$link3Family,
    _ref$link4Family = _ref.link4Family,
    link4Family = _ref$link4Family === void 0 ? link3Family : _ref$link4Family,
    _ref$link1Color = _ref.link1Color,
    link1Color = _ref$link1Color === void 0 ? "black" : _ref$link1Color,
    _ref$link2Color = _ref.link2Color,
    link2Color = _ref$link2Color === void 0 ? link1Color : _ref$link2Color,
    _ref$link3Color = _ref.link3Color,
    link3Color = _ref$link3Color === void 0 ? link2Color : _ref$link3Color,
    _ref$link4Color = _ref.link4Color,
    link4Color = _ref$link4Color === void 0 ? link3Color : _ref$link4Color,
    _ref$link1BackgroundC = _ref.link1BackgroundColor,
    link1BackgroundColor = _ref$link1BackgroundC === void 0 ? "" : _ref$link1BackgroundC,
    _ref$link2BackgroundC = _ref.link2BackgroundColor,
    link2BackgroundColor = _ref$link2BackgroundC === void 0 ? link1BackgroundColor : _ref$link2BackgroundC,
    _ref$link3BackgroundC = _ref.link3BackgroundColor,
    link3BackgroundColor = _ref$link3BackgroundC === void 0 ? link2BackgroundColor : _ref$link3BackgroundC,
    _ref$link4BackgroundC = _ref.link4BackgroundColor,
    link4BackgroundColor = _ref$link4BackgroundC === void 0 ? link3BackgroundColor : _ref$link4BackgroundC,
    _ref$link1ColorHover = _ref.link1ColorHover,
    link1ColorHover = _ref$link1ColorHover === void 0 ? link1Color : _ref$link1ColorHover,
    _ref$link2ColorHover = _ref.link2ColorHover,
    link2ColorHover = _ref$link2ColorHover === void 0 ? link1ColorHover : _ref$link2ColorHover,
    _ref$link3ColorHover = _ref.link3ColorHover,
    link3ColorHover = _ref$link3ColorHover === void 0 ? link2ColorHover : _ref$link3ColorHover,
    _ref$link4ColorHover = _ref.link4ColorHover,
    link4ColorHover = _ref$link4ColorHover === void 0 ? link3ColorHover : _ref$link4ColorHover,
    _ref$link1Decoration = _ref.link1Decoration,
    link1Decoration = _ref$link1Decoration === void 0 ? "none" : _ref$link1Decoration,
    _ref$link2Decoration = _ref.link2Decoration,
    link2Decoration = _ref$link2Decoration === void 0 ? link1Decoration : _ref$link2Decoration,
    _ref$link3Decoration = _ref.link3Decoration,
    link3Decoration = _ref$link3Decoration === void 0 ? link2Decoration : _ref$link3Decoration,
    _ref$link4Decoration = _ref.link4Decoration,
    link4Decoration = _ref$link4Decoration === void 0 ? link3Decoration : _ref$link4Decoration,
    _ref$link1Margin = _ref.link1Margin,
    link1Margin = _ref$link1Margin === void 0 ? "0" : _ref$link1Margin,
    _ref$link2Margin = _ref.link2Margin,
    link2Margin = _ref$link2Margin === void 0 ? link1Margin : _ref$link2Margin,
    _ref$link3Margin = _ref.link3Margin,
    link3Margin = _ref$link3Margin === void 0 ? link2Margin : _ref$link3Margin,
    _ref$link4Margin = _ref.link4Margin,
    link4Margin = _ref$link4Margin === void 0 ? link3Margin : _ref$link4Margin,
    _ref$link1Padding = _ref.link1Padding,
    link1Padding = _ref$link1Padding === void 0 ? "0" : _ref$link1Padding,
    _ref$link2Padding = _ref.link2Padding,
    link2Padding = _ref$link2Padding === void 0 ? link1Padding : _ref$link2Padding,
    _ref$link3Padding = _ref.link3Padding,
    link3Padding = _ref$link3Padding === void 0 ? link2Padding : _ref$link3Padding,
    _ref$link4Padding = _ref.link4Padding,
    link4Padding = _ref$link4Padding === void 0 ? link3Padding : _ref$link4Padding,
    _ref$link1Border = _ref.link1Border,
    link1Border = _ref$link1Border === void 0 ? "none" : _ref$link1Border,
    _ref$link2Border = _ref.link2Border,
    link2Border = _ref$link2Border === void 0 ? link1Border : _ref$link2Border,
    _ref$link3Border = _ref.link3Border,
    link3Border = _ref$link3Border === void 0 ? link2Border : _ref$link3Border,
    _ref$link4Border = _ref.link4Border,
    link4Border = _ref$link4Border === void 0 ? link3Border : _ref$link4Border,
    _ref$link1Transition = _ref.link1Transition,
    link1Transition = _ref$link1Transition === void 0 ? 0.5 : _ref$link1Transition,
    _ref$link2Transition = _ref.link2Transition,
    link2Transition = _ref$link2Transition === void 0 ? link1Transition : _ref$link2Transition,
    _ref$link3Transition = _ref.link3Transition,
    link3Transition = _ref$link3Transition === void 0 ? link2Transition : _ref$link3Transition,
    _ref$link4Transition = _ref.link4Transition,
    link4Transition = _ref$link4Transition === void 0 ? link3Transition : _ref$link4Transition,
    _ref$link1AnimationTi = _ref.link1AnimationTime,
    link1AnimationTime = _ref$link1AnimationTi === void 0 ? 1.5 : _ref$link1AnimationTi,
    _ref$link2AnimationTi = _ref.link2AnimationTime,
    link2AnimationTime = _ref$link2AnimationTi === void 0 ? link1AnimationTime + 0.5 : _ref$link2AnimationTi,
    _ref$link3AnimationTi = _ref.link3AnimationTime,
    link3AnimationTime = _ref$link3AnimationTi === void 0 ? link2AnimationTime + 0.5 : _ref$link3AnimationTi,
    _ref$link4AnimationTi = _ref.link4AnimationTime,
    link4AnimationTime = _ref$link4AnimationTi === void 0 ? link3AnimationTime + 0.5 : _ref$link4AnimationTi,
    _ref$searchIcon = _ref.searchIcon,
    searchIcon = _ref$searchIcon === void 0 ? false : _ref$searchIcon,
    SearchIconElement = _ref.SearchIconElement,
    _ref$searchIconMargin = _ref.searchIconMargin,
    searchIconMargin = _ref$searchIconMargin === void 0 ? "0" : _ref$searchIconMargin,
    _ref$searchIconUrl = _ref.searchIconUrl,
    searchIconUrl = _ref$searchIconUrl === void 0 ? "/Search" : _ref$searchIconUrl,
    _ref$searchIconSize = _ref.searchIconSize,
    searchIconSize = _ref$searchIconSize === void 0 ? "2vmax" : _ref$searchIconSize,
    _ref$searchIconColor = _ref.searchIconColor,
    searchIconColor = _ref$searchIconColor === void 0 ? "white" : _ref$searchIconColor,
    _ref$searchIconColorH = _ref.searchIconColorHover,
    searchIconColorHover = _ref$searchIconColorH === void 0 ? searchIconColor : _ref$searchIconColorH,
    _ref$searchIconTransi = _ref.searchIconTransition,
    searchIconTransition = _ref$searchIconTransi === void 0 ? 0.5 : _ref$searchIconTransi,
    _ref$searchIconAnimat = _ref.searchIconAnimationTime,
    searchIconAnimationTime = _ref$searchIconAnimat === void 0 ? 2 : _ref$searchIconAnimat,
    _ref$cartIcon = _ref.cartIcon,
    cartIcon = _ref$cartIcon === void 0 ? false : _ref$cartIcon,
    CartIconElement = _ref.CartIconElement,
    _ref$cartIconMargin = _ref.cartIconMargin,
    cartIconMargin = _ref$cartIconMargin === void 0 ? "0" : _ref$cartIconMargin,
    _ref$cartIconUrl = _ref.cartIconUrl,
    cartIconUrl = _ref$cartIconUrl === void 0 ? "/Cart" : _ref$cartIconUrl,
    _ref$cartIconSize = _ref.cartIconSize,
    cartIconSize = _ref$cartIconSize === void 0 ? "2vmax" : _ref$cartIconSize,
    _ref$cartIconColor = _ref.cartIconColor,
    cartIconColor = _ref$cartIconColor === void 0 ? "white" : _ref$cartIconColor,
    _ref$cartIconColorHov = _ref.cartIconColorHover,
    cartIconColorHover = _ref$cartIconColorHov === void 0 ? cartIconColor : _ref$cartIconColorHov,
    _ref$cartIconTransiti = _ref.cartIconTransition,
    cartIconTransition = _ref$cartIconTransiti === void 0 ? 0.5 : _ref$cartIconTransiti,
    _ref$cartIconAnimatio = _ref.cartIconAnimationTime,
    cartIconAnimationTime = _ref$cartIconAnimatio === void 0 ? searchIconAnimationTime + 0.5 : _ref$cartIconAnimatio,
    _ref$profileIcon = _ref.profileIcon,
    profileIcon = _ref$profileIcon === void 0 ? false : _ref$profileIcon,
    ProfileIconElement = _ref.ProfileIconElement,
    _ref$profileIconMargi = _ref.profileIconMargin,
    profileIconMargin = _ref$profileIconMargi === void 0 ? "0" : _ref$profileIconMargi,
    _ref$profileIconUrl = _ref.profileIconUrl,
    profileIconUrl = _ref$profileIconUrl === void 0 ? "/Account" : _ref$profileIconUrl,
    _ref$profileIconSize = _ref.profileIconSize,
    profileIconSize = _ref$profileIconSize === void 0 ? "2.5vmax" : _ref$profileIconSize,
    _ref$profileIconColor = _ref.profileIconColor,
    profileIconColor = _ref$profileIconColor === void 0 ? "white" : _ref$profileIconColor,
    _ref$profileIconColor2 = _ref.profileIconColorHover,
    profileIconColorHover = _ref$profileIconColor2 === void 0 ? profileIconColor : _ref$profileIconColor2,
    _ref$profileIconTrans = _ref.profileIconTransition,
    profileIconTransition = _ref$profileIconTrans === void 0 ? 0.5 : _ref$profileIconTrans,
    _ref$profileIconAnima = _ref.profileIconAnimationTime,
    profileIconAnimationTime = _ref$profileIconAnima === void 0 ? cartIconAnimationTime + 0.5 : _ref$profileIconAnima;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuToggle = _useState2[0],
    setMenuToggle = _useState2[1];
  var menuBurgerItem1 = (0, _react.useRef)(null);
  var menuBurgerItem2 = (0, _react.useRef)(null);
  var menuBurgerItem3 = (0, _react.useRef)(null);
  var menuBurger = (0, _react.useRef)(null);
  var logoRef = (0, _react.useRef)(null);
  var link1 = (0, _react.useRef)(null);
  var link2 = (0, _react.useRef)(null);
  var link3 = (0, _react.useRef)(null);
  var link4 = (0, _react.useRef)(null);
  var menuToggleHandler = function menuToggleHandler() {
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
  var closeBarOnClick = function closeBarOnClick() {
    menuBurgerItem1.current.classList.remove("menuBurgerItem1");
    menuBurgerItem2.current.classList.remove("menuBurgerItem2");
    menuBurgerItem3.current.classList.remove("menuBurgerItem3");
    return setMenuToggle(false);
  };
  (0, _react.useEffect)(function () {
    menuBurger.current.addEventListener("mouseover", function () {
      menuBurgerItem1.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem2.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem3.current.style.backgroundColor = burgerColorHover;
    });
    menuBurger.current.addEventListener("mouseleave", function () {
      menuBurgerItem1.current.style.backgroundColor = burgerColor;
      menuBurgerItem2.current.style.backgroundColor = burgerColor;
      menuBurgerItem3.current.style.backgroundColor = burgerColor;
    });
    logoRef.current.addEventListener("mouseover", function () {
      logoRef.current.style.filter = "drop-shadow(0 0 ".concat(logoHoverSize, " ").concat(logoHoverColor, ")");
    });
    logoRef.current.addEventListener("mouseleave", function () {
      logoRef.current.style.filter = "none";
    });
    link1.current.addEventListener("mouseover", function () {
      link1.current.style.color = link1ColorHover;
    });
    link1.current.addEventListener("mouseleave", function () {
      link1.current.style.color = link1Color;
    });
    link2.current.addEventListener("mouseover", function () {
      link2.current.style.color = link2ColorHover;
    });
    link2.current.addEventListener("mouseleave", function () {
      link2.current.style.color = link2Color;
    });
    link3.current.addEventListener("mouseover", function () {
      link3.current.style.color = link3ColorHover;
    });
    link3.current.addEventListener("mouseleave", function () {
      link3.current.style.color = link3Color;
    });
    link4.current.addEventListener("mouseover", function () {
      link4.current.style.color = link4ColorHover;
    });
    link4.current.addEventListener("mouseleave", function () {
      link4.current.style.color = link4Color;
    });
    var search = document.querySelector("#searchIcon");
    var cart = document.querySelector("#cartIcon");
    var profile = document.querySelector("#profileIcon");
    if (searchIcon) {
      search.addEventListener("mouseover", function () {
        search.style.color = searchIconColorHover;
      });
      search.addEventListener("mouseleave", function () {
        search.style.color = searchIconColor;
      });
    }
    if (cartIcon) {
      cart.addEventListener("mouseover", function () {
        cart.style.color = cartIconColorHover;
      });
      cart.addEventListener("mouseleave", function () {
        cart.style.color = cartIconColor;
      });
    }
    if (profileIcon) {
      profile.addEventListener("mouseover", function () {
        profile.style.color = profileIconColorHover;
      });
      profile.addEventListener("mouseleave", function () {
        profile.style.color = profileIconColor;
      });
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "menuBurger",
    ref: menuBurger,
    onClick: menuToggleHandler
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: menuBurgerItem1,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: menuBurgerItem2,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: menuBurgerItem3,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav1",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor1,
      flexDirection: nav1FlexDirection,
      alignItems: nav1alignItems,
      justifyContent: nav1justifyContent,
      transition: "all ".concat(nav1Transition, "s")
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "logoReactNavbar",
    src: logo,
    style: {
      cursor: "pointer",
      width: logoWidth,
      height: logoHeight,
      transition: "all ".concat(logoTransition, "s"),
      animation: menuToggle ? "LogoleftIn ".concat(logoAnimationTime, "s") : "LogoleftOut ".concat(logoAnimationTime, "s")
    },
    ref: logoRef,
    alt: "Not Passed"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav2",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor2,
      flexDirection: nav2FlexDirection,
      alignItems: nav2alignItems,
      justifyContent: nav2justifyContent,
      transition: "all ".concat(nav2Transition, "s")
    }
  }, /*#__PURE__*/_react["default"].createElement(Link, {
    className: "linksReactNavbar",
    ref: link1,
    style: {
      fontSize: link1Size,
      fontFamily: link1Family,
      color: link1Color,
      backgroundColor: link1BackgroundColor,
      textDecoration: link1Decoration,
      margin: link1Margin,
      padding: link1Padding,
      border: link1Border,
      transition: "all ".concat(link1Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link1AnimationTime, "s") : "LinkOut ".concat(link1AnimationTime, "s")
    },
    href: link1Url,
    onClick: closeBarOnClick
  }, link1Text), /*#__PURE__*/_react["default"].createElement(Link, {
    className: "linksReactNavbar",
    ref: link2,
    style: {
      fontSize: link2Size,
      fontFamily: link2Family,
      color: link2Color,
      backgroundColor: link2BackgroundColor,
      textDecoration: link2Decoration,
      margin: link2Margin,
      padding: link2Padding,
      border: link2Border,
      transition: "all ".concat(link2Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link2AnimationTime, "s") : "LinkOut ".concat(link2AnimationTime, "s")
    },
    href: link2Url,
    onClick: closeBarOnClick
  }, link2Text)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav3",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor3,
      flexDirection: nav3FlexDirection,
      alignItems: nav3alignItems,
      justifyContent: nav3justifyContent,
      transition: "all ".concat(nav3Transition, "s")
    }
  }, /*#__PURE__*/_react["default"].createElement(Link, {
    className: "linksReactNavbar",
    ref: link3,
    style: {
      fontSize: link3Size,
      fontFamily: link3Family,
      color: link3Color,
      backgroundColor: link3BackgroundColor,
      textDecoration: link3Decoration,
      margin: link3Margin,
      padding: link3Padding,
      border: link3Border,
      transition: "all ".concat(link3Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link3AnimationTime, "s") : "LinkOut ".concat(link3AnimationTime, "s")
    },
    href: link3Url,
    onClick: closeBarOnClick
  }, link3Text), /*#__PURE__*/_react["default"].createElement(Link, {
    className: "linksReactNavbar",
    ref: link4,
    style: {
      fontSize: link4Size,
      fontFamily: link4Family,
      color: link4Color,
      backgroundColor: link4BackgroundColor,
      textDecoration: link4Decoration,
      margin: link4Margin,
      padding: link4Padding,
      border: link4Border,
      transition: "all ".concat(link4Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link4AnimationTime, "s") : "LinkOut ".concat(link4AnimationTime, "s")
    },
    href: link4Url,
    onClick: closeBarOnClick
  }, link4Text)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav4",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor4,
      flexDirection: nav4FlexDirection,
      alignItems: nav4alignItems,
      justifyContent: nav4justifyContent,
      transition: "all ".concat(nav4Transition, "s")
    }
  }, searchIcon ? /*#__PURE__*/_react["default"].createElement(Link, {
    href: searchIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react["default"].createElement(SearchIconElement, {
    id: "searchIcon",
    style: {
      transition: "all ".concat(searchIconTransition, "s"),
      margin: searchIconMargin,
      animation: menuToggle ? "IconIn ".concat(searchIconAnimationTime, "s") : "IconOut ".concat(searchIconAnimationTime, "s")
    },
    fontSize: searchIconSize,
    color: searchIconColor
  })) : "", cartIcon ? /*#__PURE__*/_react["default"].createElement(Link, {
    href: cartIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react["default"].createElement(CartIconElement, {
    id: "cartIcon",
    style: {
      transition: "all ".concat(cartIconTransition, "s"),
      margin: cartIconMargin,
      animation: menuToggle ? "IconIn ".concat(cartIconAnimationTime, "s") : "IconOut ".concat(cartIconAnimationTime, "s")
    },
    fontSize: cartIconSize,
    color: cartIconColor
  })) : "", profileIcon ? /*#__PURE__*/_react["default"].createElement(Link, {
    href: profileIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react["default"].createElement(ProfileIconElement, {
    id: "profileIcon",
    style: {
      transition: "all ".concat(profileIconTransition, "s"),
      margin: profileIconMargin,
      animation: menuToggle ? "IconIn ".concat(profileIconAnimationTime, "s") : "IconOut ".concat(profileIconAnimationTime, "s")
    },
    fontSize: profileIconSize,
    color: profileIconColor
  })) : "")));
};
var _default = exports["default"] = ReactNavbar;