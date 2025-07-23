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
            <div className="relative w-full h-[320px] md:h-[300px] rounded-t-2xl overflow-hidden shadow-lg flex items-center bg-[#121316]">
                <img src={background} className="absolute inset-0 w-full h-full object-cover brightness-75 z-0" alt="header-bg" />
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 md:h-24 z-10" style={{ background: 'linear-gradient(to bottom, transparent, #121316 90%)' }} />
                <div className="relative z-10 flex flex-col md:flex-row items-end md:items-end w-full h-full px-4 md:px-8 md:justify-between gap-4 md:gap-0">
                    {/* Logo + tên - luôn bên trái desktop, order-2 mobile */}
                    <div className="flex items-center w-full md:w-[400px] h-[70px] md:h-[100px] order-2 md:order-1 justify-center md:justify-start text-center">
                        <div className="flex justify-center items-center w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full border-[1px] border-[#33343A]" >
                            <img src={speedLogo} className="w-[40px] md:w-[80px] h-[40px] md:h-[80px] items-center" />
                        </div>
                        <div className="flex flex-col justify-center ml-4 md:ml-6">
                            <span className="text-[20px] md:text-[28px] font-semibold text-white leading-tight">Speed.paris</span>
                            <span className="text-[14px] md:text-[16px] text-white/80 font-regular mt-1">@speed.paris</span>
                        </div>
                    </div>
                    {/* Instagram block - luôn ở giữa desktop, order-1 mobile */}
                    <div className="w-full md:flex-1 flex flex-col justify-center items-center pb-4 md:pb-[50px] order-1 md:order-2 text-center">
                        <div className="bg-[#18181b]/90 rounded-xl px-4 md:px-10 py-4 md:py-6 flex flex-col items-center text-center shadow-lg backdrop-blur-sm">
                            <span className="text-base md:text-lg font-semibold text-white tracking-wide">INSTAGRAM</span>
                            <span className="text-sm md:text-base text-white/80 mt-1">@speed.paris.speed</span>
                            <span className="text-xs md:text-sm text-white/60 mt-2">Follow on Instagram for more</span>
                        </div>
                    </div>
                    {/* Social icon + button - luôn bên phải desktop, order-3 mobile */}
                    <div className="flex flex-row items-center justify-center gap-2 md:gap-[15px] w-full md:w-auto mt-4 md:mt-0 order-3 md:order-3">
                        <div className="w-[140px] md:w-[185px] h-[40px] md:h-[55px] flex justify-center items-center bg-[#18181b]/90 rounded-2xl border border-[#23232b] p-2 md:p-[15px] shadow-lg mb-0 overflow-visible">
                            <div className="flex items-center justify-center">
                                <img src={globe} alt="social1" className="opacity-80" />
                            </div>
                            <div className="h-8 md:h-10 w-px bg-[#33343A] mx-3 md:mx-[18px]" />
                            <div className="flex items-center justify-center">
                                <img src={insta} alt="instagram" className="opacity-80" />
                            </div>
                            <div className="h-8 md:h-10 w-px bg-[#33343A] mx-3 md:mx-[18px]" />
                            <div className="flex items-center justify-center">
                                <img src={xIcon} alt="social2" className="opacity-80" />
                            </div>
                        </div>
                        <div className="w-[120px] md:w-auto">
                            <Button
                                className="w-full md:w-[161px] h-10 md:h-[56px] px-2 md:px-8 rounded-xl bg-[#FE7F04] hover:bg-orange-600 text-white font-semibold text-[13px] md:text-[16px] shadow transition mt-0"
                            >
                                Go to builder →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 
