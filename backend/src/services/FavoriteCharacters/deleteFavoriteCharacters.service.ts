import AppDataSource from "../../data-source";
import { Favorite_character } from "../../entities/favoriteCharacters.entity";

export const deleteFavoriteCharacterService = async ({fc_id_user, fc_id_character}: any) => {
    const favoriteRepository = AppDataSource.getRepository(Favorite_character);
    const data: any = await favoriteRepository.findOne({
        where: {
            fc_id_character: Number(fc_id_character),
            fc_id_user: { id: Number(fc_id_user) } as any
        },
        relations: ["fc_id_user"]
    });
    await favoriteRepository.delete(data.id)
}