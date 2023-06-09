import {Request, Response} from 'express'
import PokemonService from './poke.service'

class PokemonController {

    public async create(req: Request, res: Response){
        const Pokemon = await PokemonService.createPokemon(req.body)
        return res.status(200).json(Pokemon)
    }

    async list(req: Request, res: Response) {
        const Pokemons = await PokemonService.list()

        return res.status(200).json(Pokemons)
    }

    async find(req: Request, res: Response) {
        const Pokemon = await PokemonService.find(req.params.id)

        return res.status(200).json(Pokemon)
    }

    async update(req: Request, res: Response) {
        const Pokemon = await PokemonService.update(req.params.id, req.body)

        return res.status(200).json(Pokemon)
    }

    async delete(req: Request, res: Response) {
        await PokemonService.delete(req.params.id)

        return res.status(200).json("Pokemon deletado")
    }

    async Pokecreate(req: Request, res: Response) {
        const result = await PokemonService.PokeURLs()
        
        return res.status(200).json(result)
    }

    async SavePokeData(req: Request, res: Response) {
        const result = await PokemonService.savePokemon()
        
        return res.status(200).json(result)
    }

    
    async findDex(req: Request, res: Response) {
        const Pokemon = await PokemonService.findByDex(req.params.dex)

        return res.status(200).json(Pokemon)
    }


    async findMove(req: Request, res: Response) {
        const Pokemon = await PokemonService.findByMove(req.params.move)

        return res.status(200).json(Pokemon)
    }


}


export default new PokemonController()