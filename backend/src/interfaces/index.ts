export interface IUser {
    usr_name: string;
    usr_email: string;
    usr_password: string;
}

//export interface IPublicUser {
//    name: string;
//    email: string;
//    password: string;
//}

export interface ILogin {
    usr_email: string;
    usr_password: string;
}

export interface IDataId {
    id: number;
}

export interface IDataUuid {
    id: string;
}

export interface IFavorites {
    fc_id_user: string;
    fc_id_character: number;
    fc_name: string;
    fc_status: string;
    fc_species: string;
    fc_type: string;
    fc_gender: string;
    fc_origin: {
        name: string;
        url: string;
    };
    fc_location: {
        name: string;
        url: string;
    };
    fc_image: string;
    fc_episode: [];
    fc_url: string;
    fc_created: string;
}