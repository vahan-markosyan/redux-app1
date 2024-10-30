import { useAppDispatch } from "../../app/hooks"
import { IUser } from "./types"
import { deleteUser } from "./user.slice"

interface IProps {
    user:IUser
}

export const User:React.FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch()
    return <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.surname}</p>
        <p>{user.age}</p>
        <p>{user.city}</p>
        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
}