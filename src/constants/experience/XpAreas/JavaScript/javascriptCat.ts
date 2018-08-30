import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';
import {javascript} from './javascript';
import {typescript} from './typescript';
import {angular} from './angular';
import {node} from './node';

export const javascriptCat: IExperienceCategory = {
  title: 'JavaScript',
  areas: [
    javascript,
    typescript,
    angular,
    node
  ]
};
