
import { OfferService } from '../services/offer.services';
import { NextFunction } from 'express';

export default class OfferController {
    static async getById(req:Request, res:Response, next:NextFunction){
        /*try{
            const id = req.params.id
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }*/
    }
}
