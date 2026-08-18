import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span className="eyebrow">ROTA NÃO ENCONTRADA</span>
        <h1>404</h1>
        <p>Este fluxo não leva a uma página existente.</p>
        <div style={{ marginTop: "24px" }}>
          <Button variant="primary" href="/">
            Voltar ao início
          </Button>
        </div>
      </div>
    </section>
  );
}
