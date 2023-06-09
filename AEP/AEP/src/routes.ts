import { Router } from 'express'
import pokemonController from './prova/poke.controller'


const routes = Router()

routes.get('/pokemonsURL', pokemonController.Pokecreate)
routes.post('/savepokemons', pokemonController.SavePokeData)
routes.get('/pokemons', pokemonController.list)
routes.get('/pokemonsDex/:dex', pokemonController.findDex)
routes.get('/pokemonsMove/:move', pokemonController.findMove)



export default routes