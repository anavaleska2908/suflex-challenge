import AppDataSource from "../../data-source";
import { Favorite_character } from "../../entities/favoriteCharacters.entity";

export const listFavoriteCharactersService = async ({id}: any) => {
    const favoriteRepository = AppDataSource.getRepository(Favorite_character);
        const data: any =  await favoriteRepository.find({
            where: { fc_id_user: {id: Number(id)} } as any
        });
        console.log("data ", data);
        let convertedData: any = []
        data.forEach((value: any) => {
            let character = {
                user: value?.fc_id_user,
                character: value?.fc_id_character,
                id: value?.fc_id_character,
                name: value?.fc_name,
                status: value?.fc_status,
                species: value?.fc_species,
                type: value?.fc_type,
                gender: value?.fc_gender,
                origin: value?.fc_origin,
                location: value?.fc_location,
                image: value?.fc_image,
                episode: value?.fc_episode,
                url: value?.fc_url,
                created: value?.fc_created,
            }
            convertedData = [...convertedData, character]
        });
    return convertedData
    
}
