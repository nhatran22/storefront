import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/Button"

import background from "@/assets/background.png";
import speedLogo from "@/assets/speed-logo.png";
import globe from "@/assets/globe.png";
import insta from "@/assets/insta-icon.png";
import xIcon from "@/assets/x-icon.png";

export const Header: React.FC = () => {
    return (
        <header
            className={cn(
                "w-full flex justify-center z-50 mt-2"
            )}
        >
            <div className="relative w-full h-[300px] rounded-t-2xl overflow-hidden shadow-lg flex items-center bg-[#121316]">
                <img src={background} className="absolute inset-0 w-full h-full object-cover brightness-75 z-0" alt="header-bg" />
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 z-10" style={{ background: 'linear-gradient(to bottom, transparent, #121316 90%)' }} />
                <div className="relative z-10 flex items-end w-full h-full px-8 justify-between">
                    <div className="flex items-center w-[400px] h-[100px]">
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-[1px] border-[#33343A]" >
                            <img src={speedLogo} className="w-[80px] h-[80px] items-center" />
                        </div>
                        <div className="flex flex-col justify-center ml-6">
                            <span className="text-[28px] font-semibold text-white leading-tight">Speed.paris</span>
                            <span className="text-[16px] text-white/80 font-regular mt-1">@speed.paris</span>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center pb-[50px]">
                        <div className="bg-[#18181b]/90 rounded-xl px-10 py-6 flex flex-col items-center text-center shadow-lg backdrop-blur-sm">
                            <span className="text-lg font-semibold text-white tracking-wide">INSTAGRAM</span>
                            <span className="text-base text-white/80 mt-1">@speed.paris.speed</span>
                            <span className="text-sm text-white/60 mt-2">Follow on Instagram for more</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <div className="w-[185px] h-[55px] flex justify-center items-center bg-[#18181b]/90 rounded-2xl border border-[#23232b] p-[15px] shadow-lg">
                            <div className="flex items-center justify-center">
                                <img src={globe} alt="social1" className="opacity-80" />
                            </div>
                            <div className="h-10 w-px bg-[#33343A] mx-[18px]" />
                            <div className="flex items-center justify-center">
                                <img src={insta} alt="instagram" className="opacity-80" />
                            </div>
                            <div className="h-10 w-px bg-[#33343A] mx-[18px]" />
                            <div className="flex items-center justify-center">
                                <img src={xIcon} alt="social2" className="opacity-80" />
                            </div>
                        </div>
                        <Button
                            className="px-8 py-3 rounded-xl bg-[#FE7F04] hover:bg-orange-600 w-[161px] h-[56px] text-white font-semibold text-[14px] shadow transition"
                        >
                            Go to builder →
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 
