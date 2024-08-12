import ProductCard from "./components/ProductCard/ProductCard";
import { authOptions } from "./api/auth/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
    </main>
  );
}
