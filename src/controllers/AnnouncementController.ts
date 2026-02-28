import { type Request, type Response } from 'express';
import Announcement from '../models/Announcement';
import { type AuthRequest } from '../middlewares/authMiddleware';

export const getAnnouncements = async (req: Request, res: Response): Promise<void> => {
    try {        
        const announcements = await Announcement.find()
            .populate('authorId', 'name email')
            .sort({ createdAt: -1 }); 

        res.status(200).json(announcements);
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({ message: 'Server error while fetching announcements' });
    }
};

export const getAnnouncementById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const announcement = await Announcement.findById(id).populate('authorId', 'name email');

        if (!announcement) {
            res.status(404).json({ message: 'Announcement not found' });
            return;
        }

        res.status(200).json(announcement);
    } catch (error) {
        console.error('Error fetching announcement:', error);
        res.status(500).json({ message: 'Server error while fetching announcement' });
    }
};

export const createAnnouncement = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { title, content } = req.body;        
        
        const authorId = req.user?.id;
        
        if (!authorId) {
            res.status(401).json({ message: 'Unauthorized: User ID is missing' });
            return;
        }
        
        const announcement = await Announcement.create({
            title,
            content,
            authorId
        });

        res.status(201).json({
            message: 'Announcement created successfully',
            announcement
        });
    } catch (error) {
        console.error('Error creating announcement:', error);
        res.status(500).json({ message: 'Server error while creating announcement' });
    }
};

export const updateAnnouncement = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const announcement = await Announcement.findByIdAndUpdate(
            id,
            { title, content },
            { new: true } 
        );

        if (!announcement) {
            res.status(404).json({ message: 'Announcement not found' });
            return;
        }

        res.status(200).json({
            message: 'Announcement updated successfully',
            announcement
        });
    } catch (error) {
        console.error('Error updating announcement:', error);
        res.status(500).json({ message: 'Server error while updating announcement' });
    }
};

export const deleteAnnouncement = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

        if (!deletedAnnouncement) {
            res.status(404).json({ message: 'Announcement not found' });
            return;
        }

        res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        console.error('Error deleting announcement:', error);
        res.status(500).json({ message: 'Server error while deleting announcement' });
    }
};