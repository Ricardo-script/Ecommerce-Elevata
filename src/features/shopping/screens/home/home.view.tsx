import { Container } from "@/src/shared/components";
import { InputSearch } from "@/src/shared/components/input-search";
import { useHomeModel } from "./home.model";

export default function Home() {
  const { searchProducts } = useHomeModel();

  return (
    <Container>
      <InputSearch onSearch={searchProducts} placeholder="Buscar produtos" />
    </Container>
  );
}
