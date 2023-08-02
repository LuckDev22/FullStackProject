import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";
import "dotenv/config";

export const checkedTokenIsValidMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    let token: string | undefined = req.headers.authorization;

    if (!token) {
        throw new AppError("Missing bearer token", 401);
    }
    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
        if (err) {
            throw new AppError(err.message, 401);
        }
        resp.locals.clientId = decoded.sub;
        resp.locals.token = decoded.admin;
    });

    return next();
};
