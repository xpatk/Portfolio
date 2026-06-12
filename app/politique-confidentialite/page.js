import Link from "next/link";

export default function PolitiqueConfidentialite() {
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
          Politique de confidentialité
        </h1>

        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Données collectées
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Lorsque vous utilisez le formulaire de contact, les informations
              suivantes peuvent être collectées :
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• Adresse e-mail</li>
              <li>• Sujet du message</li>
              <li>• Contenu du message</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Finalité du traitement
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Les données transmises via le formulaire de contact sont utilisées
              uniquement afin de répondre aux demandes reçues et d’échanger avec
              les visiteurs du site.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Services tiers
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Afin d’assurer le bon fonctionnement du site, certains services
              tiers sont utilisés :
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>
                • Google reCAPTCHA pour protéger le formulaire contre les abus
                et les soumissions automatisées.
              </li>

              <li>
                • Resend pour l’acheminement des messages envoyés via le
                formulaire de contact.
              </li>

              <li>
                • Vercel pour l’hébergement et la diffusion du site.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Conservation des données
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Les informations transmises sont conservées uniquement pendant la
              durée nécessaire au traitement de la demande et aux échanges qui
              peuvent en découler.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Vos droits
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d’un droit d’accès, de rectification,
              d’effacement, de limitation et d’opposition concernant vos
              données personnelles.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">
              Contact
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Pour toute question relative à cette politique de confidentialité,
              vous pouvez utiliser le formulaire de contact disponible sur ce
              site.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}