import { useEffect } from "react";
import axios from "axios";

const UserInfo = (props) => {
    return (
        <div>
            <h2></h2>
        </div>
    );
}

export default function UsersGithub()
{
    const [userName, setUserName] = useState({});

    useEffect(() => {

    }, [])

    const loadUserInfo = () => {
        const userNameGit = "MrLa3YT";
        const query = `https://api.github.com/users/${userNameGit}`;

        const resp = axios;
    }

    return (
        <>
            <UserInfo {...userName} />
        </>
    );
}