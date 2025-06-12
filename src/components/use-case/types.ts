
import { LucideIcon } from 'lucide-react';

export interface Segment {
  id: string;
  icon: LucideIcon;
  nameEn: string;
  nameFi: string;
  descEn: string;
  descFi: string;
  challengesEn: string[];
  challengesFi: string[];
  solutionsEn: string[];
  solutionsFi: string[];
  color: string;
  lightColor: string;
}
