import React, { useContext, useState } from 'react';
import { fireAuthContext } from '../../UserContext/UserContext';

const FAQ = () => {
    const {user} = useContext(fireAuthContext)
    // const [name, setName] = useState(user?.displayName)

    return (
      <div>
        <h1>hello from FAQ</h1>
      </div>
    );
};

export default FAQ;