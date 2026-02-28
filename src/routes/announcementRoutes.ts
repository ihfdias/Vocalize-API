import { Router } from 'express';
import { verifyAdmin } from '../middlewares/authMiddleware';
import {
    getAnnouncements,
    getAnnouncementById,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
} from '../controllers/AnnouncementController';

const router = Router();

router.get('/', getAnnouncements);
router.get('/:id', getAnnouncementById);

router.post('/', verifyAdmin, createAnnouncement);
router.put('/:id', verifyAdmin, updateAnnouncement);
router.delete('/:id', verifyAdmin, deleteAnnouncement);

export default router;