// pages/404.tsx
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
const styles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }
})
export default function Custom404() {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <h1>404 - Page Not Found</h1>
            <Link href="/">Bsck to Home Page</Link>
        </div>
    )
}