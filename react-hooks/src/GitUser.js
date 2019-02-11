import React, { useState, useEffect } from 'react';

const GitUser = () => {
  const [userData, setUserData] = useState(null);
  const [userFound, setUserFound] = useState(null);
  const [search, setSearch] = useState('');

  let response, data;

  const getData = async search => {
    if(search) {
      response = await fetch(`https://api.github.com/users/${search}`);
      data = await response.json();
      return data;
    }
   
  }

  // useEffect(() => {
  //   getData().then(data => setUserData(data));

  //   return () => {

  //   }
   
  // }, [])

  const updateSearch = event => {
   
    if(event.target.value == "") {
      setUserFound(false);
      setUserData(null);
    }
    setSearch(event.target.value);
  }

  const handleSearch = () => {
    getData(search).then(data => {
      setUserData(data);
      setUserFound(true);
    })
    .catch(err => {
      setUserFound(false);
    })
  }

  return (
    <div>
      <div>
        <input onChange={updateSearch} value={search} placeholder={'input a git username'}/>
        <button onClick={handleSearch} disabled={search.length == 0 || search.trim() == ""}>Search</button>
      </div>

      {userFound && (
        <div>
        <img src={userData.avatar_url} height={50}/>
        <h3>{userData.login}</h3>
        <h4>{userData.location}</h4>
      </div>
      )}
    </div>
  )

}

export default GitUser;