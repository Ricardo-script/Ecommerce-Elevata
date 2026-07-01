import { Container } from "@/src/shared/components";
import { InputSearch } from "@/src/shared/components/input-search";
import { CategoryCarousel } from "../../components/category-carousel";
import { OfferBanner } from "../../components/offer-banner";
import { useHomeModel } from "./home.model";

export default function Home() {
  const { searchProducts } = useHomeModel();

  return (
    <Container>
      <InputSearch onSearch={searchProducts} placeholder="Buscar produtos" />
      <OfferBanner />
      <CategoryCarousel />
    </Container>
  );
}
