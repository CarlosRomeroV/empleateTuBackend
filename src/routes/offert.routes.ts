import OfferController from "../controllers/offer.controller";
import { Router } from "express";

const router = Router()

 
//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
//router.get('/', OfferController.getAll)
//POST añadir una oferta nueva localhost:3000/api/offerts/  {body}
//router.post('/', OfferController.save)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX  
//router.delete('/:id', OfferController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX  {body}
//router.put('/:id', OfferController.update)   

// Calificamos una oferta x   {body}
//router.post('/:id/rate/',OfferController.rate)  
// Vemos que calificación (total) se le ha data a una oferta X
//router.get('/:id/rate/', OfferController.getRate)


export default router