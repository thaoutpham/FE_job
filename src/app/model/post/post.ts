import {Category} from './category';
import {WorkForm} from './work-form';
import {Gender} from './gender';
import {Company} from '../company/company';
import {City} from './city';

export interface Post {
  id?: string;
  title?: string;
  category?: Category;
  salary?: string;
  address?: string;
  position?: string;
  exp?: string;
  workForm?: WorkForm;
  expiredDate?: string;
  description?: string;
  quantity?: string;
  gender?: Gender;
  code?: string;
  status?: string;
  company?: Company;
  city?: City;
  recommended?: boolean;
}
