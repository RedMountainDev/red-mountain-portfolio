import {IExperienceCategory} from '../../interfaces/IExperienceCategory';
import {csharpCat} from './XpAreas/CSharp/csharpCat';
import {databaseCat} from './XpAreas/database/databaseCat';
import {buildCat} from './XpAreas/Build Tools/buildCat';
import {javascriptCat} from './XpAreas/JavaScript/javascriptCat';
import {cssCat} from './XpAreas/CSS/cssCat';
import {htmlCat} from './XpAreas/HTML/htmlCat';
import {certificationsCat} from './XpAreas/Certifications/certificationsCat';
import {phpCat} from './XpAreas/php/phpCat';

export const XpCategories: IExperienceCategory[] = [
  certificationsCat,
  csharpCat,
  javascriptCat,
  cssCat,
  htmlCat,
  phpCat,
  databaseCat,
  buildCat
];
