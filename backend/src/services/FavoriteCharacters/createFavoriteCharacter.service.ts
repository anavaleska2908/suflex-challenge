import AppDataSource from "../../data-source";
import { Favorite_character } from "../../entities/favoriteCharacters.entity";
import { IFavorites } from "../../interfaces";

export const createFavoriteCharactersService = async ({fc_id_user, fc_id_character, fc_name, fc_status, fc_species, fc_type, fc_gender, fc_origin, fc_location, fc_image, fc_episode, fc_url, fc_created,
}: IFavorites) => {
    const favoriteCharactersRepository = AppDataSource.getRepository(Favorite_character);
    const favoriteCharacter = favoriteCharactersRepository.create({
        fc_id_user,
        fc_id_character,
        fc_name,
        fc_status,
        fc_species,
        fc_type,
        fc_gender,
        fc_origin,
        fc_location,
        fc_image,
        fc_episode,
        fc_url,
        fc_created,
    } as any);
    await favoriteCharactersRepository.save(favoriteCharacter);
    return favoriteCharacter;
}