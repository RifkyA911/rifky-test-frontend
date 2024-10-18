import {FC} from 'react';
import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
const RootPage: FC = () => {
    redirect('/id');
};

export default RootPage;
