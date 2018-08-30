import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';
import {express} from './express';
import {mongodb} from './mongodb';
import {php} from './php';

export const backendCat: IExperienceCategory = {
  title: 'Backend',
  areas: [
    express, php, mongodb
  ]
};
