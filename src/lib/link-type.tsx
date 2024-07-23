
// Bonne pratique pour assigner le type de lien (interne / externe) 
// pour ne pas les appeler en String dans le code pour eviter 
// d'avoir trop de proposition lors d'une erreur, ici la proprieté INTERNAL 
// sera unique car on l'a crée nous meme et assigné à "internal" on fait ceci 
// pour eviter les problèmes de recherche lors d'un bug en gros.

export type LinkType = "internal" | "external"

// le Record<string, LinkType> rajoute de la sécurité, string indique qu'il faut impérativement
//  que ce soit une chaine de caractère et LinkType indique qu'il faut que ce soit les propositions
//   de LinkType, ici "external" et "internal". en cas de doute cf: vidéo 11 dernier chapitre.

export const LinkTypes: Record<string, LinkType> = {
    INTERNAL: "internal",
    EXTERNAL: "external",
}