import { Container } from '@mui/material';
import NavBar from '../components/NavBar'

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) => {
    return <>
        <NavBar/>
        <Container style={{margin: '90pt'}}>
            {children}
        </Container>
    </>
}

export default MainLayout