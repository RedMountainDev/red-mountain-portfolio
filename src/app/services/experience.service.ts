import {Injectable} from '@angular/core';
import {IExperienceCategory} from '../../interfaces/IExperienceCategory';
import {XpCategories} from '../../constants/experience/XpCategories';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {
  }

  // Gets Experience from the constants folder
  getExperience(): IExperienceCategory[] {
    return XpCategories;
  }

}
