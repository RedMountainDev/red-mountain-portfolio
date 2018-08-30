import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';
import {mcsa} from './mcsa';
import {mcsd} from './mcsd';

export const certificationsCat: IExperienceCategory = {
  title: 'Certifications',
  areas: [
    mcsa,
    mcsd
  ]
};
