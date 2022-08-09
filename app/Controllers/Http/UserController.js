'use strict'

const User = use('App/Models/User');

class UserController {

    async store({request}){
        const data = request.only(['username', 'password', 'email'])

        const user = await User.create(data);

        return user;
    }

    async index(request, response){ 
        const users = await User.all();

        return users;
    }

    async login({request, response, auth}){
        try{
            const {email, password} = request.all();
            const token = await auth.attempt(email, password);

            return token
        }catch(e){
            return response.status(500).send({error:e});
        }
    }


}

module.exports = UserController
