import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';

/* Verify the name of the collection */
@Schema({
  collection: 'oauths',
  timestamps: true,
  versionKey: false,
})
export class OauthEntity extends Document {
}

export const OauthSchema = SchemaFactory.createForClass(OauthEntity);
