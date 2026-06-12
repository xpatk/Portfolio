import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <Link
          href="/"
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition mb-8"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold mb-12">
          Mentions légales
        </h1>

        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Éditeur du site
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Patrycja Kruczyńska
              <br />
              Développeuse logiciel
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Contact
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Pour toute question concernant ce site, vous pouvez utiliser le
              formulaire de contact disponible sur la page d'accueil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Hébergement
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Propriété intellectuelle
            </h2>

            <p className="text-gray-300 leading-relaxed">
              L'ensemble du contenu présent sur ce site (textes, visuels,
              éléments graphiques et code source) est protégé par les lois
              relatives à la propriété intellectuelle. Toute reproduction,
              modification ou diffusion sans autorisation préalable est
              interdite.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Responsabilité
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Les informations publiées sur ce site sont fournies à titre
              informatif. Malgré le soin apporté à leur rédaction, leur
              exactitude ou leur exhaustivité ne peut être garantie en toutes
              circonstances.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}