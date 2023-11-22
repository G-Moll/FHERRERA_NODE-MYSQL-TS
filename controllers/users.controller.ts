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

export const postUser = async( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const emailExists = await User.findOne({
            where: {
                email: body.email
            }
        });

        if( emailExists ) {
            res.status( 400 ).json({
                msg: `User with email ${ body.id } already exists...`
            });
        }
        else {
            // const user = new User( body );
            // await user.save();
            const user = await User.create( body );
            res.json({
                user: user
            });
        }
    }
    catch( e: any ) {
        res.status( 500 ).json({
            msg: 'New user can not be created...'
        });
    }
}

export const putUser = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk( id );

        if( !user ) {
            res.status( 404 ).json({
                msg: `User with id ${ id } doesn't exists...`
            });
        }
        else {
            await user.update( body );
            res.json({
                user: user
            });
        }
    }
    catch( e: any ) {
        res.status( 500 ).json({
            msg: `User can not be updated - ${ e }`
        });
    }
}

export const deleteUser = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id: id
    });
}


