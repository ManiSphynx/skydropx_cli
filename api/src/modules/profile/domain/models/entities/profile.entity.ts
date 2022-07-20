import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';

/* Verify the name of the collection */
@Schema({
  collection: 'profiles',
  timestamps: true,
  versionKey: false,
})
export class ProfileEntity extends Document {
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);
