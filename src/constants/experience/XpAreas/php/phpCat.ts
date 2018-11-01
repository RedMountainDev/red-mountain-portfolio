import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';
import {php} from './php';
import {laravel} from './laravel';

export const phpCat: IExperienceCategory = {
  title: 'PHP',
  areas: [
    php, laravel
  ]
};

