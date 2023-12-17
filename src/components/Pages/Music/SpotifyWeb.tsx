import { useState } from "react"
import styled from "styled-components";

const IframeSpotify = styled.iframe`
    border-radius: 12px;
    height: 100vh;
    border: unset;
`;

const FormPlaylist = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    gap: 1rem;
`;

const InputPlaylist = styled.input`
    border-radius: 12px;
    padding: 0.5rem;
    width: 50%;
    font-size: 1rem;
`;

const ButtonChangePlayList = styled.button`
    border-radius: 12px;
    padding: 0.5rem 2rem;
    font-size: 1rem;
`;

export const SpotifyWeb = () => {

    const [playlistUrl, setPlaylistUrl] = useState('https://open.spotify.com/embed/playlist/3DIjw8eboATMgRN2RC6mz6?utm_source=generator');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = event.currentTarget;
        const newPlaylistId = (form.elements.namedItem('playlistUrl') as HTMLInputElement).value;
    
        if (newPlaylistId)
        setPlaylistUrl(`https://open.spotify.com/embed/playlist/${newPlaylistId}?utm_source=generator`);
    };

    return (
        <div>
            <FormPlaylist onSubmit={handleSubmit}>
                <InputPlaylist type="text" name="playlistUrl" placeholder="Enter Playlist ID" />
                <ButtonChangePlayList type="submit">Change Playlist</ButtonChangePlayList>
            </FormPlaylist>
            <IframeSpotify
                src={playlistUrl}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></IframeSpotify>
        </div>
    );
};
