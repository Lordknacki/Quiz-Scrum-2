const questions = [
    {
        question: "Lorsque plusieurs équipes Scrum travaillent sur le même produit, leurs incréments doivent-ils être intégrés à chaque Sprint ? (1 réponse)",
        options: [
            { text: "A. Oui, mais seulement pour les équipes Scrum dont le travail est interdépendant.", correct: false },
            { text: "B. Oui, sinon les Product Owners (et les parties prenantes) pourraient ne pas être en mesure d'inspecter avec précision ce qui est fait.", correct: true },
            { text: "C. Non, chaque équipe Scrum est indépendante.", correct: false },
            { text: "D. Non, c'est beaucoup trop difficile et cela doit être fait dans un Sprint de consolidation.", correct: false }
        ]
    },
    {
        question: "Scrum a un rôle appelé « Chef de projet ». (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "Quelle réponse décrit le mieux les sujets abordés lors de la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Que faire et qui le fera.", correct: false },
            { text: "B. Comment les conditions ont changé et comment le Product Backlog devrait évoluer.", correct: false },
            { text: "C. Ce qui peut être fait et comment le faire.", correct: true },
            { text: "D. Ce qui a mal tourné dans le dernier Sprint et ce qu'il faut faire différemment dans ce Sprint.", correct: false },
            { text: "E. Qui est dans l'équipe et quels seront les rôles des membres.", correct: false }
        ]
    },
    {
        question: "Qui décide quand il est approprié de mettre à jour le Sprint Backlog pendant un Sprint ? (1 réponse)",
        options: [
            { text: "A. Le chef de projet.", correct: false },
            { text: "B. L'équipe de développement.", correct: true },
            { text: "C. L'équipe Scrum.", correct: false },
            { text: "D. Le Product Owner.", correct: false }
        ]
    },
    {
        question: "Quand les membres de l'équipe de développement prennent-ils en charge un élément du Sprint Backlog ? (1 réponse)",
        options: [
            { text: "A. Lors de la réunion de planification du Sprint.", correct: false },
            { text: "B. Pendant le Daily Scrum.", correct: false },
            { text: "C. Jamais. Tous les éléments du Sprint Backlog sont « possédés » par l'équipe Scrum entière.", correct: true },
            { text: "D. Chaque fois qu'un membre de l'équipe peut assumer plus de travail.", correct: false }
        ]
    },
    {
        question: "Le but d'un Sprint est de produire un incrément terminé du produit. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: true },
            { text: "B. Faux", correct: false }
        ]
    },
    {
        question: "Quand un Sprint se termine-t-il ? (1 réponse)",
        options: [
            { text: "A. Lorsque tous les développeurs ont terminé leurs tâches.", correct: false },
            { text: "B. Lorsque tous les éléments du Product Backlog respectent leur Définition de Fini.", correct: false },
            { text: "C. Lorsque le Product Owner décide que suffisamment a été livré pour atteindre l'objectif du Sprint.", correct: false },
            { text: "D. Lorsque la rétrospective du Sprint est terminée.", correct: true }
        ]
    },
    {
        question: "Quelles deux choses l'équipe de développement doit-elle faire pendant le premier Sprint ? (2 réponses)",
        options: [
            { text: "A. Élaborer un plan pour le reste du projet.", correct: false },
            { text: "B. Analyser, décrire et documenter les exigences pour les Sprints suivants.", correct: false },
            { text: "C. Développer au moins une fonctionnalité.", correct: true },
            { text: "D. Analyser, concevoir et décrire l'architecture et l'infrastructure complètes.", correct: false },
            { text: "E. Créer un incrément de logiciel potentiellement livrable.", correct: true }
        ]
    },
    {
        question: "Quelles sont les trois façons dont Scrum favorise l'auto-organisation ? (3 réponses)",
        options: [
            { text: "A. En n'autorisant pas la documentation.", correct: false },
            { text: "B. En laissant l'équipe de développement décider du travail à faire dans un Sprint.", correct: true },
            { text: "C. En empêchant les parties prenantes d'entrer dans la salle de développement.", correct: false },
            { text: "D. En supprimant les titres pour les membres de l'équipe de développement.", correct: true },
            { text: "E. En étant un cadre de travail léger.", correct: true }
        ]
    },
    {
        question: "Quelle est la principale préoccupation lorsque plusieurs équipes de développement travaillent à partir du même Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Minimiser les dépendances entre les équipes.", correct: true },
            { text: "B. Définition claire des exigences.", correct: false },
            { text: "C. Respecter les projections de portée initiales.", correct: false },
            { text: "D. S'assurer qu'il y a suffisamment de travail pour tout le monde dans chaque équipe.", correct: false },
            { text: "E. Maximiser la vélocité.", correct: false }
        ]
    },
    {
        question: "Quand le Sprint suivant commence-t-il ? (1 réponse)",
        options: [
            { text: "A. Immédiatement après la conclusion du Sprint précédent.", correct: true },
            { text: "B. Immédiatement après la prochaine planification du Sprint.", correct: false },
            { text: "C. Lorsque le Product Owner est prêt.", correct: false },
            { text: "D. Lorsque l'équipe de développement est prête.", correct: false }
        ]
    },
    {
        question: "À quoi sert une rétrospective de Sprint ? (1 réponse)",
        options: [
            { text: "A. Évaluer les performances individuelles des membres de l'équipe.", correct: false },
            { text: "B. Planifier l'architecture et l'infrastructure des futurs Sprints.", correct: false },
            { text: "C. Discuter de ce qui a bien fonctionné, des améliorations possibles, et élaborer un plan d'amélioration.", correct: true },
            { text: "D. Analyser et adapter le Product Backlog pour les prochaines releases.", correct: false }
        ]
    },
    {
        question: "Quels sont deux éléments inclus dans la Définition de Fini ? (2 réponses)",
        options: [
            { text: "A. Tests de régression exécutés avec succès.", correct: true },
            { text: "B. Avis des parties prenantes.", correct: false },
            { text: "C. Documentation des fonctionnalités.", correct: true },
            { text: "D. Objectifs de performance atteints.", correct: false }
        ]
    },
    {
        question: "Le Product Owner peut-il modifier les éléments du Product Backlog après le début d'un Sprint ? (1 réponse)",
        options: [
            { text: "A. Oui, à tout moment.", correct: false },
            { text: "B. Oui, avec l'accord du Scrum Master.", correct: false },
            { text: "C. Non, les éléments du Product Backlog ne peuvent pas être modifiés après le début du Sprint.", correct: true },
            { text: "D. Oui, mais seulement si cela n'affecte pas l'objectif du Sprint.", correct: false }
        ]
    },
    {
        question: "Comment est mesurée la progression d'un Sprint ? (1 réponse)",
        options: [
            { text: "A. Par la vélocité de l'équipe.", correct: false },
            { text: "B. Par l'estimation de la quantité de travail restant.", correct: true },
            { text: "C. Par le nombre de tâches effectuées par jour.", correct: false },
            { text: "D. Par les rapports quotidiens du Scrum Master.", correct: false }
        ]
    },
    {
        question: "Qui est responsable de maximiser la valeur du produit résultant du travail de l'équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Le Scrum Master.", correct: false },
            { text: "B. Le Product Owner.", correct: true },
            { text: "C. L'équipe de développement.", correct: false },
            { text: "D. Les parties prenantes.", correct: false }
        ]
    },
    {
        question: "Combien de temps dure le Sprint ? (1 réponse)",
        options: [
            { text: "A. Deux semaines.", correct: false },
            { text: "B. Un mois au maximum.", correct: true },
            { text: "C. Aussi longtemps que nécessaire pour terminer le travail.", correct: false },
            { text: "D. Jusqu'à ce que le Product Owner soit satisfait.", correct: false }
        ]
    },
    {
        question: "Pourquoi est-il essentiel que le Scrum Master participe à la rétrospective du Sprint ? (1 réponse)",
        options: [
            { text: "A. Pour noter les performances individuelles.", correct: false },
            { text: "B. Pour guider l'équipe vers l'amélioration continue.", correct: true },
            { text: "C. Pour représenter les parties prenantes.", correct: false },
            { text: "D. Pour réorganiser le Product Backlog.", correct: false }
        ]
    },
    {
        question: "Le Scrum Master peut-il décider d'allonger la durée d'un Sprint ? (1 réponse)",
        options: [
            { text: "A. Oui, si l'équipe Scrum le demande.", correct: false },
            { text: "B. Oui, pour s'assurer que l'objectif du Sprint est atteint.", correct: false },
            { text: "C. Non, la durée du Sprint est fixe.", correct: true },
            { text: "D. Oui, en cas de force majeure.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce que la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Une liste de critères que chaque incrément doit satisfaire avant d'être considéré comme terminé.", correct: true },
            { text: "B. Un document de planification créé par le Scrum Master.", correct: false },
            { text: "C. Une estimation des tâches à accomplir par l'équipe de développement.", correct: false },
            { text: "D. Une description des fonctionnalités souhaitées par les parties prenantes.", correct: false }
        ]
    },
    {
        question: "Quelles sont les responsabilités du Scrum Master dans une équipe Scrum ? (2 réponses)",
        options: [
            { text: "A. Assurer la productivité de l'équipe Scrum.", correct: false },
            { text: "B. Faciliter les événements Scrum au besoin.", correct: true },
            { text: "C. Maximiser la valeur du produit.", correct: false },
            { text: "D. Coacher l'équipe Scrum pour améliorer son efficacité.", correct: true }
        ]
    },
    {
        question: "Le Product Owner est-il responsable des prévisions de vélocité de l'équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Oui, cela fait partie de ses responsabilités.", correct: false },
            { text: "B. Non, les prévisions de vélocité sont basées sur le travail de l'équipe de développement.", correct: true },
            { text: "C. Oui, mais en accord avec le Scrum Master.", correct: false },
            { text: "D. Non, cela incombe uniquement aux parties prenantes.", correct: false }
        ]
    },
    {
        question: "Que signifie la vélocité dans un contexte Scrum ? (1 réponse)",
        options: [
            { text: "A. La vitesse à laquelle le Product Owner priorise le Backlog.", correct: false },
            { text: "B. La quantité de travail qu'une équipe Scrum peut compléter pendant un Sprint.", correct: true },
            { text: "C. La rapidité d'adaptation aux changements.", correct: false },
            { text: "D. Le nombre de réunions d'inspection et d'adaptation.", correct: false }
        ]
    },
    {
        question: "À quel moment l'équipe Scrum doit-elle effectuer les tests pour les éléments du Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Avant de livrer chaque incrément terminé.", correct: true },
            { text: "B. À la fin du projet.", correct: false },
            { text: "C. Pendant la revue de Sprint.", correct: false },
            { text: "D. Pendant le dernier Sprint.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce que le Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Une réunion de mise à jour des tâches assignées.", correct: false },
            { text: "B. Un événement de 15 minutes pour inspecter les progrès vers l'objectif du Sprint.", correct: true },
            { text: "C. Un point de situation pour informer les parties prenantes.", correct: false },
            { text: "D. Une réunion planifiée par le Scrum Master.", correct: false }
        ]
    },
    {
        question: "Quelle est la responsabilité du Product Owner dans la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Prioriser les éléments du Product Backlog pour atteindre l'objectif du Sprint.", correct: true },
            { text: "B. Gérer les performances individuelles.", correct: false },
            { text: "C. Assigner les tâches aux développeurs.", correct: false },
            { text: "D. Mettre en place les outils de suivi.", correct: false }
        ]
    },
    {
        question: "Qui est responsable de la qualité de l'incrément produit lors d'un Sprint ? (1 réponse)",
        options: [
            { text: "A. Le Scrum Master.", correct: false },
            { text: "B. Le Product Owner.", correct: false },
            { text: "C. L'équipe de développement.", correct: true },
            { text: "D. Les parties prenantes.", correct: false }
        ]
    },
    {
        question: "Qui est autorisé à modifier le Sprint Backlog pendant un Sprint ? (1 réponse)",
        options: [
            { text: "A. Le Scrum Master.", correct: false },
            { text: "B. Le Product Owner.", correct: false },
            { text: "C. L'équipe de développement.", correct: true },
            { text: "D. Les parties prenantes.", correct: false }
        ]
    },
    {
        question: "Dans quel but l'équipe Scrum organise-t-elle la revue de Sprint ? (1 réponse)",
        options: [
            { text: "A. Pour démontrer le travail effectué et recueillir des retours des parties prenantes.", correct: true },
            { text: "B. Pour analyser la productivité des membres.", correct: false },
            { text: "C. Pour évaluer les compétences techniques de l'équipe.", correct: false },
            { text: "D. Pour créer un plan d'amélioration des compétences.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce qui fait partie du rôle du Scrum Master ? (1 réponse)",
        options: [
            { text: "A. Affecter des tâches à chaque membre de l'équipe.", correct: false },
            { text: "B. Faciliter les discussions de l'équipe et aider à résoudre les obstacles.", correct: true },
            { text: "C. Fixer des objectifs de performance pour chaque Sprint.", correct: false },
            { text: "D. Élaborer les rapports de productivité.", correct: false }
        ]
    },
    {
        question: "Quel est le principal résultat attendu du Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Un rapport de statut envoyé aux parties prenantes.", correct: false },
            { text: "B. Une compréhension partagée de la progression vers l'objectif du Sprint.", correct: true },
            { text: "C. Une réaffectation des tâches entre membres.", correct: false },
            { text: "D. Une analyse de la vélocité actuelle.", correct: false }
        ]
    },
    {
        question: "Comment le Scrum Master protège-t-il l'équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. En empêchant toute forme de distraction durant les Sprints.", correct: true },
            { text: "B. En décidant de la composition de l'équipe.", correct: false },
            { text: "C. En prenant les décisions pour l'équipe.", correct: false },
            { text: "D. En interdisant les contacts avec le Product Owner.", correct: false }
        ]
    },
    {
        question: "Quel élément n'est pas inclus dans la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Les tests automatisés réussis.", correct: false },
            { text: "B. La documentation utilisateur terminée.", correct: false },
            { text: "C. Le produit entièrement fonctionnel.", correct: false },
            { text: "D. La vélocité de l'équipe.", correct: true }
        ]
    },
    {
        question: "Quand la planification du Sprint a-t-elle lieu ? (1 réponse)",
        options: [
            { text: "A. Avant chaque Sprint.", correct: true },
            { text: "B. Une fois par mois.", correct: false },
            { text: "C. Lorsqu'un Sprint est en retard.", correct: false },
            { text: "D. Avant chaque release.", correct: false }
        ]
    },
    {
        question: "Quelles sont les qualités d'un Product Owner efficace ? (2 réponses)",
        options: [
            { text: "A. Connaissance approfondie du produit et du marché.", correct: true },
            { text: "B. Capacité à assigner des tâches techniques.", correct: false },
            { text: "C. Compétence en facilitation des événements Scrum.", correct: false },
            { text: "D. Bonne communication avec les parties prenantes.", correct: true }
        ]
    },
    {
        question: "Quels sont les rôles dans une équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Product Owner, développeurs et Scrum Master.", correct: true },
            { text: "B. Product Owner, Scrum Master et Chef de projet.", correct: false },
            { text: "C. Product Owner, Scrum Master et responsables QA.", correct: false },
            { text: "D. Product Owner, Scrum Master et Sponsor.", correct: false }
        ]
    },
    {
        question: "Quelle est la principale responsabilité des développeurs dans une équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Créer des incréments de travail terminés et potentiellement livrables.", correct: true },
            { text: "B. Assurer la conformité aux normes de l'entreprise.", correct: false },
            { text: "C. Optimiser la vélocité.", correct: false },
            { text: "D. Gérer les demandes des parties prenantes.", correct: false }
        ]
    },
    {
        question: "Comment un Scrum Master aide-t-il le Product Owner ? (1 réponse)",
        options: [
            { text: "A. En fixant des objectifs de Sprint.", correct: false },
            { text: "B. En aidant le Product Owner à ordonner les éléments du Product Backlog.", correct: true },
            { text: "C. En assignant des tâches aux développeurs.", correct: false },
            { text: "D. En rédigeant la documentation du produit.", correct: false }
        ]
    },
    {
        question: "Quelles sont les activités incluses dans un Sprint ? (1 réponse)",
        options: [
            { text: "A. Planification, développement, test, et revue.", correct: true },
            { text: "B. Planification, revue, rétrospective et assignation des tâches.", correct: false },
            { text: "C. Planification, validation du chef de projet, et test.", correct: false },
            { text: "D. Développement, analyse, et documentation.", correct: false }
        ]
    },
    {
        question: "Quel est le rôle principal du Product Owner dans une équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Faciliter le Daily Scrum.", correct: false },
            { text: "B. Définir et maximiser la valeur des produits.", correct: true },
            { text: "C. Assignement des tâches.", correct: false },
            { text: "D. Créer les critères de performance.", correct: false }
        ]
    },
    {
        question: "Que signifie le concept d'incrément dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Une fonctionnalité complète qui peut être livrée aux utilisateurs.", correct: true },
            { text: "B. Un ensemble de tâches inachevées du Sprint.", correct: false },
            { text: "C. Un rapport de performance de l'équipe Scrum.", correct: false },
            { text: "D. Un groupe de tâches indépendantes.", correct: false }
        ]
    },
    {
        question: "Qui participe à la réunion de planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Le Product Owner uniquement.", correct: false },
            { text: "B. Le Scrum Master uniquement.", correct: false },
            { text: "C. Les développeurs uniquement.", correct: false },
            { text: "D. L'équipe Scrum complète.", correct: true }
        ]
    },
    {
        question: "Quelles sont les deux responsabilités du Product Owner pendant le Sprint ? (2 réponses)",
        options: [
            { text: "A. Aider les développeurs à comprendre les éléments du Product Backlog.", correct: true },
            { text: "B. Affecter des tâches spécifiques aux membres de l'équipe.", correct: false },
            { text: "C. Travailler avec les parties prenantes pour clarifier les besoins.", correct: true },
            { text: "D. Superviser directement le travail des développeurs.", correct: false }
        ]
    },
    {
        question: "Pourquoi est-il essentiel de respecter la Définition de Fini dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Pour permettre une intégration continue sans travail supplémentaire.", correct: true },
            { text: "B. Pour identifier les faiblesses de chaque membre de l'équipe.", correct: false },
            { text: "C. Pour allouer le temps entre les Sprints.", correct: false },
            { text: "D. Pour documenter les performances de l'équipe.", correct: false }
        ]
    },
    {
        question: "Quel est le rôle du Scrum Master lors d'une revue de Sprint ? (1 réponse)",
        options: [
            { text: "A. Noter les erreurs de l'équipe.", correct: false },
            { text: "B. Faciliter l'événement et encourager les retours des parties prenantes.", correct: true },
            { text: "C. Affecter des tâches pour le prochain Sprint.", correct: false },
            { text: "D. Définir les priorités pour les prochaines fonctionnalités.", correct: false }
        ]
    },
    {
        question: "Pourquoi l'équipe Scrum doit-elle être auto-organisée ? (1 réponse)",
        options: [
            { text: "A. Pour permettre aux membres de l'équipe de choisir leur propre chef.", correct: false },
            { text: "B. Pour accroître l'efficacité en permettant une flexibilité dans la manière dont le travail est accompli.", correct: true },
            { text: "C. Pour diminuer l'implication du Product Owner.", correct: false },
            { text: "D. Pour alléger les responsabilités du Scrum Master.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce qui n'est pas inclus dans un Sprint Backlog ? (1 réponse)",
        options: [
            { text: "A. Les éléments sélectionnés du Product Backlog.", correct: false },
            { text: "B. Un plan pour livrer un incrément.", correct: false },
            { text: "C. Les tâches nécessaires pour atteindre l'objectif du Sprint.", correct: false },
            { text: "D. Les exigences des parties prenantes.", correct: true }
        ]
    },
    {
        question: "Quand une équipe Scrum peut-elle modifier la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. À la fin de chaque Sprint, lors de la rétrospective.", correct: true },
            { text: "B. Lorsqu'un nouveau membre rejoint l'équipe.", correct: false },
            { text: "C. Avant chaque release.", correct: false },
            { text: "D. Pendant la revue de Sprint.", correct: false }
        ]
    },
    {
        question: "Quels éléments ne font pas partie de la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Tests automatisés réussis.", correct: false },
            { text: "B. Documentation des fonctionnalités terminée.", correct: false },
            { text: "C. Vélocité de l'équipe.", correct: true },
            { text: "D. Révision du code.", correct: false }
        ]
    },
    {
        question: "Quel est le principal but de la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Planifier les performances de chaque membre de l'équipe.", correct: false },
            { text: "B. Déterminer le travail à accomplir dans le Sprint et comment l'atteindre.", correct: true },
            { text: "C. Mettre à jour le Product Backlog.", correct: false },
            { text: "D. Décider de l'objectif du produit final.", correct: false }
        ]
    },
    {
        question: "Quelle est la principale fonction du Product Owner dans un Sprint ? (1 réponse)",
        options: [
            { text: "A. Gérer les performances de l'équipe Scrum.", correct: false },
            { text: "B. Ordonnancer les éléments du Product Backlog pour optimiser la valeur.", correct: true },
            { text: "C. Participer aux tests des éléments de l'incrément.", correct: false },
            { text: "D. Élaborer le rapport de Sprint.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce que le Scrum Master doit éviter de faire ? (1 réponse)",
        options: [
            { text: "A. Enseigner et coacher les membres de l'équipe Scrum.", correct: false },
            { text: "B. Assister les parties prenantes dans leur communication avec l'équipe Scrum.", correct: false },
            { text: "C. Affecter des tâches aux membres de l'équipe.", correct: true },
            { text: "D. Faciliter la rétrospective du Sprint.", correct: false }
        ]
    },
    {
        question: "Quel est l'objectif principal d'un Sprint ? (1 réponse)",
        options: [
            { text: "A. Développer un produit finalisé.", correct: false },
            { text: "B. Créer un incrément potentiel du produit qui respecte la Définition de Fini.", correct: true },
            { text: "C. Assurer la documentation complète de chaque élément.", correct: false },
            { text: "D. Atteindre une vélocité spécifique.", correct: false }
        ]
    },
    {
        question: "Quel est le rôle du Product Owner dans la revue de Sprint ? (1 réponse)",
        options: [
            { text: "A. Assigner des tâches aux développeurs.", correct: false },
            { text: "B. Fournir un retour d'information sur l'incrément de produit et ajuster le Product Backlog si nécessaire.", correct: true },
            { text: "C. Contrôler la performance de chaque développeur.", correct: false },
            { text: "D. Faciliter la réunion.", correct: false }
        ]
    },
    {
        question: "Le Scrum Master est responsable de la motivation de l'équipe Scrum. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "Pourquoi le Product Owner doit-il participer au Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Pour s'assurer que les membres de l'équipe restent concentrés.", correct: false },
            { text: "B. Pour examiner les progrès par rapport à l'objectif du Sprint et clarifier les besoins.", correct: true },
            { text: "C. Pour évaluer les performances individuelles.", correct: false },
            { text: "D. Pour assigner des tâches aux membres de l'équipe.", correct: false }
        ]
    },
    {
        question: "Quelle est la durée maximale d'un Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. 10 minutes.", correct: false },
            { text: "B. 15 minutes.", correct: true },
            { text: "C. 20 minutes.", correct: false },
            { text: "D. 30 minutes.", correct: false }
        ]
    },
    {
        question: "Que signifie la transparence dans le cadre Scrum ? (1 réponse)",
        options: [
            { text: "A. Tout le monde doit connaître la vélocité de l'équipe.", correct: false },
            { text: "B. Les processus doivent être visibles et compréhensibles pour tous.", correct: true },
            { text: "C. Toutes les tâches doivent être documentées.", correct: false },
            { text: "D. Les développeurs doivent toujours suivre les directives du Scrum Master.", correct: false }
        ]
    },
    {
        question: "Le Product Owner peut-il annuler un Sprint ? (1 réponse)",
        options: [
            { text: "A. Oui, mais seulement en accord avec le Scrum Master.", correct: false },
            { text: "B. Oui, si l'objectif du Sprint n'est plus pertinent.", correct: true },
            { text: "C. Non, seul le Scrum Master peut annuler un Sprint.", correct: false },
            { text: "D. Non, le Sprint doit aller jusqu'à son terme prévu.", correct: false }
        ]
    },
    {
        question: "Que doit faire le Scrum Master si le Product Owner rencontre des difficultés à ordonner le Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Prendre la responsabilité de l'ordonnancement.", correct: false },
            { text: "B. Fournir des conseils et coacher le Product Owner pour optimiser l'ordonnancement.", correct: true },
            { text: "C. Affecter des tâches aux développeurs pour aider.", correct: false },
            { text: "D. Demander l'intervention des parties prenantes.", correct: false }
        ]
    },
    {
        question: "Que signifie le terme « inspection » dans le cadre Scrum ? (1 réponse)",
        options: [
            { text: "A. Examiner les progrès pour détecter les écarts indésirables par rapport à l'objectif.", correct: true },
            { text: "B. Évaluer la performance individuelle de chaque membre de l'équipe.", correct: false },
            { text: "C. Valider la conformité avec les processus de l'entreprise.", correct: false },
            { text: "D. Examiner le Product Backlog à chaque Daily Scrum.", correct: false }
        ]
    },
    {
        question: "Quel est le rôle du Scrum Master pendant le Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Faciliter la réunion.", correct: false },
            { text: "B. Observer et coacher l'équipe pour l'aider à rester concentrée.", correct: true },
            { text: "C. Mettre à jour le Sprint Backlog.", correct: false },
            { text: "D. Assigner des tâches.", correct: false }
        ]
    },
    {
        question: "Qu'est-ce que l'équipe Scrum devrait faire si elle ne peut pas atteindre l'objectif du Sprint ? (1 réponse)",
        options: [
            { text: "A. Prolonger le Sprint jusqu'à ce que l'objectif soit atteint.", correct: false },
            { text: "B. Adopter les leçons apprises pour améliorer la planification des Sprints futurs.", correct: true },
            { text: "C. Considérer le Sprint comme un échec et passer à autre chose.", correct: false },
            { text: "D. Réduire la Définition de Fini.", correct: false }
        ]
    },
    {
        question: "Quelle est la responsabilité du Product Owner dans une équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Assigner les tâches aux développeurs.", correct: false },
            { text: "B. Maximiser la valeur du produit et gérer le Product Backlog.", correct: true },
            { text: "C. Surveiller la productivité de l'équipe.", correct: false },
            { text: "D. Assurer la satisfaction des parties prenantes.", correct: false }
        ]
    },
    {
        question: "Quand un élément du Product Backlog est-il considéré comme terminé ? (1 réponse)",
        options: [
            { text: "A. Lorsqu'il est testé et validé par les utilisateurs.", correct: false },
            { text: "B. Lorsqu'il respecte la Définition de Fini.", correct: true },
            { text: "C. Lorsqu'il est examiné lors de la revue de Sprint.", correct: false },
            { text: "D. Lorsque le Scrum Master l'approuve.", correct: false }
        ]
    },
    {
        question: "Le Product Owner peut-il déléguer certaines de ses responsabilités ? (1 réponse)",
        options: [
            { text: "A. Oui, à un membre de l'équipe de développement.", correct: false },
            { text: "B. Oui, mais il en reste responsable.", correct: true },
            { text: "C. Non, toutes les responsabilités doivent être assumées personnellement.", correct: false },
            { text: "D. Oui, à un Scrum Master.", correct: false }
        ]
    },
    {
        question: "Pourquoi la transparence est-elle importante dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Elle garantit que les objectifs de performance sont visibles pour la direction.", correct: false },
            { text: "B. Elle permet une inspection et une adaptation efficace des processus et des produits.", correct: true },
            { text: "C. Elle permet d'éviter les réunions inutiles.", correct: false },
            { text: "D. Elle permet de maximiser la productivité individuelle.", correct: false }
        ]
    },
    {
        question: "Quand un Sprint peut-il être annulé ? (1 réponse)",
        options: [
            { text: "A. Lorsqu'il est clair que l'objectif du Sprint ne peut pas être atteint.", correct: true },
            { text: "B. Lorsqu'un membre de l'équipe est absent.", correct: false },
            { text: "C. Lorsqu'il y a un changement dans le calendrier de l'entreprise.", correct: false },
            { text: "D. Lorsqu'une partie prenante demande un nouvel élément en cours de Sprint.", correct: false }
        ]
    },
    {
        question: "Pourquoi est-il important d'avoir une Définition de Fini dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Pour déterminer les membres de l'équipe responsables des différentes tâches.", correct: false },
            { text: "B. Pour garantir que chaque incrément est potentiellement livrable et de qualité appropriée.", correct: true },
            { text: "C. Pour suivre les performances des membres de l'équipe.", correct: false },
            { text: "D. Pour prioriser les éléments du Product Backlog.", correct: false }
        ]
    },
    {
        question: "Qui est responsable de la productivité de l'équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Le Product Owner.", correct: false },
            { text: "B. Le Scrum Master.", correct: false },
            { text: "C. L'équipe Scrum dans son ensemble.", correct: true },
            { text: "D. Le chef de projet.", correct: false }
        ]
    },
    {
        question: "Que doit faire l'équipe de développement si elle se rend compte qu'elle ne peut pas accomplir tout le travail prévu dans le Sprint Backlog ? (1 réponse)",
        options: [
            { text: "A. Informer le Product Owner et collaborer pour ajuster le Sprint Backlog.", correct: true },
            { text: "B. Demander une extension du Sprint.", correct: false },
            { text: "C. Retirer des éléments sans en informer le Product Owner.", correct: false },
            { text: "D. Terminer les tâches essentielles et ignorer les autres.", correct: false }
        ]
    },
    {
        question: "Le Scrum Master peut-il être membre de l'équipe de développement ? (1 réponse)",
        options: [
            { text: "A. Oui, si cela ne compromet pas ses responsabilités en tant que Scrum Master.", correct: true },
            { text: "B. Non, car cela crée un conflit d'intérêts.", correct: false },
            { text: "C. Oui, mais uniquement dans les Sprints initiaux.", correct: false },
            { text: "D. Non, le Scrum Master doit être entièrement indépendant.", correct: false }
        ]
    },
    {
        question: "Quel est l'objectif de la rétrospective du Sprint ? (1 réponse)",
        options: [
            { text: "A. Planifier les éléments du Product Backlog pour le prochain Sprint.", correct: false },
            { text: "B. Discuter des leçons apprises et identifier des pistes d'amélioration pour les prochains Sprints.", correct: true },
            { text: "C. Noter les performances des membres de l'équipe.", correct: false },
            { text: "D. Examiner la vélocité du Sprint.", correct: false }
        ]
    },
    {
        question: "Que signifie le concept d'adaptation dans le cadre Scrum ? (1 réponse)",
        options: [
            { text: "A. Changer les membres de l'équipe en fonction des besoins du projet.", correct: false },
            { text: "B. Ajuster les processus ou le Product Backlog en fonction des retours d'inspection.", correct: true },
            { text: "C. Mettre à jour les objectifs de performance.", correct: false },
            { text: "D. Réviser la Définition de Fini à chaque Daily Scrum.", correct: false }
        ]
    },
    {
        question: "Pourquoi est-il important que les développeurs soient impliqués dans la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Pour s'assurer que chaque membre ait une tâche assignée.", correct: false },
            { text: "B. Pour permettre une meilleure estimation et compréhension du travail à accomplir.", correct: true },
            { text: "C. Pour réduire la charge de travail du Scrum Master.", correct: false },
            { text: "D. Pour que les développeurs puissent assigner des tâches aux autres.", correct: false }
        ]
    },
    {
        question: "Quel est le principal avantage d'avoir un Product Backlog bien ordonné ? (1 réponse)",
        options: [
            { text: "A. Il aide à identifier les dépendances entre équipes.", correct: false },
            { text: "B. Il maximise la transparence sur les priorités du produit.", correct: true },
            { text: "C. Il permet de suivre la vélocité de l'équipe.", correct: false },
            { text: "D. Il aide à répartir les tâches entre les membres.", correct: false }
        ]
    },
    {
        question: "Le Scrum Master a-t-il autorité pour changer la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Oui, le Scrum Master peut la changer si nécessaire.", correct: false },
            { text: "B. Non, seul le Product Owner peut la changer.", correct: false },
            { text: "C. Non, elle doit être décidée par l'équipe Scrum dans son ensemble.", correct: true },
            { text: "D. Oui, mais seulement au début du Sprint.", correct: false }
        ]
    },
    {
        question: "Quel est le rôle des parties prenantes dans un projet Scrum ? (1 réponse)",
        options: [
            { text: "A. Affecter des tâches aux membres de l'équipe de développement.", correct: false },
            { text: "B. Observer la revue de Sprint et donner des retours sur l'incrément produit.", correct: true },
            { text: "C. Définir la Définition de Fini.", correct: false },
            { text: "D. Suivre la vélocité de l'équipe Scrum.", correct: false }
        ]
    },
    {
        question: "Quelle est la responsabilité principale des développeurs dans une équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Ordonnancer les éléments du Product Backlog.", correct: false },
            { text: "B. Créer un incrément potentiel et terminé du produit.", correct: true },
            { text: "C. Gérer la satisfaction des parties prenantes.", correct: false },
            { text: "D. Surveiller la productivité de l'équipe.", correct: false }
        ]
    },
    {
        question: "Que signifie le terme « Done » dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Un élément du Product Backlog a été entièrement développé, testé et respecte la Définition de Fini.", correct: true },
            { text: "B. Un élément du Product Backlog a été partiellement terminé et est prêt pour la revue de Sprint.", correct: false },
            { text: "C. Un élément du Product Backlog a été approuvé par les parties prenantes.", correct: false },
            { text: "D. Un élément du Product Backlog a été revu par le Product Owner.", correct: false }
        ]
    }
]