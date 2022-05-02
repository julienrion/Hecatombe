// MAP

let List_Map = [
  ["_", "_", "_", "_", "_", "_"],
  ["_", "Map009.png", "Map010.png", "_", "Map004.png", "Map006.png", "_"],
  ["_", "Map008.png", "Map011.png", "Map012.png", "Map014.png", "_"],
  ["_", "Map003.png", "Map001.png", "Map002.png", "Map013.png", "_"],
  ["_", "Map007.png", "Map005.png", "_", "_"],
  ["_", "_", "_"],
];

let index_Y = 3;
let index_X = 2;
let Player_onMap = List_Map[index_Y][index_X];

let ligne = 3;
let colonne = 2;

let localisation = document.querySelector(".localisation");
localisation.style.gridColumn = colonne;
localisation.style.gridRow = ligne;


function ChangeMap(Y, X) {
  if (player.y >= 368 && List_Map[Y + 1][X] != "_") {
    Y++;
    ligne++;
    index_Y = Y;
    player.y = 0;
    localisation.style.gridRow = ligne;
  }else if (player.y <= 0 && Player_onMap == List_Map[2][4] && inventoryList.indexOf("key") == -1) {
    console.log('tu peux pas rentrer')
    
  }
   else if (player.y <= 0 && List_Map[Y - 1][X] != "_") {
    Y--;
    ligne--;
    index_Y = Y;
    player.y = 360;
    localisation.style.gridRow = ligne;
  } else if (player.x <= 0 && List_Map[Y][X - 1] != "_") {
    X--;
    colonne--;
    index_X = X;
    player.x = 768;
    localisation.style.gridColumn = colonne;
  } else if (
    player.x >= 768 &&
    List_Map[Y][X + 1] != "_" &&
    List_Map[Y][X + 1] != "Map006.png"
  ) {
    X++;
    colonne++;
    index_X = X;
    player.x = 0;
    localisation.style.gridColumn = colonne;
  }
  // dernière map du jeu
  else if (player.x >= 768 && List_Map[Y][X + 1] == "Map006.png") {
    X++;
    colonne++;
    index_X = X;
    player.x = 0;
    player.y = 68;
    localisation.style.gridColumn = colonne;
  }
  Map_directory = "assets/" + List_Map[Y][X];
  background.src = Map_directory;
  Player_onMap = List_Map[Y][X];
  fire_ball_direction = false;
  return;
}


Collisions = {
    // "Map" : [[bas gauche], [bas droite], [haut droite],[haut gauche]]
    
    "Map001.png" : [
        [314, 218],[602, 218],[602, 90],[314, 90], // maison
        [202,74],[762,74],[762,10],[202,10], // arbre du haut
        [170,42],[202,42],[202,0],[170,0], // arbre du haut 
        [2,266],[26,266],[26,194],[2,194], // arbre bas gauche
        [25,274],[74,274],[74,218],[25,218], // arbre bas gauche
        [73,252],[146,252],[146,218],[74,218], // arbre bas gauche
        [145,314],[202,314],[202,234],[145,234], // arbre bas gauche
        [90,338],[170,338],[170,314],[90,314], // arbre bas gauche
        [50,370],[106,370],[106,338],[50,346], // arbre bas gauche
        [578,360],[578,360],[650,330],[578,330], // arbre bas droite
        [650,360],[714,360],[714,314],[650,314], // arbre bas droite
        [713,360],[770,360],[770, 330],[713,330], // arbre bas droite
        [618,90],[650,90],[650,66],[618,66], // tombe
    ],
    "Map002.png" : [
        [8,314],[192,314],[192,186],[8,186], // maison bas gauche
        [0,370],[760,370],[760,354],[0,354], // barrière en bas
        [96,370],[192,370],[192,282],[96,282], // arbres en bas gauche
        [184,370],[384,370],[384,250],[184,250], // maison bas
        [272,258],[360,258],[360,210],[272,210], // arbre
        [368,258],[416,258],[416,218],[368,218], // panneau de quête
        [440,298],[544,298],[544,218],[440,218], // arbre
        [520,370],[768,370],[768,226],[520,226], // maison droit
        [0,106],[96,106],[96,2],[0,2], // arbres haut gauche
        [64,122],[120,122],[120,42],[64,42], // arbre haut gauche
        [116,98],[416,98],[416,0],[116,0], // maison haut gauche
        [152,114],[200,114],[200,90],[152,90], // tonneaux haut gauche
        [240,130],[312,130],[312,90],[240,90], // arbre devant maison haut gauche
        [288,162],[376,162],[376,90],[288,90], // arbre
        [368,154],[448,154],[448,74],[368,74], // arbre devant maison droite
        [440,122],[600,122],[600,0],[440,0], // maison droite
        [512,130],[568,130],[568,0],[512,0], // tonneau devant maison droite
        [544,186],[616,186],[616,90],[544,90], // arbre devant maison droite
        [592,26],[760,26],[760,0],[592,0], // barrière & arbres droit
        [744,138],[760,138],[760,18],[744,18], // arbres bord de map droite
        [752,232],[768,232],[768,202],[752,202], // arbres bas droit
    ],
    "Map003.png" : [
        [272,138],[312,138],[312,98],[272,98], // bord de l'eau
        [240,2],[280,2],[280,0],[240,0], // bord de l'eau
        [216,42],[248,42],[248,2],[216,2], // bord de l'eau
        [192,98],[224,98],[224,50],[192,50], // bord de l'eau
        [112,154],[192,154],[192,98],[112,98], // bord de l'eau
        [96,186],[120,186],[120,154],[96,154], // bord de l'eau 
        [112,226],[224,226],[224,178],[112,178], // bord de l'eau
        [216,258],[248,258],[248,218],[216,218], // bord de l'eau 
        [240,306],[272,306],[272,242],[240,242], // bord de l'eau
        [264,330],[304,330],[304,298],[264,298], // bord de l'eau
        [272,362],[328,362],[328,322],[272,322], // bord de l'eau
        [300,368],[352,368],[352,346],[300,346], // bord de l'eau
        [528,368],[576,368],[576,330],[528,330], // arbre bas droite
        [552,328],[592,328],[592,304],[552,304], // arbre bas droite
        [568,304],[608,304],[608,264],[568,264], // arbre bas droite
        [576,290],[648,290],[648,258],[576,258], // arbre bas droite
        [640,282],[720,282],[720,242],[640,242], // arbre bas droite
        [712,282],[752,282],[752,234],[712,234], // arbre bas droite
        [744,282],[768,282],[768,210],[744,210], // arbre bas droite
    ],
    "Map004.png" : [
        [288,320],[328,320],[328,272],[288,272], // statue brisée
        [0,368],[352,368],[352,360],[0,360], // bordure de map gauche
        [400,368],[760,368],[760,360],[400,360], // bordure de map droite
        [152,368],[232,368],[232,344],[152,344], // bord de map noir
        [120,352],[176,352],[176,320],[120,320], // bord de map noir
        [96,328],[144,328],[144,264],[96,264], // bord de map noir
        [88,272],[120,272],[120,232],[88,232], // bord de map noir
        [48,232],[144,232],[144,184],[48,184], // bord de map noir
        [112,192],[144,192],[144,152],[112,152], // bord de map noir
        [0,192],[64,192],[64,48],[0,48], // bord de map noir & lave
        [0,56],[16,56],[16,0],[0,0], // bord de map noir
        [8,24],[40,24],[40,0],[8,0], // bord de map noir
        [600,24],[648,24],[648,0],[600,0], // bord de map noir droite
        [624,136],[760,136],[760,16],[624,16], // bord de map noir et pont
        [624,232],[768,232],[768,152],[624,152], // pont bas
        [592,224],[632,224],[632,192],[592,192], // lave
        [560,240],[600,240],[600,208],[560,208], // lave
        [544,288],[616,288],[616,232],[544,232], // lave
        [592,368],[672,368],[672,280],[592,280], // lave
        [560,80],[608,80],[608,16],[560,16], // tour
        [488,72],[544,72],[544,8],[488,8], // statue chevalier
        [480,168],[528,168],[528,96],[480,96], // tour
        [424,216],[472,216],[472,152],[424,152], // tour
        [432,296],[472,296],[472,256],[432,256], // statue brisée
        [432,368],[472,368],[472,312],[432,312], // tour
        [384,336],[432,336],[432,296],[384,296], // statue brisée
        [240,368],[296,368],[296,312],[240,312], // tour
        [240,296],[288,296],[288,232],[240,232], // tour
        [248,216],[288,216],[288,176],[248,176], // statue brisée
        [184,168],[240,168],[240,96],[184,96], // tour
        [104,80],[224,80],[224,16],[104,16], // tour et statue
    ],
    "Map005.png" : [
        [538,104],[760,104],[760,0],[538,0], // arbres bord de la map droit
        [0,56],[138,56],[138,0],[0,0], // arbres bord de la map gauche
        [130,48],[170,48],[170,0],[130,0], // arbres bord de la map gauche
        [162,24],[210,24],[210,0],[162,0], // arbres bord de la map gauche
        [0,200],[106,200],[106,48],[0,48], // rocher gauche
        [98,224],[130,224],[130,152],[98,152], // rocher gauche
        [130,264],[210,264],[210,184],[130,184], // rocher gauche
        [162,192],[226,192],[226,152],[162,152], // rocher gauche
        [186,160],[226,160],[226,72],[186,72], // rocher gauche & vide
        [218,160],[306,160],[306,104],[218,104], // vide
        [250,112],[282,112],[282,72],[250,72], // vide
        [298,184],[330,184],[330,128],[298,128], // vide
        [226,240],[282,240],[282,152],[226,152], // vide 
        [210,320],[250,320],[250,232],[210,232], // vide
        [242,352],[386,352],[386,288],[242,288], // vide
        [376,344],[432,344],[432,312],[376,312], // vide
        [434,376],[490,376],[490,288],[434,288], // vide
        [698,376],[762,376],[762,288],[698,288], // vide
        [722,296],[770,296],[770,112],[722,112], // rocher bas droite
        [594,168],[730,168],[730,104],[594,104], // rocher & tombe
        [482,136],[600,136],[600,72],[482,72], // rocher
        [426,216],[554,216],[554,128],[426,128], // rocher & vide
        [410,264],[466,264],[466,208],[410,208], // vide
        [458,264],[490,264],[490,232],[458,232], // vide
        [370,208],[418,208],[418,176],[370,176], // vide
        [354,264],[386,264],[386,128],[354,128], // vide
        [330,264],[362,264],[362,232],[330,232], // vide
        [378,136],[490,136],[490,104],[378,104], // vide
    ],
    "Map006.png" : [
        [8,124],[64,124],[64,76],[8,76], // bord de map noir
        [0,52],[72,52],[72,0],[0,0], // bord de map noir & tour
        [64,20],[688,20],[688,0],[64,0], // bord de map noir 
        [88,44],[120,44],[120,12],[88,12], // rebord noir
        [224,44],[280,44],[280,12],[224,12], // rebord noir
        [408,44],[440,44],[440,12],[408,12], // rebord noir
        [560,68],[696,68],[696,12],[560,12], // rebord noir
        [144,36],[192,36],[192,12],[144,12], // statue
        [56,148],[488,148],[488,100],[56,100], // bord de map noir
        [488,52],[536,52],[536,12],[488,12], // statue
        [136,108],[232,108],[232,76],[136,76], // rebord noir
        [168,84],[200,84],[200,68],[168,68], // rebord noir
        [352,108],[392,108],[392,84],[352,84], // rebord noir
        [480,148],[528,148],[528,76],[480,76], // statue
        [256,236],[576,236],[576,132],[256,132], // rebord noir
        [624,132],[704,132],[704,60],[624,60], // bord de map noir
        [672,188],[728,188],[728,124],[672,124], // bord de map & tour brisée
        [696,244],[728,244],[728,180],[696,180], // rebord noir
        [640,284],[702,284],[702,204],[640,204], // bord de map noir & statue
        [600,308],[688,308],[688,260],[600,260], // bord de map noir
        [456,348],[608,348],[608,284],[456,284], // bord de map noir
        [80,348],[440,348],[440,284],[80,284], // bord de map & statue brisée
        [424,348],[464,348],[464,316],[424,316], // bord de map noir
        [408,260],[520,260],[520,228],[408,228], // bord de map noir
        [328,292],[360,292],[360,268],[328,268], // bord de map noir
        [112,260],[280,260],[280,196],[112,196], // bord de map noir
        [64,204],[144,204],[144,180],[64,180], // bord de map noir
        [32,188],[80,188],[80,140],[32,140], // bord de map noir     
        [0,156],[40,156],[40,140],[0,140], // bord de map noir
        [0,356],[16,356],[16,156],[0,156], // bord de map noir
        [8,348],[48,348],[48,284],[8,284], // statue 
        [40,348],[88,348],[88,316],[40,316], // bord de map noir
        [32,276],[80,276],[80,252],[32,252], // FIN DU GAME 
    ],
    "Map007.png" : [
        [288,24],[352,24],[352,0],[288,0], // bord de l'eau
        [264,48],[304,48],[304,24],[264,24], // bord de l'eau
        [240,72],[280,72],[280,48],[240,48], // bord de l'eau
        [184,96],[256,96],[256,72],[184,72], // bord de l'eau
        [160,128],[200,128],[200,96],[160,96], // bord de l'eau
        [136,160],[168,160],[168,128],[136,128], // bord de l'eau
        [112,176],[144,176],[144,160],[112,160], // bord de l'eau
        [40,232],[120,232],[120,176],[40,176], // bord de l'eau et roches
        [112,296],[184,296],[184,224],[112,224], // roches
        [184,352],[248,352],[248,280],[184,280], // roches
        [240,360],[360,360],[360,344],[240,344], // bord de l'eau et roches
        [328,352],[416,352],[416,288],[328,288], // roches
        [408,352],[448,352],[448,320],[408,320], // bord de l'eau
        [440,328],[520,328],[520,264],[440,264], // bord de l'eau et tonneaux
        [488,264],[544,264],[544,168],[488,168], // arbres 
        [536,168],[584,168],[584,136],[536,136], // arbres
        [584,144],[640,144],[640,104],[584,104], // arbres
        [616,104],[664,104],[664,32],[616,32], // arbres
        [648,32],[696,32],[696,0],[648,0], // arbres 
        [544,8],[648,8],[648,0],[544,0], // arbres
    ],
    "Map008.png" : [
        [232,360],[272,360],[272,328],[232,328], // bord de l'eau
        [256,336],[296,336],[296,248],[256,248], // bord de l'eau
        [304,328],[344,328],[344,280],[304,280], // palmier bord de l'eau
        [512,328],[552,328],[552,272],[512,272], // palmier centre
        [272,256],[328,256],[328,192],[272,192], // bord de l'eau
        [320,248],[368,248],[368,192],[320,192], // palmier bord de l'eau
        [296,208],[368,208],[368,136],[296,136], // bord de l'eau
        [624,184],[664,184],[664,120],[624,120], // palmier
        [536,104],[576,104],[576,48],[536,48], // palmier
        [360,104],[408,104],[408,48],[360,48], // palmier
        [280,136],[352,136],[352,112],[280,112], // bord de l'eau
        [256,120],[296,120],[296,88],[256,88], // bord de l'eau 
        [152,160],[256,160],[256,104],[152,104], // bord de l'eau
        [152,112],[200,112],[200,48],[152,48], // palmier & tombe
        [160,48],[232,48],[232,0],[160,0], // palmier bord de l'eau
        [264,72],[304,72],[304,24],[264,24], // palmier bord de l'eau
        [664,80],[704,80],[704,16],[664,16], // palmier bord droit de la map
    ],
    "Map009.png" : [
        [8,376],[64,376],[64,272],[8,272], // bord de l'eau
        [56,280],[112,280],[112,216],[56,216], // bord de l'eau
        [32,224],[80,224],[80,160],[32,160], // bord de l'eau
        [80,160],[296,160],[296,104],[80,104], // bord de l'eau
        [296,128],[328,128],[328,80],[296,80], // bord de l'eau
        [328,104],[432,104],[432,56],[328,56], // bord de l'eau
        [432,72],[456,72],[456,32],[432,32], // bord de l'eau
        [456,48],[488,48],[488,8],[456,8], // bord de l'eau
        [488,16],[536,16],[536,0],[488,0], // bord de l'eau
        [528,48],[592,48],[592,16],[528,16], // bord de l'eau
        [576,72],[752,72],[752,40],[576,40], // bord de l'eau
        [712,104],[768,104],[768,72],[712,72], // bord de l'eau
        [520,112],[560,112],[560,56],[520,56], // palmier bord de l'eau
        [712,256],[752,256],[752,200],[712,200], // palmier bord droit de la map
        [240,216],[280,216],[280,152],[240,152], // palmier bord de l'eau
        [96,192],[144,192],[144,152],[96,152], // palmier bord de l'eau
        [496,368],[536,368],[536,296],[496,296], // plamier bord bas de la map 
        [248,368],[296,368],[296,304],[248,304], // plamier bord bas de la map
    ],
    "Map010.png" : [
        [0,96],[8,96],[8,56],[0,56], // bord de l'eau
        [8,72],[256,72],[256,8],[8,8], // palmier et bord de l'eau
        [240,48],[336,48],[336,8],[240,8], // bord de l'eau
        [304,72],[360,72],[360,40],[304,40], // bord de l'eau
        [306,72],[360,72],[360,40],[306,40], // bord de l'eau
        [330,96],[434,96],[434,64],[330,64], // bord de l'eau
        [434,72],[466,72],[466,40],[434,40], // bord de l'eau
        [450,136],[490,136],[490,72],[450,72], // palmier et bord de l'eau
        [466,104],[562,104],[562,0],[466,0], // Bord de l'eau
        [522,152],[578,152],[578,8],[522,8], // Bord de l'eau et pont côté gauche
        [562,24],[714,24],[714,0],[562,0], // bord de l'eau et tombe
        [706,48],[754,48],[754,18],[706,18], // bord de l'eau
        [730,120],[762,120],[762,48],[730,48], // bord de l'eau
        [706,152],[738,152],[738,104],[706,104], // bord de l'eau
        [634,168],[714,168],[714,136],[634,136], // bord de l'eau
        [602,184],[650,184],[650,112],[602,112], // bord de l'eau et pont côté droit
        [626,208],[674,208],[674,168],[626,168], // bord de l'eau
        [658,240],[690,240],[690,200],[658,200], // bord de l'eau
        [650,304],[690,304],[690,240],[650,240], // bord de l'eau
        [682,264],[706,264],[706,240],[682,240], // bord de l'eau
        [706,368],[730,368],[730,264],[706,264], // bord de l'eau 
        [330,264],[370,264],[370,200],[330,200], // palmier
        [34,176],[74,176],[74,112],[34,112], // palmier
        [578,360],[626,360],[626,304],[578,304], // palmier
    ],
    "Map011.png" : [
        [682,24],[730,24],[730,0],[682,0], // bord de l'eau
        [626,56],[690,56],[690,8],[626,8],  // bord de l'eau
        [546,72],[634,72],[634,24],[546,24], // bord de l'eau
        [498,96],[554,96],[554,56],[498,56], // bord de l'eau
        [466,184],[570,184],[570,80],[466,80], // bord de l'eau
        [522,320],[642,320],[642,176],[522,176], // bord de l'eau
        [410,160],[450,160],[450,104],[410,104], // palmier au bord de l'eau
        [426,72],[466,72],[466,0],[426,0], // palmier
        [514,48],[554,48],[554,0],[514,0], // palmier au bord de l'eau
        [146,368],[186,368],[186,336],[146,336], // arbres
        [162,360],[274,360],[274,336],[162,336], // arbres
        [210,344],[290,344],[290,312],[210,312], // arbres
        [242,320],[322,320],[322,280],[242,280], // arbres
        [266,280],[450,280],[450,248],[266,248], // arbres
        [442,256],[530,256],[530,240],[442,240], // arbres
    ],
    "Map012.png" : [
        [744,80],[768,80],[768,0],[744,0], // rochers haut
        [672,24],[728,24],[728,0],[672,0], // rochers & bord de l'eau
        [672,72],[704,72],[704,16],[672,16], // bord de l'eau
        [624,104],[680,104],[680,64],[624,64], // bord de l'eau
        [536,128],[648,128],[648,96],[536,96], // bord de l'eau
        [496,168],[576,168],[576,120],[496,120], // bord de l'eau & tombe
        [400,184],[552,184],[552,160],[400,160], // bord de l'eau
        [352,336],[496,336],[496,176],[352,176], // foret
        [280,368],[432,368],[432,328],[280,328], // foret
        [428,376],[760,376],[760,360],[428,360], // barrière en bas de map
        [488,304],[560,304],[560,248],[488,248], // arbre
        [488,256],[552,256],[552,216],[488,216], // arbre
        [656,368],[768,368],[768,312],[656,312], // arbre en bas droite
    ],
    "Map013.png" : [
        [0,98],[32,98],[32,24],[0,24], // arbres haut gauche
        [16,34],[72,34],[72,0],[16,0], // arbres haut gauche
        [64,16],[96,16],[96,0],[64,0], // arbres haut gauche
        [0,282],[32,282],[32,210],[0,210], // arbres bas gauche
        [0,362],[40,362],[40,274],[0,274], // arbres bas gauche
        [32,362],[472,362],[472,330],[32,330], // arbres bas gauche
        [56,338],[128,338],[128,306],[56,306], // arbres bas gauche
        [120,362],[176,362],[176,314],[120,314], // arbres bas gauche
        [248,362],[400,362],[400,306],[248,306], // arbres bas gauche
        [392,362],[762,362],[762,314],[392,314], // arbres et rocher bas gauche
        [512,322],[552,322],[552,282],[512,282], // rocher
        [696,322],[760,322],[760,258],[696,258], // rochers
        [720,266],[768,266],[768,106],[720,106], // rochers
        [664,218],[728,218],[728,178],[664,178], // rochers
        [696,186],[728,186],[728,130],[696,130], // rochers
        [672,58],[776,58],[776,0],[672,0], // rochers & tombe
        [648,90],[744,90],[744,50],[648,50], // arbre devant tombe
        [656,58],[680,58],[680,0],[656,0], // arbre devant tombe
        [512,186],[552,186],[552,130],[512,130], // rochers
        [480,138],[520,138],[520,98],[480,98], // rocher
        [432,58],[472,58],[472,18],[432,18], // rocher
        [512,32],[552,32],[552,0],[512,0], // rocher
        [312,114],[408,114],[408,34],[312,34], // arbre
        [152,114],[248,114],[248,74],[152,74], // arbre
        [160,82],[240,82],[240,34],[160,34], // arbre
    ],
    "Map014.png" : [
        [0,368],[96,368],[96,328],[0,328], // arbre bas gauche
        [352,280],[384,280],[384,248],[352,248], // tombe
        [600,360],[760,360],[760,304],[600,304], // arbre bas droite
        [656,312],[760,312],[760,240],[656,240], // arbre bas droite
        [664,248],[664,216],[760,216],[664,216], // arbre droite
        [688,224],[768,224],[768,144],[688,144], // arbre droite
        [704,152],[760,152],[760,72],[704,72], // arbres et rocher
        [672,112],[712,112],[7712,72],[672,72], // rocher
        [744,80],[768,80],[768,0],[744,0], // rochers
        [688,56],[752,56],[752,0],[688,0], // rochers & pilier détruit
        [400,32],[696,32],[696,0],[400,0], // mur droit du donjon
        [592,216],[632,216],[632,136],[592,136], // pilier tonneau
        [560,208],[600,208],[600,168],[560,168], // tonneau
        [448,80],[496,80],[496,24],[448,24], // pillier droit devant donjon
        [0,32],[344,32],[344,0],[0,0], // mur gauche du donjon
        [312,48],[352,48],[352,0],[312,0], // pilier à gauche de la porte
        [184,56],[232,56],[232,0],[184,0], // pilier gauche
        [8,128],[64,128],[64,64],[8,64], // pilier
        [0,64],[24,64],[24,32],[0,32], // tonneau & rocher gauche
    ],
};

function CheckCollisions() {
    for (key in Collisions) {
      if (Player_onMap == key) {
        map = Collisions[key];
      }
    }
    var i = 0;
    while (i < map.length) {
      // canvas qui change de position
      if (
        (player.x >= map[i][0] &&
          player.x <= map[i + 1][0] &&
          player.y == map[i][1] &&
          player.y == map[i + 1][1]) ||
        (player.x >= map[i][0] &&
          player.x <= map[i + 1][0] &&
          player.y == map[i][1] - 2 &&
          player.y == map[i + 1][1] - 2)
      ) {
        MoveTop = false;
        console.log("ok");
      } else if (
        (player.x == map[i][0] &&
          player.x == map[i + 3][0] &&
          player.y <= map[i][1] &&
          player.y >= map[i + 3][1]) ||
        (player.x == map[i][0] - 2 &&
          player.x == map[i + 3][0] - 2 &&
          player.y <= map[i][1] &&
          player.y >= map[i + 3][1])
      ) {
        // bug canvas qui bouge, j'ai rajouté une condition "ou"
        MoveRight = false;
      } else if (
        (player.x == map[i + 1][0] &&
          player.x == map[i + 2][0] &&
          player.y <= map[i + 1][1] &&
          player.y >= map[i + 2][1]) ||
        (player.x == map[i + 1][0] - 2 &&
          player.x == map[i + 2][0] - 2 &&
          player.y <= map[i + 1][1] &&
          player.y >= map[i + 2][1])
      ) {
        // bug canvas qui bouge, j'ai rajouté une condition "ou"
        MoveLeft = false;
      } else if (
        (player.x <= map[i + 2][0] &&
          player.x >= map[i + 3][0] &&
          player.y == map[i + 2][1] &&
          player.y == map[i + 3][1]) ||
        (player.x <= map[i + 2][0] &&
          player.x >= map[i + 3][0] &&
          player.y == map[i + 2][1] - 2 &&
          player.y == map[i + 3][1] - 2)
      ) {
        MoveBottom = false;
      }
      i = i + 4; // incrémentation par 4 car un objet = 4 points
    }
  
    return;
  }