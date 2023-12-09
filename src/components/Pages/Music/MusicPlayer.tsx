import styled from 'styled-components'
import { FastRewindIcon, FastForwardIcon, PlayCircleIcon } from '../../Icons/Icons'

const ContainerMusicPlayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 250px;
    padding: 1rem;
    border-radius: 20px;
    gap: 1rem;
`

const ContainerButtonMusic = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const ImgMusic = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #d3d3d378;
`

const InputMusic = styled.input`
`

export const MusicPlayer = () => {
    return (
        <>
            <h1>Music Player</h1>
            <ContainerMusicPlayer>
                <p>title music</p>
                <p>name artist</p>
                <ImgMusic src="../src/assets/music-cover.jpg" alt="music" />
                <ContainerButtonMusic>
                    <FastRewindIcon />
                    <PlayCircleIcon />
                    <FastForwardIcon />
                </ContainerButtonMusic>
                <InputMusic type="range" min="1" max="100" name="volume" />

            </ContainerMusicPlayer>

        </>
    )
}