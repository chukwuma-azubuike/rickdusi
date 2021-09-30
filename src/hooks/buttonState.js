import CircularProgress from '@mui/material/CircularProgress';
const { useState } = require("react")

export default function useButtonState() {

    const [buttonInfo, setbuttonInfo] = useState()
    const [emailSuccess, setEmailSuccess] = useState(false)

    const buttonInfoFunc = (info) => {

        if (info === 'progress') {
            setbuttonInfo(
                <CircularProgress
                    className='mt-1'
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={25}
                    thickness={5}
                />
            )
        } else {
            setbuttonInfo(info)
        }

    }

    return {
        buttonInfo,
        emailSuccess,
        setEmailSuccess,
        setbuttonInfo,
        buttonInfoFunc
    }
}