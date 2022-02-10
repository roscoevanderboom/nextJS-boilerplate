import Link from 'next/link'
import registrationStyles from "../../styles/jss/pages/registration"

export default function Registration() {
    const classes = registrationStyles();
    return (
        <div className={classes.flex_centered}>
            <h2 className="title">Registration</h2>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </div>
    )
}
