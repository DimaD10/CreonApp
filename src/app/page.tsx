import { MainSection } from "@/components/_layouts/main-section/main-section";
import HeroScreen from "./screens/hero/hero-screen";
import PassScreen from "./screens/pass/pass-screen";
import ArticleScreen from "./screens/article/article-screen";
import NewsScreen from "./screens/news/news-screen";
import FeaturesScreen from "./screens/features/features-screen";

export default function Home() {
  return (
    <>
      <HeroScreen />
      <PassScreen />
      <ArticleScreen />
      
      <FeaturesScreen />
      <NewsScreen />
    </>
  );
}
