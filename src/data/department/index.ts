import { CE } from "./CE";
import { CPE } from "./CPE";
import { ECE } from "./ECE";
import { EE } from "./EE";
import { IE } from "./IE";
import { MFE } from "./MFE";
import { ME } from "./ME";
import { MEE } from "./MEE";

export const departments = {
  CE,
  CPE,
  ECE,
  EE,
  IE,
  MFE,
  ME,
  MEE,
} as const;

export type DeptCode = keyof typeof departments;