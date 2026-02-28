import mongoose, { Schema, Document } from 'mongoose';

export interface IAnnouncement extends Document {
    title: string;
    content: string;
    authorId: mongoose.Types.ObjectId;
}

const AnnouncementSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true 
        },
        content: {
            type: String,
            required: true
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
            required: true
        }
    },
    {
        timestamps: true 
    }
);

export default mongoose.model<IAnnouncement>('Announcement', AnnouncementSchema);