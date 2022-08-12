/*
  {!user.isAuth ? 
            <LoginButton onClick={login('admin', 'admin')}
            >Login</LoginButton>
            // <form className='login'>
            //     <input type="text" placeholder="Username" id='username' />
            //     <input type="password" placeholder="Password" id='password'/>
            //     <LoginButton onClick={login(document.getElementById('username').value, document.getElementById('password').value)}
            //     >Login</LoginButton>
            // </form>  
            : (
                <>
                
                <LogoutButton onClick={logout}>Logout</LogoutButton>
                <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
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
            {/* <Tables data={filteredData} /> */}
            </>
        )}
*/