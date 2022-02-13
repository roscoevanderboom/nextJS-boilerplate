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
export default function Custom401() {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <h1>401 - You are not authorized to access this content</h1>
            <Link href="/">Back to Home Page</Link>
        </div>
    )
}