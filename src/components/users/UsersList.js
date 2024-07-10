import { useEffect, useState } from "react"

const apiURL = "https://dummyjson.com/users";
let pagination={
    skip:0,
    limit:5
}
export default function UsersList() {

    const [users, setUsers] = useState([]);
    // using useEffect
    //invoke with visualisation
    // useEffect(() => {
    //     console.log("invoke!! use effect always for visiulation)! ");
    // return ()=>{
    //     console.log("invoke when unmounted component (deleted)")
    // }
    // }
    // );

    //invoke only when component first renedered
    useEffect(() => {
        console.log("invoke!! use effect on start (create component)!");
        loadUsers();
       
    },[]);

    //ivoke when the users property is cahnged
    useEffect(()=>{
        console.log("Effect invoke on users changed!");
    },[users]);

    const loadUsers = () => {
        let url=`https://dummyjson.com/users?limit=${pagination.limit}&skip=${pagination.skip}`;
        pagination.skip+=pagination.limit;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.users);
                setUsers([...users, ...data.users]);
                console.log(users);
            })
            .catch(error => {
                //console.warn(error);
                console.error(error)
            });

    };
    // loadUsers();
    return (<>
        <h2>Users Lists</h2>
        <ol style={{textAlign:"left"}}>
            {
                users.map(u =>
                    <li key={u.id}>{u.firstName} {u.lastName} ... </li>
                )
            }
        </ol>

        <button onClick={loadUsers}>More</button>
    </>)
}