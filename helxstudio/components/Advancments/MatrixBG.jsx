export default function PixelMosaic({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 right-0 h-[140px] w-[220px] overflow-hidden rotate-180  ${className}`}
    >
      {/* Top floating pixel */}
      <div className="absolute left-[54px] top-[17px] h-[18px] w-[18px] bg-[#6c00ff]" />
      <div className="absolute left-[54px] top-[17px] h-[18px] w-[7px] bg-[#3921c8]" />

      {/* Upper-left cluster */}
      <div className="absolute left-0 top-[35px] h-[18px] w-[18px] bg-[#8b00ff]" />
      <div className="absolute left-[18px] top-[35px] h-[18px] w-[18px] bg-[#16005e]" />

      <div className="absolute left-0 top-[53px] h-[18px] w-[18px] bg-[#3d00a8]" />
      <div className="absolute left-0 top-[71px] h-[18px] w-[18px] bg-[#7100ff]" />

      {/* Middle purple cluster */}
      <div className="absolute left-[36px] top-[70px] h-[18px] w-[36px] bg-[#5621dc]" />
      <div className="absolute left-[72px] top-[70px] h-[18px] w-[18px] bg-[#7100ff]" />

      <div className="absolute left-[72px] top-[52px] h-[36px] w-[18px] bg-[#3214a9]" />

      {/* Center-left floating blocks */}
      <div className="absolute left-[108px] top-[35px] h-[18px] w-[18px] bg-[#2511a7]" />

      <div className="absolute left-[108px] top-[53px] h-[18px] w-[18px] bg-[#c1bdfa]" />

      <div className="absolute left-[108px] top-[70px] h-[18px] w-[18px] bg-[#7b00ff]" />

      {/* left floating pixel */}
      <div className="absolute left-[162px] top-[70px] h-[18px] w-[18px] bg-[#a978f6]" />

      {/* Main lower-left mosaic */}

      {/* Row 1 */}
      <div className="absolute left-0 top-[88px] h-[18px] w-[18px] bg-[#130066]" />
      <div className="absolute left-[18px] top-[88px] h-[18px] w-[18px] bg-[#2c00a0]" />
      <div className="absolute left-[36px] top-[88px] h-[18px] w-[18px] bg-[#18006c]" />
      <div className="absolute left-[54px] top-[88px] h-[18px] w-[18px] bg-[#13005b]" />
      <div className="absolute left-[90px] top-[88px] h-[18px] w-[18px] bg-[#08004d]" />

      {/* Light transparent square */}
      <div className="absolute left-[126px] top-[88px] h-[18px] w-[18px] bg-[#dda9ff]/40" />

      {/* Row 2 */}
      <div className="absolute left-0 top-[106px] h-[18px] w-[18px] bg-[#26007c]" />
      <div className="absolute left-[18px] top-[106px] h-[18px] w-[18px] bg-[#4010bf]" />
      <div className="absolute left-[36px] top-[106px] h-[18px] w-[18px] bg-[#5b00f1]" />
      <div className="absolute left-[54px] top-[106px] h-[18px] w-[18px] bg-[#17006a]" />

      {/* White hole */}
      <div className="absolute left-[72px] top-[106px] h-[18px] w-[18px] bg-white" />

      <div className="absolute left-[90px] top-[106px] h-[18px] w-[18px] bg-[#17005d]" />

      {/* Row 3 */}
      <div className="absolute left-0 top-[124px] h-[16px] w-[18px] bg-[#11004d]" />
      <div className="absolute left-[18px] top-[124px] h-[16px] w-[18px] bg-[#260091]" />
      <div className="absolute left-[36px] top-[124px] h-[16px] w-[18px] bg-[#7300ff]" />
      <div className="absolute left-[54px] top-[124px] h-[16px] w-[18px] bg-[#2700a0]" />

      {/* Diagonal striped block */}
      <div
        className="absolute left-[72px] top-[124px] h-[16px] w-[18px]"
        style={{
          background:
            "repeating-linear-gradient(135deg, #8b2cff 0px, #8b2cff 2px, #d0c8ff 2px, #d0c8ff 4px)",
        }}
      />

      <div className="absolute left-[90px] top-[124px] h-[16px] w-[18px] bg-[#c5c2f8]" />
      <div className="absolute left-[108px] top-[124px] h-[16px] w-[18px] bg-[#10004d]" />

      {/* Bottom-left floating blocks */}
      <div className="absolute left-[144px] top-[123px] h-[17px] w-[18px] bg-[#a867f4]" />

      {/* left horizontal striped decoration */}
      <div
        className="absolute left-0 top-[89px] h-[18px] w-[18px] opacity-50"
        style={{
          background:
            "repeating-linear-gradient(0deg, #e6a5ff 0px, #e6a5ff 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
