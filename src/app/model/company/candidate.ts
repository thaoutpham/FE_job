import {Cv} from '../user/cv';
import {Company} from './company';
import {Post} from '../post/post';

export interface Candidate {
  id?: string;
  cv?: Cv;
  post?: Post;
}
