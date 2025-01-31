import React, { Suspense } from 'react';

const RemoteDashboard = React.lazy(() => import('dashboard/App')); // Dynamically load the micro frontend

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <RemoteDashboard />
      </Suspense>
    </div>
  );
}

export default App;
