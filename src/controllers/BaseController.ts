import { NextFunction, Request, Response } from "express";

export abstract class BaseController {

    public async register(req: Request, res: Response, next?: NextFunction) { };

    public async login(req: Request, res: Response, next?: NextFunction) { };

    public async create(req: Request, res: Response, next?: NextFunction) { };

    public async store(req: Request, res: Response, next?: NextFunction) { };
    /* 
        *param id*
    */
    public async show(id: number | string, next?: NextFunction) { };
    /* 
        *param id*
    */
    public async edit(id: number | string, next?: NextFunction) { };

    public async update(req: Request, id: number | string, next?: NextFunction) { };
    /* 
        *param id*
    */
    public async destroy(id: number | string, next?: NextFunction) { };

}