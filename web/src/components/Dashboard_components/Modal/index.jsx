import { Container, Content, Shape } from "./styles";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Button } from "../../Button";
import { useDashboardPage } from "../../../providers/DashboardPage";

export const Modal = () => { 
    const {setSwitchModal, characterModal} = useDashboardPage();
    return (
        <Container>
            <Content>
                <div>
                    {characterModal.map(({ id, name, gender, episode, species, status, created, image }) => {
                            return (
                                <Shape key={id}>
                                    <div>
                                        <img src={image} />
                                        <h3>{name}</h3>
                                    </div>
                                    <ul>
                                        <li>Gênero: {gender}</li>
                                        <li>Espécie: {species}</li>
                                        <li>Status Atual: {status}</li>
                                        <li>Participa de {episode.length} episódios</li>
                                        <li>Criado em: {created}</li>
                                    </ul>
                                </Shape>
                            )
                    })}
                </div>
                <Button onClick={() => setSwitchModal(false)}>Fechar</Button>
            </Content>
        </Container>
    )
};