import {repository} from "nodedata/core/decorators";
import {teacher} from '../models/teacher';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@repository({ path: 'teacher', model: teacher })
export default class TeacherRepository extends DynamicRepository {

}
