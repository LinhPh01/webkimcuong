import PageNews from "@/components/news/new";
import Footerr from "@/components/footer/footerr";
import Navbar from "@/components/nav/header";
export default async function NewsPage() {
  return (
    <div>
      <Navbar />
      <PageNews />
      <Footerr />
    </div>
  );
}
