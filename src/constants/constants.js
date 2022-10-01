export default function getPresentationText(){
    return (
        `<p>Je suis <span class="green">Développeur Fullstack Spring Boot - Angular</span> chez <span>Apside TOP</span> depuis Décembre 2019.</p>
    <p>Actuellement en mission chez <span class="green">Harmonie Mutuelle</span>, j'ai dans un premier temps rejoint l'équipe MCO au sein d'une TMA. J'ai pu ensuite rejoindre le centre de ressources pour aider à la réécriture d'applications internes à Harmonie.</p>
    <p>En parallèle de mon travail à plein temps, je me forme sur <span class="green">Vue 3</span> (qui m'a servi à faire ce site), tout en continuant à perfectionner mes compétences sur <span class="green">Spring Boot</span>.</p>`
     );
  };

  export const experiences = [
    {
        title: "Développeur Java - Angular",
        company: "Apside TOP",
        startDate: "Décembre 2019",
        endDate: "Aujourd'hui",
        description: "<p>Pour le compte d'<span class='green'>Harmonie Mutuelle</span>: Développement en <span class='green'>Java</span> et <span class='green'>Angular</span> sur différentes applications internes. Dans un premier temps dans une équipe de TMA, puis en Centre de Ressources pour la réécriture d'application en <span class='green'>Angular</span> et <span class='green'>Spring Boot</span>.</p>",
        skills: ["JEE", "Java8", "Spring Boot", "JavaScript", "Angular",  "AngularJS", "PostgreSQL"]
    },
    {
        title: "Développeur",
        company: "Document Média Système",
        startDate: "Juin 2018",
        endDate: "Novembre 2019",
        description: "<p>Tout d'abord <span class='green'>stagiaire</span> pendant 6 mois, j'ai pu ensuite rejoindre l'entreprise en tant qu'<span class='green'>alternant</span> pendant 1 an.</p><p>Au cours de cette expérience, j'ai pu intervenir sur des <span class='green'>projets clients</span> pour de la <span class='green'>correction de bugs</span> ainsi que des petits développements. Dans la partie alternance en revanche, j'ai eu la chance de <span class='green'>mener un projet de création d'un nouveau produit pour l'entreprise</span> en créant un module d'importation et de gestion de mail avec pièces jointes à intégrer au logiciel de Gestion Eletronique de Document ELO.</p>",
        skills: ["Java", "JavaScript", "jQuery", "Gestion électronique des documents (GED)", "Microsoft SQL Server"]
    }
  ];

  export const formation = [
    {
        title: "Concepteur Développeur d'Application",
        company: "CEFIM",
        startDate: "Novembre 2018",
        endDate: "Novembre 2019",
        description: "<p>Concepteur Développeur d'Applications - Titre professionnel - Ministère de l'Emploi et de la Formation - <span class='green'>RNCP Niveau II (Bac+3/4)</span>.</p>",
      },
      {
        title: "Développeur Web Logiciel",
        company: "CEFIM",
        startDate: "Mars 2018",
        endDate: "Novembre 2018",
        description: "<p>Formation au titre professionnel Developpeur web - Ministère de l'Emploi et de la Formation / <span class='green'>RNCP - Niveau III (Bac+2)</span> - 700h en formation et 350h en entreprise.</p>",
      },
      {
        title: "DUT Techniques de Commercialisation",
        company: "IUT de Tours",
        startDate: "2014",
        endDate: "2016",
        description: "<p>Obtention du diplôme avant réorientation dans le développement.</p>",
      }
  ]