import Banner from "@/components/body/banner";
import Body1 from "@/components/body/body1";
import Body2 from "@/components/body/body2";
import Body3 from "@/components/body/body3";
import Body4 from "@/components/body/body4";
import Body5 from "@/components/body/body5";
import Body6 from "@/components/body/body6";
import Body7 from "@/components/body/body7";
import Footerr from "@/components/footer/footerr";
import Navbar from "@/components/nav/header";

export default function Home() {
  return (
    <main>
      <div className="w-full imga bg-center">
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
          <Banner />
          <Body1 />
          <Body2 />
          <Body3 />
          <Body4 />
          <Body5 />
          <Body6 />
          <Body7 />
          <Footerr />
        </div>
      </div>
    </main>
  );
}
