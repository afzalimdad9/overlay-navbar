"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["LinkTag", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Link = function Link(_ref) {
  var LinkTag = _ref.LinkTag,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  if (LinkTag) return /*#__PURE__*/_react["default"].createElement(LinkTag, props, children);
  return /*#__PURE__*/_react["default"].createElement(LinkTag !== null && LinkTag !== void 0 ? LinkTag : "a", props, children);
};
var ReactNavbar = function ReactNavbar(_ref2) {
  var _ref2$burgerColor = _ref2.burgerColor,
    burgerColor = _ref2$burgerColor === void 0 ? "black" : _ref2$burgerColor,
    _ref2$burgerColorHove = _ref2.burgerColorHover,
    burgerColorHover = _ref2$burgerColorHove === void 0 ? burgerColor : _ref2$burgerColorHove,
    _ref2$navColor = _ref2.navColor1,
    navColor1 = _ref2$navColor === void 0 ? "rgb(35, 35, 35)" : _ref2$navColor,
    _ref2$navColor2 = _ref2.navColor2,
    navColor2 = _ref2$navColor2 === void 0 ? navColor1 : _ref2$navColor2,
    _ref2$navColor3 = _ref2.navColor3,
    navColor3 = _ref2$navColor3 === void 0 ? navColor2 : _ref2$navColor3,
    _ref2$navColor4 = _ref2.navColor4,
    navColor4 = _ref2$navColor4 === void 0 ? navColor3 : _ref2$navColor4,
    logo = _ref2.logo,
    _ref2$logoWidth = _ref2.logoWidth,
    logoWidth = _ref2$logoWidth === void 0 ? "100px" : _ref2$logoWidth,
    _ref2$logoHeight = _ref2.logoHeight,
    logoHeight = _ref2$logoHeight === void 0 ? "unset" : _ref2$logoHeight,
    _ref2$logoHoverSize = _ref2.logoHoverSize,
    logoHoverSize = _ref2$logoHoverSize === void 0 ? "15px" : _ref2$logoHoverSize,
    _ref2$logoHoverColor = _ref2.logoHoverColor,
    logoHoverColor = _ref2$logoHoverColor === void 0 ? "green" : _ref2$logoHoverColor,
    _ref2$logoTransition = _ref2.logoTransition,
    logoTransition = _ref2$logoTransition === void 0 ? 0.5 : _ref2$logoTransition,
    _ref2$logoAnimationTi = _ref2.logoAnimationTime,
    logoAnimationTime = _ref2$logoAnimationTi === void 0 ? 1 : _ref2$logoAnimationTi,
    _ref2$nav1FlexDirecti = _ref2.nav1FlexDirection,
    nav1FlexDirection = _ref2$nav1FlexDirecti === void 0 ? "row" : _ref2$nav1FlexDirecti,
    _ref2$nav2FlexDirecti = _ref2.nav2FlexDirection,
    nav2FlexDirection = _ref2$nav2FlexDirecti === void 0 ? "row" : _ref2$nav2FlexDirecti,
    _ref2$nav3FlexDirecti = _ref2.nav3FlexDirection,
    nav3FlexDirection = _ref2$nav3FlexDirecti === void 0 ? "row" : _ref2$nav3FlexDirecti,
    _ref2$nav4FlexDirecti = _ref2.nav4FlexDirection,
    nav4FlexDirection = _ref2$nav4FlexDirecti === void 0 ? "row" : _ref2$nav4FlexDirecti,
    _ref2$nav1alignItems = _ref2.nav1alignItems,
    nav1alignItems = _ref2$nav1alignItems === void 0 ? "center" : _ref2$nav1alignItems,
    _ref2$nav1justifyCont = _ref2.nav1justifyContent,
    nav1justifyContent = _ref2$nav1justifyCont === void 0 ? "center" : _ref2$nav1justifyCont,
    _ref2$nav2alignItems = _ref2.nav2alignItems,
    nav2alignItems = _ref2$nav2alignItems === void 0 ? "center" : _ref2$nav2alignItems,
    _ref2$nav2justifyCont = _ref2.nav2justifyContent,
    nav2justifyContent = _ref2$nav2justifyCont === void 0 ? "center" : _ref2$nav2justifyCont,
    _ref2$nav3alignItems = _ref2.nav3alignItems,
    nav3alignItems = _ref2$nav3alignItems === void 0 ? "center" : _ref2$nav3alignItems,
    _ref2$nav3justifyCont = _ref2.nav3justifyContent,
    nav3justifyContent = _ref2$nav3justifyCont === void 0 ? "center" : _ref2$nav3justifyCont,
    _ref2$nav4alignItems = _ref2.nav4alignItems,
    nav4alignItems = _ref2$nav4alignItems === void 0 ? "center" : _ref2$nav4alignItems,
    _ref2$nav4justifyCont = _ref2.nav4justifyContent,
    nav4justifyContent = _ref2$nav4justifyCont === void 0 ? "center" : _ref2$nav4justifyCont,
    _ref2$nav1Transition = _ref2.nav1Transition,
    nav1Transition = _ref2$nav1Transition === void 0 ? 0.4 : _ref2$nav1Transition,
    _ref2$nav2Transition = _ref2.nav2Transition,
    nav2Transition = _ref2$nav2Transition === void 0 ? nav1Transition + 0.4 : _ref2$nav2Transition,
    _ref2$nav3Transition = _ref2.nav3Transition,
    nav3Transition = _ref2$nav3Transition === void 0 ? nav2Transition + 0.4 : _ref2$nav3Transition,
    _ref2$nav4Transition = _ref2.nav4Transition,
    nav4Transition = _ref2$nav4Transition === void 0 ? nav3Transition + 0.4 : _ref2$nav4Transition,
    LinkTag = _ref2.LinkTag,
    _ref2$link1Text = _ref2.link1Text,
    link1Text = _ref2$link1Text === void 0 ? "Text 1" : _ref2$link1Text,
    _ref2$link2Text = _ref2.link2Text,
    link2Text = _ref2$link2Text === void 0 ? "Text 2" : _ref2$link2Text,
    _ref2$link3Text = _ref2.link3Text,
    link3Text = _ref2$link3Text === void 0 ? "Text 3" : _ref2$link3Text,
    _ref2$link4Text = _ref2.link4Text,
    link4Text = _ref2$link4Text === void 0 ? "Text 4" : _ref2$link4Text,
    _ref2$link1Url = _ref2.link1Url,
    link1Url = _ref2$link1Url === void 0 ? "/text1" : _ref2$link1Url,
    _ref2$link2Url = _ref2.link2Url,
    link2Url = _ref2$link2Url === void 0 ? "/text2" : _ref2$link2Url,
    _ref2$link3Url = _ref2.link3Url,
    link3Url = _ref2$link3Url === void 0 ? "/text3" : _ref2$link3Url,
    _ref2$link4Url = _ref2.link4Url,
    link4Url = _ref2$link4Url === void 0 ? "/text4" : _ref2$link4Url,
    _ref2$link1Size = _ref2.link1Size,
    link1Size = _ref2$link1Size === void 0 ? "1vmax" : _ref2$link1Size,
    _ref2$link2Size = _ref2.link2Size,
    link2Size = _ref2$link2Size === void 0 ? link1Size : _ref2$link2Size,
    _ref2$link3Size = _ref2.link3Size,
    link3Size = _ref2$link3Size === void 0 ? link2Size : _ref2$link3Size,
    _ref2$link4Size = _ref2.link4Size,
    link4Size = _ref2$link4Size === void 0 ? link3Size : _ref2$link4Size,
    _ref2$link1Family = _ref2.link1Family,
    link1Family = _ref2$link1Family === void 0 ? "Roboto" : _ref2$link1Family,
    _ref2$link2Family = _ref2.link2Family,
    link2Family = _ref2$link2Family === void 0 ? link1Family : _ref2$link2Family,
    _ref2$link3Family = _ref2.link3Family,
    link3Family = _ref2$link3Family === void 0 ? link2Family : _ref2$link3Family,
    _ref2$link4Family = _ref2.link4Family,
    link4Family = _ref2$link4Family === void 0 ? link3Family : _ref2$link4Family,
    _ref2$link1Color = _ref2.link1Color,
    link1Color = _ref2$link1Color === void 0 ? "black" : _ref2$link1Color,
    _ref2$link2Color = _ref2.link2Color,
    link2Color = _ref2$link2Color === void 0 ? link1Color : _ref2$link2Color,
    _ref2$link3Color = _ref2.link3Color,
    link3Color = _ref2$link3Color === void 0 ? link2Color : _ref2$link3Color,
    _ref2$link4Color = _ref2.link4Color,
    link4Color = _ref2$link4Color === void 0 ? link3Color : _ref2$link4Color,
    _ref2$link1Background = _ref2.link1BackgroundColor,
    link1BackgroundColor = _ref2$link1Background === void 0 ? "" : _ref2$link1Background,
    _ref2$link2Background = _ref2.link2BackgroundColor,
    link2BackgroundColor = _ref2$link2Background === void 0 ? link1BackgroundColor : _ref2$link2Background,
    _ref2$link3Background = _ref2.link3BackgroundColor,
    link3BackgroundColor = _ref2$link3Background === void 0 ? link2BackgroundColor : _ref2$link3Background,
    _ref2$link4Background = _ref2.link4BackgroundColor,
    link4BackgroundColor = _ref2$link4Background === void 0 ? link3BackgroundColor : _ref2$link4Background,
    _ref2$link1ColorHover = _ref2.link1ColorHover,
    link1ColorHover = _ref2$link1ColorHover === void 0 ? link1Color : _ref2$link1ColorHover,
    _ref2$link2ColorHover = _ref2.link2ColorHover,
    link2ColorHover = _ref2$link2ColorHover === void 0 ? link1ColorHover : _ref2$link2ColorHover,
    _ref2$link3ColorHover = _ref2.link3ColorHover,
    link3ColorHover = _ref2$link3ColorHover === void 0 ? link2ColorHover : _ref2$link3ColorHover,
    _ref2$link4ColorHover = _ref2.link4ColorHover,
    link4ColorHover = _ref2$link4ColorHover === void 0 ? link3ColorHover : _ref2$link4ColorHover,
    _ref2$link1Decoration = _ref2.link1Decoration,
    link1Decoration = _ref2$link1Decoration === void 0 ? "none" : _ref2$link1Decoration,
    _ref2$link2Decoration = _ref2.link2Decoration,
    link2Decoration = _ref2$link2Decoration === void 0 ? link1Decoration : _ref2$link2Decoration,
    _ref2$link3Decoration = _ref2.link3Decoration,
    link3Decoration = _ref2$link3Decoration === void 0 ? link2Decoration : _ref2$link3Decoration,
    _ref2$link4Decoration = _ref2.link4Decoration,
    link4Decoration = _ref2$link4Decoration === void 0 ? link3Decoration : _ref2$link4Decoration,
    _ref2$link1Margin = _ref2.link1Margin,
    link1Margin = _ref2$link1Margin === void 0 ? "0" : _ref2$link1Margin,
    _ref2$link2Margin = _ref2.link2Margin,
    link2Margin = _ref2$link2Margin === void 0 ? link1Margin : _ref2$link2Margin,
    _ref2$link3Margin = _ref2.link3Margin,
    link3Margin = _ref2$link3Margin === void 0 ? link2Margin : _ref2$link3Margin,
    _ref2$link4Margin = _ref2.link4Margin,
    link4Margin = _ref2$link4Margin === void 0 ? link3Margin : _ref2$link4Margin,
    _ref2$link1Padding = _ref2.link1Padding,
    link1Padding = _ref2$link1Padding === void 0 ? "0" : _ref2$link1Padding,
    _ref2$link2Padding = _ref2.link2Padding,
    link2Padding = _ref2$link2Padding === void 0 ? link1Padding : _ref2$link2Padding,
    _ref2$link3Padding = _ref2.link3Padding,
    link3Padding = _ref2$link3Padding === void 0 ? link2Padding : _ref2$link3Padding,
    _ref2$link4Padding = _ref2.link4Padding,
    link4Padding = _ref2$link4Padding === void 0 ? link3Padding : _ref2$link4Padding,
    _ref2$link1Border = _ref2.link1Border,
    link1Border = _ref2$link1Border === void 0 ? "none" : _ref2$link1Border,
    _ref2$link2Border = _ref2.link2Border,
    link2Border = _ref2$link2Border === void 0 ? link1Border : _ref2$link2Border,
    _ref2$link3Border = _ref2.link3Border,
    link3Border = _ref2$link3Border === void 0 ? link2Border : _ref2$link3Border,
    _ref2$link4Border = _ref2.link4Border,
    link4Border = _ref2$link4Border === void 0 ? link3Border : _ref2$link4Border,
    _ref2$link1Transition = _ref2.link1Transition,
    link1Transition = _ref2$link1Transition === void 0 ? 0.5 : _ref2$link1Transition,
    _ref2$link2Transition = _ref2.link2Transition,
    link2Transition = _ref2$link2Transition === void 0 ? link1Transition : _ref2$link2Transition,
    _ref2$link3Transition = _ref2.link3Transition,
    link3Transition = _ref2$link3Transition === void 0 ? link2Transition : _ref2$link3Transition,
    _ref2$link4Transition = _ref2.link4Transition,
    link4Transition = _ref2$link4Transition === void 0 ? link3Transition : _ref2$link4Transition,
    _ref2$link1AnimationT = _ref2.link1AnimationTime,
    link1AnimationTime = _ref2$link1AnimationT === void 0 ? 1.5 : _ref2$link1AnimationT,
    _ref2$link2AnimationT = _ref2.link2AnimationTime,
    link2AnimationTime = _ref2$link2AnimationT === void 0 ? link1AnimationTime + 0.5 : _ref2$link2AnimationT,
    _ref2$link3AnimationT = _ref2.link3AnimationTime,
    link3AnimationTime = _ref2$link3AnimationT === void 0 ? link2AnimationTime + 0.5 : _ref2$link3AnimationT,
    _ref2$link4AnimationT = _ref2.link4AnimationTime,
    link4AnimationTime = _ref2$link4AnimationT === void 0 ? link3AnimationTime + 0.5 : _ref2$link4AnimationT,
    _ref2$searchIcon = _ref2.searchIcon,
    searchIcon = _ref2$searchIcon === void 0 ? false : _ref2$searchIcon,
    SearchIconElement = _ref2.SearchIconElement,
    _ref2$searchIconMargi = _ref2.searchIconMargin,
    searchIconMargin = _ref2$searchIconMargi === void 0 ? "0" : _ref2$searchIconMargi,
    _ref2$searchIconUrl = _ref2.searchIconUrl,
    searchIconUrl = _ref2$searchIconUrl === void 0 ? "/Search" : _ref2$searchIconUrl,
    _ref2$searchIconSize = _ref2.searchIconSize,
    searchIconSize = _ref2$searchIconSize === void 0 ? "2vmax" : _ref2$searchIconSize,
    _ref2$searchIconColor = _ref2.searchIconColor,
    searchIconColor = _ref2$searchIconColor === void 0 ? "white" : _ref2$searchIconColor,
    _ref2$searchIconColor2 = _ref2.searchIconColorHover,
    searchIconColorHover = _ref2$searchIconColor2 === void 0 ? searchIconColor : _ref2$searchIconColor2,
    _ref2$searchIconTrans = _ref2.searchIconTransition,
    searchIconTransition = _ref2$searchIconTrans === void 0 ? 0.5 : _ref2$searchIconTrans,
    _ref2$searchIconAnima = _ref2.searchIconAnimationTime,
    searchIconAnimationTime = _ref2$searchIconAnima === void 0 ? 2 : _ref2$searchIconAnima,
    _ref2$cartIcon = _ref2.cartIcon,
    cartIcon = _ref2$cartIcon === void 0 ? false : _ref2$cartIcon,
    CartIconElement = _ref2.CartIconElement,
    _ref2$cartIconMargin = _ref2.cartIconMargin,
    cartIconMargin = _ref2$cartIconMargin === void 0 ? "0" : _ref2$cartIconMargin,
    _ref2$cartIconUrl = _ref2.cartIconUrl,
    cartIconUrl = _ref2$cartIconUrl === void 0 ? "/Cart" : _ref2$cartIconUrl,
    _ref2$cartIconSize = _ref2.cartIconSize,
    cartIconSize = _ref2$cartIconSize === void 0 ? "2vmax" : _ref2$cartIconSize,
    _ref2$cartIconColor = _ref2.cartIconColor,
    cartIconColor = _ref2$cartIconColor === void 0 ? "white" : _ref2$cartIconColor,
    _ref2$cartIconColorHo = _ref2.cartIconColorHover,
    cartIconColorHover = _ref2$cartIconColorHo === void 0 ? cartIconColor : _ref2$cartIconColorHo,
    _ref2$cartIconTransit = _ref2.cartIconTransition,
    cartIconTransition = _ref2$cartIconTransit === void 0 ? 0.5 : _ref2$cartIconTransit,
    _ref2$cartIconAnimati = _ref2.cartIconAnimationTime,
    cartIconAnimationTime = _ref2$cartIconAnimati === void 0 ? searchIconAnimationTime + 0.5 : _ref2$cartIconAnimati,
    _ref2$profileIcon = _ref2.profileIcon,
    profileIcon = _ref2$profileIcon === void 0 ? false : _ref2$profileIcon,
    ProfileIconElement = _ref2.ProfileIconElement,
    _ref2$profileIconMarg = _ref2.profileIconMargin,
    profileIconMargin = _ref2$profileIconMarg === void 0 ? "0" : _ref2$profileIconMarg,
    _ref2$profileIconUrl = _ref2.profileIconUrl,
    profileIconUrl = _ref2$profileIconUrl === void 0 ? "/Account" : _ref2$profileIconUrl,
    _ref2$profileIconSize = _ref2.profileIconSize,
    profileIconSize = _ref2$profileIconSize === void 0 ? "2.5vmax" : _ref2$profileIconSize,
    _ref2$profileIconColo = _ref2.profileIconColor,
    profileIconColor = _ref2$profileIconColo === void 0 ? "white" : _ref2$profileIconColo,
    _ref2$profileIconColo2 = _ref2.profileIconColorHover,
    profileIconColorHover = _ref2$profileIconColo2 === void 0 ? profileIconColor : _ref2$profileIconColo2,
    _ref2$profileIconTran = _ref2.profileIconTransition,
    profileIconTransition = _ref2$profileIconTran === void 0 ? 0.5 : _ref2$profileIconTran,
    _ref2$profileIconAnim = _ref2.profileIconAnimationTime,
    profileIconAnimationTime = _ref2$profileIconAnim === void 0 ? cartIconAnimationTime + 0.5 : _ref2$profileIconAnim;
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
    var handleColor = function handleColor(element, color) {
      element.style.color = color;
    };
    var handleBackgroundColor = function handleBackgroundColor(element, color) {
      element.style.backgroundColor = color;
    };
    var handleFilter = function handleFilter(element, filter) {
      element.style.filter = filter;
    };
    menuBurger.current.addEventListener("mouseover", function () {
      handleBackgroundColor(menuBurgerItem1.current, burgerColorHover);
      handleBackgroundColor(menuBurgerItem2.current, burgerColorHover);
      handleBackgroundColor(menuBurgerItem3.current, burgerColorHover);
    });
    menuBurger.current.addEventListener("mouseleave", function () {
      handleBackgroundColor(menuBurgerItem1.current, burgerColor);
      handleBackgroundColor(menuBurgerItem2.current, burgerColor);
      handleBackgroundColor(menuBurgerItem3.current, burgerColor);
    });
    logoRef.current.addEventListener("mouseover", function () {
      handleFilter(logoRef.current, "drop-shadow(0 0 ".concat(logoHoverSize, " ").concat(logoHoverColor, ")"));
    });
    logoRef.current.addEventListener("mouseleave", function () {
      handleFilter(logoRef.current, "none");
    });
    link1.current.addEventListener("mouseover", function () {
      handleColor(link1.current, link1ColorHover);
    });
    link1.current.addEventListener("mouseleave", function () {
      handleColor(link1.current, link1Color);
    });
    link2.current.addEventListener("mouseover", function () {
      handleColor(link2.current, link2ColorHover);
    });
    link2.current.addEventListener("mouseleave", function () {
      handleColor(link2.current, link2Color);
    });
    link3.current.addEventListener("mouseover", function () {
      handleColor(link3.current, link3ColorHover);
    });
    link3.current.addEventListener("mouseleave", function () {
      handleColor(link3.current, link3Color);
    });
    link4.current.addEventListener("mouseover", function () {
      handleColor(link4.current, link4ColorHover);
    });
    link4.current.addEventListener("mouseleave", function () {
      handleColor(link4.current, link4Color);
    });
    var search = document.querySelector("#searchIcon");
    var cart = document.querySelector("#cartIcon");
    var profile = document.querySelector("#profileIcon");
    if (searchIcon) {
      search.addEventListener("mouseover", function () {
        handleColor(search, searchIconColorHover);
      });
      search.addEventListener("mouseleave", function () {
        handleColor(search, searchIconColor);
      });
    }
    if (cartIcon) {
      cart.addEventListener("mouseover", function () {
        handleColor(cart, cartIconColorHover);
      });
      cart.addEventListener("mouseleave", function () {
        handleColor(cart, cartIconColor);
      });
    }
    if (profileIcon) {
      profile.addEventListener("mouseover", function () {
        handleColor(profile, profileIconColorHover);
      });
      profile.addEventListener("mouseleave", function () {
        handleColor(profile, profileIconColor);
      });
    }
  }, [menuBurger.current, menuBurgerItem1.current, menuBurgerItem2.current, menuBurgerItem3.current, burgerColor, burgerColorHover, logoRef.current, logoHoverSize, logoHoverColor, link1.current, link1ColorHover, link1Color, link2.current, link2ColorHover, link2Color, link3.current, link3ColorHover, link3Color, link4.current, link4ColorHover, link4Color, searchIcon, cartIcon, profileIcon, searchIconColorHover, searchIconColor, cartIconColorHover, cartIconColor, profileIconColorHover, profileIconColor]);
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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
    LinkTag: LinkTag,
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