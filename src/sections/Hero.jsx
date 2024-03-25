import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  py-[8%]  ">
      <div className="container-wrapper">
        <div className=" flex justify-center items-center flex-col sm:flex-row">
       

          <div className=" max-w-4xl bg-[#779120bc] py-14 px-4 rounded-3xl border-2 border-white">
            <h1 className=" uppercase text-5xl text-[#000000] font-groot-one font-bold text-center my-4">
            EcoDoge

            </h1>
            <h2 className="font-groot-one text-2xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
            Barking at Climate Change - One Coin at a Time!
            </h2>

            <p className="uppercase text-xl text-[#000000] font-groot-one font-bold text-center">
            CONTRACT ADDRESS
            </p>
            <a
              href="https://solscan.io/token/5Ko8JGMVUjX8JZZE2TYamuwfeU1YVAiRu6nMxqrJH9Ag"
              target="_blank"
              className=" font-groot-two text-xs sm:text-xl text-center my-4 flex items-center justify-center bg-[#ffb22e] py-2 px-4 rounded-full "
            >
              5Ko8JGMVUjX8JZZE2TYamuwfeU1YVAiRu6nMxqrJH9Ag
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/3iJqs8VtMMcs2M69LaaYb8LBSBS8uKCZRhoXwm1uGswd?t=1711355587355"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#769120] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                DexTools
              </a>
              <a
                href="https://t.me/ecodoges"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#769120] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
