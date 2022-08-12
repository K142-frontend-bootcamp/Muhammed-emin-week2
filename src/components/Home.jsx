import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Circles } from 'react-loader-spinner'

import { Wrapper, Input, LogoutButton, LoginButton, LoginForm } from './StyledComponents/ScHome';
import Tables from './Tables';


const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [gender, setGender] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        username: '',
        password: '',
        isAuth: false,
    });

    const getUnique = (arr, comp) => {
        const unique = arr.map(e => e[comp])
                            .map((e, i, final) => final.indexOf(e) === i && i)
                            .filter(e => arr[e])
                            .map(e => arr[e])
    return unique;
    }


    const getData = async () => {
        const res = await axios.get('https://swapi.dev/api/people');
        setData(res.data.results);
        setIsLoading(false);
    }

    const login = (_username, _password) => {
        if (_username === 'admin' && _password === 'admin'){
            setUser({
                ...user,
                username: _username,
                isAuth: true
            })
        }
        else {
            alert('Please check Username or Password');
        }
    };


    const logout = () => {
        setUser({
            ...user,
            isAuth: false
        })
    };



    useEffect(() => {
        getData();
    }, []);

    let filteredData = data.filter(item => item.name.toLowerCase().includes(search));
    let filterDropdown = [];
    if (gender === 'all') {
        filterDropdown = filteredData.filter(item => item);
    }else {
        filterDropdown = filteredData.filter(item => item.gender === gender);
    }

    const uniqueGender = getUnique(data, "gender");


    
    
    return (
        <Wrapper>
            {!user.isAuth ? 
            <LoginForm>
                <input type="text" placeholder="Username" id='username' required />
                <input type="password" placeholder="Password" id='password' required/>
                <LoginButton type="button" onClick={() => login(document.getElementById('username').value, document.getElementById('password').value)}>Login</LoginButton>
                <LoginButton type="button" onClick={() => login('admin', 'admin')}>Loooogin</LoginButton>
            </LoginForm>: (
                <>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
                <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                <>
                    {/* <select value ={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="n/a">N/A</option>
                        <option value="all">All</option>
                    </select> */}

                    <select value ={gender} onChange={(e) => setGender(e.target.value)}>

                        {uniqueGender.map((item, index) => (
                            <option key={index} value={item.gender}>{item.gender}</option>
                        ))}
                        <option value="all">All</option>
                    </select>
                </>
                
                {isLoading && (
                    <Circles
                    height="80"
                    width="80"
                    radius="9"
                    color='green'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />
            )}
            <Tables data={filterDropdown} />
            </>
        )}
        </Wrapper>
    );

}

export default Home;