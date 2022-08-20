import { Grid, Button, TextField } from "@mui/material"
import { useState } from "react"
import FileLoader from "../../components/FileLoader"
import StepWrapper from "../../components/StepWarapper"
import MainLayout from "../../layout/MainLayout"

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [preview, setPreview] = useState('')
    const [audio, setAudio] = useState('')

    const next = () => {
        setActiveStep(prev => prev + 1)
    }
    
    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction='column' style={{padding: 20}}>
                        <TextField
                            style={{marginBottom: 10}}
                            label='Track title'
                        />
                        <TextField
                            style={{marginBottom: 10}}
                            label='Author name'
                        />
                        <TextField
                            label='Lyrics'
                            multiline
                            rows={4}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileLoader accept='image/*' setFile={setPreview}>
                        <Button>
                            ВЫБРАТЬ ИЗОБРАЖЕНИЕ
                        </Button>
                    </FileLoader>
                }
                {activeStep === 2 &&
                    <FileLoader accept='audio/*' setFile={setAudio}>
                        <Button>
                            ВЫБРАТЬ АУДИО
                        </Button>
                    </FileLoader>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep < 1} onClick={back}>back</Button>
                <Button disabled={activeStep > 2} onClick={next}>next</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create