import React, { useState, useEffect } from 'react';
import UserBehaviorPanel from './components/user-behavior/UserBehaviorPanel';
import PurchasesPanel from './components/purchases/PurchasesPanel';
import PreferencesPanel from './components/preferences/PreferencesPanel';

function App() {
  const [userBehaviorLoaded, setUserBehaviorLoaded] = useState(false);
  const [purchasesLoaded, setPurchasesLoaded] = useState(false);
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);

  useEffect(() => {
    setUserBehaviorLoaded(true);
  }, []);

  useEffect(() => {
    if (userBehaviorLoaded) {
      setPurchasesLoaded(true);
    }
  }, [userBehaviorLoaded]);

  useEffect(() => {
    if (purchasesLoaded) {
      setPreferencesLoaded(true);
    }
  }, [purchasesLoaded]);

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-3xl mt-20 mb-10">Steam Analytics</h1>
      <div>
        {userBehaviorLoaded && <UserBehaviorPanel />}
      </div>
      <div className="flex">
        {purchasesLoaded && <PurchasesPanel />}
        {preferencesLoaded && <PreferencesPanel />}
      </div>
    </div>
  );
}

export default App;
