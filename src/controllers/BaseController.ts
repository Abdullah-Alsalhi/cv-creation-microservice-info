import { Request, Response } from "express";

export abstract class BaseController {

    public async create(req: Request, res: Response, next?: any) { };

    public async store(req: Request, res: Response, next?: any) { };
    /* 
        *param id*
    */
    public async show(id: number | string, next?: any) { };
    /* 
        *param id*
    */
    public async edit(id: number | string, next?: any) { };

    public async update(req: Request, id: number | string, next?: any) { };
    /* 
        *param id*
    */
    public async destroy(id: number | string, next?: any) { };

}