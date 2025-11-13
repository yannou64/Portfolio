import style from "./style.module.scss" ;

export default function CG() {
  return (
    <section aria-labelledby="policy-title" className={style.cg_container}>
      <title>Conditions générales du site de portfolio - yannick biot</title>
      <meta name="description" content="Conditions générales pour le site du portfolio de yannick biot" />
      <h1 id="policy-title">Politique de confidentialité et gestion des cookies</h1>

      <p>
        Nous respectons votre vie privée. Cette page explique quelles données nous collectons, pourquoi nous les
        utilisons, et comment vous pouvez gérer vos choix concernant les cookies et le suivi. En poursuivant votre
        navigation, vous pouvez accepter ou configurer les cookies.
      </p>

      <section aria-labelledby="site-info">
        <h2 id="site-info">Le site</h2>
        <p>Biot Yannick</p>
        <p>
          Contact : <a href="mailto:yannickpro64@gmail.com">yannickpro64@gmail.com</a>
        </p>
      </section>

      <section aria-labelledby="collected-data">
        <h2 id="collected-data">Données collectées</h2>
        <p>
          Le site ne collecte que les informations que vous choisissez de nous transmettre via le formulaire de contact
          : votre adresse e‑mail et le message que vous souhaitez envoyer. Ces informations sont transmises par e‑mail
          au propriétaire du site afin de permettre un éventuel contact de suivi. Aucune autre collecte automatique
          d’informations personnelles n’est effectuée par défaut.
        </p>
      </section>

      <section aria-labelledby="purposes">
        <h2 id="purposes">Finalités des traitements</h2>
        <ul>
          <li>Répondre aux demandes de contact et assurer la communication avec les personnes intéressées.</li>
          <li>Garantir le fonctionnement technique du site (cookies strictement nécessaires).</li>
        </ul>
      </section>

      <section aria-labelledby="cookies">
        <h2 id="cookies">Cookies</h2>
        <h3>Cookies strictement nécessaires</h3>
        <ul>
          <li>
            <strong>Rôle :</strong> permettre la navigation, gérer la session et assurer la sécurité du site.
          </li>
          <li>
            <strong>Base légale :</strong> nécessaire au fonctionnement du service.
          </li>
          <li>
            <strong>Exemples :</strong> cookie de session.
          </li>
        </ul>

        <p>
          Aucun cookie de suivi ou cookie tiers n’est installé par défaut sur ce site. Si des services tiers (analytics,
          widgets, etc.) sont ajoutés ultérieurement, leur usage de cookies fera l’objet d’une information distincte et
          d’un recueil de consentement si nécessaire.
        </p>

        <h3>Envoi par e‑mail (mailto)</h3>
        <p>
          En cliquant sur le lien de contact, votre client de messagerie par défaut s’ouvrira pour composer un e‑mail
          vers
          <a href="mailto:yannickpro64@gmail.com">yannickpro64@gmail.com</a> (fonctionnement dépendant du terminal et du
          client mail configuré). Si aucun client n’est configuré, vous pouvez copier l’adresse manuellement.
        </p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">Durée de conservation des données</h2>
        <p>
          Les messages reçus par e‑mail sont conservés uniquement le temps nécessaire à la gestion de la demande et aux
          échanges afférents. Aucune donnée n’est conservée dans une base de données centralisée sur le site. Si vous en
          faites la demande, les e‑mails vous concernant pourront être supprimés.
        </p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights">Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d’accès : obtenir une copie des données vous concernant.</li>
          <li>Droit de rectification : demander la correction de données inexactes.</li>
          <li>Droit à l’effacement : demander la suppression de vos données, sous réserve des obligations légales.</li>
          <li>Droit à la limitation du traitement.</li>
          <li>Droit d’opposition : notamment au traitement fondé sur l’intérêt légitime.</li>
          <li>Droit à la portabilité : recevoir vos données dans un format structuré et lisible.</li>
        </ul>

        <p>
          Pour exercer vos droits : contactez <a href="mailto:yannickpro64@gmail.com">yannickpro64@gmail.com</a> en
          précisant votre demande et en joignant une preuve d’identité si nécessaire. Si vous estimez vos droits non
          respectés, vous pouvez saisir la CNIL :{" "}
          <a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">
            www.cnil.fr
          </a>
          .
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles adaptées (chiffrement des échanges via
          HTTPS, accès restreint, sauvegardes régulières) pour protéger les données. En cas de violation de données
          personnelles susceptible d’engendrer un risque pour vos droits et libertés, nous informerons les personnes
          concernées et les autorités compétentes conformément à la réglementation.
        </p>
      </section>

      <section aria-labelledby="updates">
        <h2 id="updates">Modifications de la politique</h2>
        <p>
          Nous pouvons actualiser cette politique.{" "}
          <time dateTime="2025-09-15">Version publiée le 15 septembre 2025</time>. En cas de modification substantielle,
          nous informerons les utilisateurs et, si nécessaire, recueillerons de nouveau leur consentement.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Informations complémentaires / contacts</h2>
        <p>
          Pour toute question relative à la protection des données, contactez :<br />
          Biot Yannick — <a href="mailto:yannickpro64@gmail.com">yannickpro64@gmail.com</a>
        </p>
      </section>
    </section>
  );
}
