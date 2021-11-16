import { useState } from 'react'
import '../assests/style.css';
import Profile from './Profile';
import UserRepository from './UserRepository';
import { GetRequest } from '../Utitlities/Network';
import { Loader } from '../ResuableComponent/Loader'
const SearchGitHubProfile = () => {

    const [search, setSearch] = useState('');
    const [record, setRecords] = useState<any>({})
    const [isloading, setIsloading] = useState<boolean>(false)
    const _handleInputSearch = (event: any) => {
        if (!event) {
            return;
        }
        const { value } = event.target;
        setSearch(value);
    }

    /***
     * @description:method handle api call
     * step1: when we send the request in  api loder is true
     * step2:call the GetRequest api call request method to call the api 
     * step3:when respose is back in the api call and update the state after loder is false
     * step4:when the request is back api loder is false
     */

    const _getProfile = async () => {
        if (!search) {
            alert('fill the input filed');
            return
        }
        setIsloading(true)
        const apiResponse = await GetRequest(`https://api.github.com/users/${search}`)
        if (!apiResponse) {
            return
        }
        setRecords(apiResponse);
        setIsloading(false)
    }


    const _renderData = () => {

        if (!record || Object.keys(record).length === 0) {
            return <p className='search-hit'>Search the git user name</p>
        }
        return (<div className='container'>
            <div >
                <Profile name={name} image={avatar_url} />
            </div>
            <div>
                <UserRepository repo={repos_url} />
            </div>
        </div>)
    }

    const { name, avatar_url, repos_url } = record;
    return (<>
        <div>
            <input type="text" value={search} onChange={_handleInputSearch} />
            <button onClick={_getProfile}>Submit</button>
        </div>
        <Loader props={isloading} />
        {_renderData()}
    </>
    )
}
export default SearchGitHubProfile;
