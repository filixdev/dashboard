import { lightTheme } from '../../../theme/theme';
import { BaseTheme } from '../../../theme/types';
import { Brightness7Icon, NightlightIcon } from '../../Icons/Icons'

interface DarkModeProps {
    toggleTheme: () => void;
    theme: BaseTheme;
}

const DarkMode: React.FC<DarkModeProps> = ({ toggleTheme, theme }) => {
    return (
        <>
            {theme === lightTheme ?
                <NightlightIcon onClick={() => toggleTheme()} />
                :
                <Brightness7Icon onClick={() => toggleTheme()} />
            }
        </>
    )
}

export default DarkMode