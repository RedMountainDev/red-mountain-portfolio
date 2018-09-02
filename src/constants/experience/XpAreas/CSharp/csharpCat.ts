import {asp} from './asp';
import {csharp} from './csharp';
import {dotnet} from './dotnet';
import {IExperienceCategory} from '../../../../interfaces/IExperienceCategory';

export const csharpCat: IExperienceCategory = {
  title: 'C#',
  areas: [
    csharp, asp, dotnet
  ]
};
