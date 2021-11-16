import { useState, useEffect } from 'react'
import { GetRequest } from '../Utitlities/Network'

const UserRepository = ({ repo }: any) => {
    const [reposUrl, setReposUrl] = useState<any>([]);
    const _fetchData = async () => {
        const apiResponse = await GetRequest(repo);
        if (!apiResponse) {
            return
        }
        setReposUrl(apiResponse);
    }
    useEffect(() => {
        _fetchData()
    }, [repo]);
    return (
        <>
            <div className='marginLeft'>
                {reposUrl.map((item: any) => {
                    return <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.html_url}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default UserRepository;

