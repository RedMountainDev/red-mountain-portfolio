import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';
import {mysql} from './mysql';
import {mongodb} from './mongodb';

export const databaseCat: IExperienceCategory = {
  title: 'Database',
  areas: [
    mysql, mongodb
  ]
};
