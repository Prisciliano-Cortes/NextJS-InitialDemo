import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function About() {
    return (
        <>
            <p>
                About
            </p>
        </>
    )
}

About.getLayout = function getLayout( page: JSX.Element ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}