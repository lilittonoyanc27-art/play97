/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MatchPair {
  id: string;
  hy: string;
  es: string;
}

export interface GameLevel {
  id: number;
  verb: string;
  pairs: MatchPair[];
}
