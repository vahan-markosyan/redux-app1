import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllUsers, users } from "./user.slice"
import { User } from "./user"

export const UserList = () => {
    const dispatch = useAppDispatch()
    const list = useAppSelector(users)

    useEffect(() => {
        dispatch(getAllUsers())

    },[])

    return <>
    <h1>User List {list.length}</h1>\
    <div className="list">
        {
            list.map(user => <User key={user.id} user={user} />)
        }
    </div>
    </>
}