/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameLevel } from './types';

export const GAME_LEVELS: GameLevel[] = [
  {
    id: 1,
    verb: "Hablar (Խոսել)",
    pairs: [
      { id: "h1", hy: "Ես խոսում եմ", es: "Yo hablo" },
      { id: "h2", hy: "Դու խոսում ես", es: "Tú hablas" },
      { id: "h3", hy: "Նա խոսում է", es: "Él habla" },
      { id: "h4", hy: "Մենք խոսում ենք", es: "Nosotros hablamos" },
      { id: "h5", hy: "Դուք խոսում եք", es: "Vosotros habláis" },
      { id: "h6", hy: "Նրանք խոսում են", es: "Ellos hablan" },
    ]
  },
  {
    id: 2,
    verb: "Comer (Ուտել)",
    pairs: [
      { id: "c1", hy: "Ես ուտում եմ", es: "Yo como" },
      { id: "c2", hy: "Դու ուտում ես", es: "Tú comes" },
      { id: "c3", hy: "Նա ուտում է", es: "Él come" },
      { id: "c4", hy: "Մենք ուտում ենք", es: "Nosotros comemos" },
      { id: "c5", hy: "Դուք ուտում եք", es: "Vosotros coméis" },
      { id: "c6", hy: "Նրանք ուտում են", es: "Ellos comen" },
    ]
  },
  {
    id: 3,
    verb: "Vivir (Ապրել)",
    pairs: [
      { id: "v1", hy: "Ես ապրում եմ", es: "Yo vivo" },
      { id: "v2", hy: "Դու ապրում ես", es: "Tú vives" },
      { id: "v3", hy: "Նա ապրում է", es: "Él vive" },
      { id: "v4", hy: "Մենք ապրում ենք", es: "Nosotros vivimos" },
      { id: "v5", hy: "Դուք ապրում եք", es: "Vosotros vivís" },
      { id: "v6", hy: "Նրանք ապրում են", es: "Ellos viven" },
    ]
  },
  {
    id: 4,
    verb: "Llevar (Տանել/Կրել)",
    pairs: [
      { id: "l1", hy: "Ես տանում եմ", es: "Yo llevo" },
      { id: "l2", hy: "Դու տանում ես", es: "Tú llevas" },
      { id: "l3", hy: "Նա տանում է", es: "Él lleva" },
      { id: "l4", hy: "Մենք տանում ենք", es: "Nosotros llevamos" },
      { id: "l5", hy: "Դուք տանում եք", es: "Vosotros lleváis" },
      { id: "l6", hy: "Նրանք տանում են", es: "Ellos llevan" },
    ]
  }
];
