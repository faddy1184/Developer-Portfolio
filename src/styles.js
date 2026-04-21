const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",

  // 🔥 improved visibility for mobile
  heroSubText:
    "text-white/80 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

  sectionSubText:
    "sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider",

  // Layout helpers
  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  flexColumn: "flex flex-col justify-center items-center",

  // Form
  inputField:
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",

  formContainer:
    "bg-black/70 p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-white",

  // Buttons
  primaryButton:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300",

  secondaryButton:
    "bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300",

  // Background helper
  fullScreenBg: "absolute top-0 left-0 w-full h-full z-[-1]",
};

export { styles };