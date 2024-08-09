import ProductCard from "./components/ProductCard/ProductCard";
import { authOption } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOption);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
    </main>
  );
}
