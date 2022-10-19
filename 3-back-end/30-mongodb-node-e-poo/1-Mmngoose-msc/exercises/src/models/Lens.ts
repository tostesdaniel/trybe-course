import { model as mongooseCreateModel, Schema } from 'mongoose';
import ILens from '../interfaces/Lens';
import MongoModel from './MongoModel';

const lensMongooseSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

class Lens extends MongoModel<ILens> {
  constructor(model = mongooseCreateModel('Lens', lensMongooseSchema)) {
    super(model);
  }
}

export default Lens;
