import { useEffect, useState } from "react";
// 1. DESTROYED: Import a non-existent module (Docker build will fail here)
import { SystemMeltdown } from "./nowhere"; 

export default function MFEPage() {
  // 2. DESTROYED: Conditional Hook (Violates Rules of Hooks)
  if (true) {
    const [broken, setBroken] = useState(0);
  }

  // 3. DESTROYED: Infinite State Loop 
  // This will trigger an immediate "Maximum update depth exceeded" error
  const [chaos, setChaos] = useState(0);
  setChaos(chaos + 1);

  // 4. DESTROYED: Reference Error
  // Accessing a property on an undefined variable
  const kaboom = undefined;
  console.log(kaboom.totalDestruction);

  return (
    <div style={{ background: 'red', height: '100vh', color: 'white' }}>
      <h1>THIS DEPLOYMENT SHOULD HAVE FAILED</h1>
      {/* 5. DESTROYED: Invalid Syntax / TypeScript Error */}
      <StatItem value={{obj: "not-a-number"}} label={12345} />
    </div>
  );
}

// 6. DESTROYED: Duplicate function declaration 
// (Most compilers will throw a "SyntaxError: Identifier 'StatItem' has already been declared")
function StatItem() {
  return null;
}

function StatItem() {
  return <p>Double Trouble</p>;
}