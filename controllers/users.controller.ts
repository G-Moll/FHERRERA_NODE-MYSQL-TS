import { Request, Response } from 'express';
import User from '../models/user.model';

export const getUsers = async( req: Request, res: Response ) => {
    const users = await User.findAll();
    res.json({
        users: users
    });
}

export const getUser = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );

    if( !user ) {
        res.status( 404 ).json({
            msg: `User with id ${ id } doesn't exist...`
        });
    }
    else {
        res.json({
            user: user
        });
    }
}

export const postUser = ( req: Request, res: Response ) => {
    const { body } = req;

    res.json({
        msg: 'postUser',
        body: body
    });
}

export const putUser = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUser',
        body: body
    });
}

export const deleteUser = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id: id
    });
}


