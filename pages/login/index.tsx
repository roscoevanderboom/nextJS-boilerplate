import Link from 'next/link'
import { Paper } from '@mui/material';
import loginStyles from "../../styles/jss/pages/login"
export default function Login() {
    const classes = loginStyles();
    return (
        <div className={classes.flex_centered}>
            <Paper className={classes.paper}>
                <h2 className="title">Login</h2>
                <Link href="/registration">
                    <a>Registration</a>
                </Link>
            </Paper>
        </div>
    )
}
