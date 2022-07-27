import { Request, Response } from "express";
import { createFavoriteCharactersService } from "../services/FavoriteCharacters/createFavoriteCharacter.service";
import { deleteFavoriteCharacterService } from "../services/FavoriteCharacters/deleteFavoriteCharacters.service";
import { listFavoriteCharactersService } from "../services/FavoriteCharacters/listFavoriteCharacters.service";

export default class FavoriteCharactersController {
    static store = async (request: Request, response: Response) => {
        const { body } = request;
        let { fc_id_user, fc_id_character, fc_name, fc_status, fc_species, fc_type, fc_gender, fc_origin, fc_location, fc_image, fc_episode, fc_url, fc_created }: any = await createFavoriteCharactersService({
                fc_id_user: body.user,
                fc_id_character: body.character,
                fc_name: body.name,
                fc_status: body.status,
                fc_species: body.species,
                fc_type: body.type,
                fc_gender: body.gender,
                fc_origin: body.origin,
                fc_location: body.location,
                fc_image: body.image,
                fc_episode: body.episode,
                fc_url: body.url,
                fc_created: body.created,
            });
        return response.status(201).json({            
            user: fc_id_user,
            character: fc_id_character,
            name: fc_name,
            status: fc_status,
            species: fc_species,
            type: fc_type,
            gender: fc_gender,
            origin: fc_origin,
            location: fc_location,
            image: fc_image,
            episode: fc_episode,
            url: fc_url,
            created: fc_created,
        });
    }    
    static index = async (request: Request, response: Response) => {
        const { params: { id } } = request;
        const data = await listFavoriteCharactersService({id})
        return response.status(200).json(data)
    }  
    static delete = async (request: Request, response: Response) => {
        const { params: { id: fc_id_character }}= request;
        const { query: { owner: fc_id_user } } = request;    
        await deleteFavoriteCharacterService({fc_id_character, fc_id_user}as any)        
        return response.status(204).json()
    }
}