import buttonIcon from "../assets/button_image.png";
import React, {JSX} from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p15 from "../assets/p15.png";
import p16 from "../assets/p16.png";
import p17 from "../assets/p17.png";
import p18 from "../assets/p18.png";
import p19 from "../assets/p19.png";
import p20 from "../assets/p20.png";
import p21 from "../assets/p21.png";
import p22 from "../assets/p22.png";
import p23 from "../assets/p23.png";
import p24 from "../assets/p24.png";
import p25 from "../assets/p25.png";
import p26 from "../assets/p26.png";
import p27 from "../assets/p27.png";
import p28 from "../assets/p28.png";
import p29 from "../assets/p29.png";
import p30 from "../assets/p30.png";
import p31 from "../assets/p31.png";
import p32 from "../assets/p32.png";
import p33 from "../assets/p33.png";
import wildPatchIcon from "../assets/wildPatch.png";
import {jsx} from "react/jsx-runtime";


const images: Record<string, string> = {
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,
    p17, p18,p19,p20,p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31,
    p32, p33
};

export function default_button_square(name?: string) {
    if (!name) {
        return (
            <img
                src={buttonIcon}
                alt="button_icon"
                style={{width: 28, height: 28, backgroundColor: "#88bcee"}}>
            </img>
        )
    }
    return (
        <div
        style={{
            backgroundImage: `url(${images[name]})`,
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "center"
        }}>
            <img
                src={buttonIcon}
                alt="button_icon"
                style={{width: 28, height: 28}}>
            </img>
        </div>
    )
}

export function default_square(name?: string) {
    if (!name) {
        return "#88bcee"
    }
    return (
        <img
            src={images[name]}
            alt="button_icon"
            style={{width: 28, height: 28}}>
        </img>
    )
}

export function wildPatch(): JSX.Element {
    return (
        <img
            src={wildPatchIcon}
            alt="glowing"
            style={{width: 28, height: 28}}>
        </img>
    )
}

// classname={"w-48 h-48 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_40px_rgba(0,255,255,1)]"}
