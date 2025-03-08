import React from 'react'

export interface ReactNavbarProps {
    burgerColor?: string;
    burgerColorHover?: string;
    navColor1?: string;
    navColor2?: string;
    navColor3?: string;
    navColor4?: string;
    logo?: React.ReactNode;
    logoWidth?: string;
    logoHeight?: string;
    logoHoverSize?: string;
    logoHoverColor?: string;
    logoTransition?: number;
    logoAnimationTime?: number;

    nav1FlexDirection?: string;
    nav2FlexDirection?: string;
    nav3FlexDirection?: string;
    nav4FlexDirection?: string;

    nav1alignItems?: string;
    nav1justifyContent?: string;
    nav2alignItems?: string;
    nav2justifyContent?: string;
    nav3alignItems?: string;
    nav3justifyContent?: string;
    nav4alignItems?: string;
    nav4justifyContent?: string;

    nav1Transition?: number;
    nav2Transition?: number;
    nav3Transition?: number;
    nav4Transition?: number;

    LinkTag?: any;

    link1Text?: string;
    link2Text?: string;
    link3Text?: string;
    link4Text?: string;
    link1Url?: string;
    link2Url?: string;
    link3Url?: string;
    link4Url?: string;
    link1Size?: string;
    link2Size?: string;
    link3Size?: string;
    link4Size?: string;
    link1Family?: string;
    link2Family?: string;
    link3Family?: string;
    link4Family?: string;
    link1Color?: string;
    link2Color?: string;
    link3Color?: string;
    link4Color?: string;

    link1BackgroundColor?: string;
    link2BackgroundColor?: string;
    link3BackgroundColor?: string;
    link4BackgroundColor?: string;

    link1ColorHover?: string;
    link2ColorHover?: string;
    link3ColorHover?: string;
    link4ColorHover?: string;
    link1Decoration?: string;
    link2Decoration?: string;
    link3Decoration?: string;
    link4Decoration?: string;
    link1Margin?: string;
    link2Margin?: string;
    link3Margin?: string;
    link4Margin?: string;
    link1Padding?: string;
    link2Padding?: string;
    link3Padding?: string;
    link4Padding?: string;
    link1Border?: string;
    link2Border?: string;
    link3Border?: string;
    link4Border?: string;
    link1Transition?: number;
    link2Transition?: number;
    link3Transition?: number;
    link4Transition?: number;
    link1AnimationTime?: number;
    link2AnimationTime?: number;
    link3AnimationTime?: number;
    link4AnimationTime?: number;

    searchIcon?: boolean;
    SearchIconElement?: any;
    searchIconMargin?: string;
    searchIconUrl?: string;
    searchIconSize?: string;
    searchIconColor?: string;
    searchIconColorHover?: string;
    searchIconTransition?: number;
    searchIconAnimationTime?: number;

    cartIcon?: boolean;
    CartIconElement?: any;
    cartIconMargin?: string;
    cartIconUrl?: string;
    cartIconSize?: string;
    cartIconColor?: string;
    cartIconColorHover?: string;
    cartIconTransition?: number;
    cartIconAnimationTime?: number;

    profileIcon?: boolean;
    ProfileIconElement?: any;
    profileIconMargin?: string;
    profileIconUrl?: string;
    profileIconSize?: string;
    profileIconColor?: string;
    profileIconColorHover?: string;
    profileIconTransition?: number;
    profileIconAnimationTime?: number;
}


declare const ReactNavbar: React.FunctionComponent<ReactNavbarProps>;
export { ReactNavbar }