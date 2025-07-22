import {Router} from 'express';
import {getContacto, addContacto} from '../controllers/contactoController.js';    

const router = Router();

router.get('/getContacto', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    getContacto(req, res);
});

router.post('/addContacto', (req, res)=> {addContacto(req, res);});


export default router;