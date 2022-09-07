import React, { useEffect, useState } from 'react';

const getUser = async () => {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then(user => setUser(user));
  }, [])

  return (
    <div>
      Hello {user?.userDetails}<pre>{JSON.stringify(user)}</pre>
    </div>
  );
}

export default App;
