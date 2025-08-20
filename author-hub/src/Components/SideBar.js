import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`d-flex flex-column bg-dark text-white p-3 ${collapsed ? 'collapsed' : 'w-25'}`}>
      <Button variant="secondary" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '...':'...'}
      </Button>
      {!collapsed && (
        <>
          <Link to="/profile" className="text-white my-2"><h4>Profile</h4></Link>
          <Link to="/articles" className="text-white my-2"><h4>My Articles</h4></Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;
