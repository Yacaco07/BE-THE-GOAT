const pillars = [
  {
    number: "01",
    title: "Construa seu caminho",
    description:
      "Comece na base, evolua nos treinos e conquiste seu espaço dentro de campo.",
  },
  {
    number: "02",
    title: "Viva cada partida",
    description:
      "Acompanhe os momentos decisivos, suas notas, estatísticas e o impacto das suas atuações.",
  },
  {
    number: "03",
    title: "Escreva seu legado",
    description:
      "Negocie contratos, mude de clube, dispute títulos e construa uma carreira inesquecível.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="shell flex h-20 items-center justify-between border-b border-white/[0.08]">
        <a href="/" aria-label="BE THE GOAT início" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d7f36a] text-sm font-black text-[#08090b]">
            BG
          </span>
          <span className="text-sm font-black tracking-[0.19em]">
            BE THE <span className="text-[#d7f36a]">GOAT</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold text-[#858b96] md:flex">
          <a className="text-white transition hover:text-[#d7f36a]" href="#inicio">INÍCIO</a>
          <a className="transition hover:text-white" href="#experiencia">A EXPERIÊNCIA</a>
          <a className="transition hover:text-white" href="#sobre">SOBRE O JOGO</a>
        </nav>

        <span className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#a4aab4]">
          PROJETO EM DESENVOLVIMENTO
        </span>
      </header>

      <section id="inicio" className="shell relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#d7f36a]" />
            <p className="eyebrow">O FUTEBOL É A SUA HISTÓRIA</p>
          </div>

          <h1 className="max-w-3xl text-6xl leading-[0.96] font-black tracking-[-0.075em] sm:text-7xl lg:text-[86px]">
            NÃO NASCE
            <br />
            <span className="text-[#d7f36a]">LENDÁRIO.</span>
            <br />
            SE TORNA.
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-[#9ba1ab] sm:text-lg">
            Comece na base. Supere limites. Conquiste seu lugar. Uma carreira
            inteira no futebol, construída pelas suas escolhas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experiencia"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d7f36a] px-6 text-xs font-black tracking-[0.12em] text-[#08090b] transition hover:bg-[#e5ff83]"
            >
              EXPLORAR O UNIVERSO <span className="ml-3 text-base">↗</span>
            </a>
            <span className="text-xs text-[#777e89]">Uma carreira. Milhares de possibilidades.</span>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/[0.09] pt-7">
            <div>
              <p className="text-2xl font-black tracking-tight">16+</p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.16em] text-[#777e89]">IDADE INICIAL</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">3</p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.16em] text-[#777e89]">IDIOMAS PLANEJADOS</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">∞</p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.16em] text-[#777e89]">HISTÓRIAS POSSÍVEIS</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-10 rounded-full bg-[#d7f36a]/[0.07] blur-3xl" />
          <div className="panel relative overflow-hidden p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="eyebrow">MODO CARREIRA</p>
                <p className="mt-2 text-sm font-bold">O começo de tudo</p>
              </div>
              <span className="rounded-full border border-[#d7f36a]/30 px-3 py-1 text-[9px] font-bold tracking-[0.15em] text-[#d7f36a]">
                PRÉ-TEMPORADA
              </span>
            </div>

            <div className="relative my-7 flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[radial-gradient(ellipse_at_50%_35%,rgba(215,243,106,0.15),transparent_52%),linear-gradient(145deg,#20252b,#101216_65%)]">
              <div className="absolute inset-x-8 bottom-8 top-8 rounded-[48%] border border-white/[0.08]" />
              <div className="absolute inset-x-16 bottom-8 top-8 rounded-[48%] border border-white/[0.07]" />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#d7f36a]/[0.08] to-transparent" />
              <div className="relative text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#d7f36a]/30 bg-black/20 text-5xl">
                  <span aria-hidden="true">✦</span>
                </div>
                <p className="mt-5 text-[10px] font-bold tracking-[0.24em] text-[#d7f36a]">SUA JORNADA</p>
                <p className="mt-2 text-2xl font-black tracking-tight">COMEÇA AQUI.</p>
              </div>
              <div className="absolute bottom-4 left-4 text-[9px] font-bold tracking-[0.18em] text-white/35">BE THE GOAT / 001</div>
              <div className="absolute right-4 top-4 text-[9px] font-bold tracking-[0.18em] text-white/35">PLAYER CAREER</div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#858b96]">SUA PRÓXIMA CONQUISTA</p>
                <p className="mt-1 text-sm font-bold">Ainda está por escrever.</p>
              </div>
              <span className="text-2xl text-[#d7f36a]">↗</span>
            </div>
          </div>
          <div className="absolute -right-3 top-16 hidden rounded-lg border border-white/10 bg-[#171a20] px-4 py-3 shadow-2xl sm:block">
            <p className="text-[9px] font-bold tracking-[0.16em] text-[#858b96]">O OBJETIVO</p>
            <p className="mt-1 text-xs font-black">FAZER HISTÓRIA.</p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-y border-white/[0.07] bg-white/[0.018] py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">MAIS QUE UMA TEMPORADA</p>
              <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                UMA CARREIRA FEITA DE <span className="text-[#d7f36a]">DECISÕES.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#858b96]">
              Cada treino, oportunidade e escolha pode mudar o rumo da sua trajetória.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="panel p-6 transition hover:-translate-y-1 hover:border-[#d7f36a]/30">
                <p className="text-xs font-black tracking-[0.16em] text-[#d7f36a]">{pillar.number}</p>
                <h3 className="mt-10 text-xl font-black tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#858b96]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="shell py-16">
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-black tracking-[0.19em]">BE THE <span className="text-[#d7f36a]">GOAT</span></p>
            <p className="mt-2 text-xs text-[#777e89]">Sua carreira. Suas escolhas. Seu legado.</p>
          </div>
          <p className="max-w-md text-xs leading-5 text-[#777e89] sm:text-right">
            Este é o primeiro capítulo do projeto. Os sistemas de carreira e simulação
            serão desenvolvidos em etapas, com dados e funcionalidades integrados.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-2 pt-5 text-[10px] font-semibold tracking-[0.12em] text-[#626873] sm:flex-row">
          <span>© 2026 BE THE GOAT</span>
          <span>UM UNIVERSO DE FUTEBOL EM CONSTRUÇÃO</span>
        </div>
      </section>
    </main>
  );
}
