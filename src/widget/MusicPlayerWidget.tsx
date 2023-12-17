import { useState } from "react"
import styled from "styled-components";

const SpotifyWebWidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 50%;
`;

const FormPlaylist = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 100%;

`;

const InputPlaylist = styled.input`
    width: 100%;
    border-radius: 12px;
    padding: 0.5rem;
    font-size: 1rem;
`;

const ButtonChangePlayList = styled.button`
    border-radius: 12px;
    padding: 0.5rem 2rem;
    font-size: 1rem;
`;

export const SpotifyWebWidget = () => {

    const [playlistUrl, setPlaylistUrl] = useState('https://open.spotify.com/embed/playlist/6x3c8GuCuBjgz52Jrm2aHU?utm_source=generator');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = event.currentTarget;
        const newPlaylistId = (form.elements.namedItem('playlistUrl') as HTMLInputElement).value;

        if (newPlaylistId)
            setPlaylistUrl(`https://open.spotify.com/embed/playlist/${newPlaylistId}?utm_source=generator`);
    };

    return (
        <SpotifyWebWidgetContainer>
            <FormPlaylist onSubmit={handleSubmit}>
                <InputPlaylist type="text" name="playlistUrl" placeholder="Enter Playlist ID" />
                <ButtonChangePlayList type="submit">Submit</ButtonChangePlayList>
            </FormPlaylist>
            <iframe style={{ borderRadius: '12px' }} src={playlistUrl} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </SpotifyWebWidgetContainer>
    );
};
