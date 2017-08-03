import {field, document} from 'nodedata/mongoose/decorators'; 
import {Types} from 'mongoose';
// import {CrudEntity} from 'nodedata/core/dynamic/crud.entity';

export class baseModel {
    // constructor(object?: any) {
    //     super();
 
    // }

    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;
    
}

export default baseModel;