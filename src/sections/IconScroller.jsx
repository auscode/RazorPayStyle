import "../assets/styles/IconScroller.css";
import appollo from "../assets/icon/appollo.avif";
import zoho from "../assets/icon/zoho.png";
import ather from "../assets/icon/ather.avif";
import cleartax from "../assets/icon/cleartax.avif";
import zerodha from "../assets/icon/zerodha.avif";
import goibibo from "../assets/icon/goibibo.avif";
import paisabazaar from "../assets/icon/paisabazaar.avif";
import swiggy from "../assets/icon/swiggy.avif";

export default function InfiniteLogoScroller() {
  const logos = [
    appollo,
    zoho,
    ather,
    cleartax,
    zerodha,
    goibibo,
    paisabazaar,
    swiggy,
  ];

  return (
    <div className="py-8">
      <div
        className="mt-8 w-[90%] max-w-[1536px] mx-auto h-[100px] relative overflow-hidden 
                      mask-image-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]"
      >
        {logos.map((logo, index) => (
          <div
            key={`left-${index}`}
            className={`absolute w-[200px] h-[100px] flex items-center justify-center
                        itemLeft item${index + 1}`}
            style={{
              animationTimingFunction: "linear",
              animationDuration: "30s",
              animationIterationCount: "infinite",
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-36 sm:w-40 md:w-44 h-auto filter grayscale contrast-400 opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <div className="wrapper">
  {logos.map((logo, index) => (
    <div key={`right-${index}`} className={`itemRight item${index + 1}`}>
      <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
    </div>
  ))}
</div> */
}
