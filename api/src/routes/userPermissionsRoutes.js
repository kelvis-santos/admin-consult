import Router from 'express';
import {
    getUserPermissions,
    getUserPermissionById,
    createUserPermission,
    updateUserPermission,
    deleteUserPermission
} from '../controllers/userPermissionController.js';

const router = Router();

router.get('/', getUserPermissions);

router.get('/:id', getUserPermissionById);

router.post('/', createUserPermission);

router.put('/:id', updateUserPermission);

router.delete('/:id', deleteUserPermission);

export default router;