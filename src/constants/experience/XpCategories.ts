import {IExperienceCategory} from '../../interfaces/IExperienceCategory';
import {csharpCat} from './XpAreas/CSharp/csharpCat';
import {backendCat} from './XpAreas/Backend/backendCat';
import {buildCat} from './XpAreas/Build Tools/buildCat';
import {javascriptCat} from './XpAreas/JavaScript/javascriptCat';
import {cssCat} from './XpAreas/CSS/cssCat';
import {htmlCat} from './XpAreas/HTML/htmlCat';

export const XpCategories: IExperienceCategory[] = [
  csharpCat,
  javascriptCat,
  cssCat,
  htmlCat,
  backendCat,
  buildCat
];
