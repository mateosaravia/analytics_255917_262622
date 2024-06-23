import UserBehaviorPanel from './components/user-behavior/UserBehaviorPanel';
import PurchasesPanel from './components/purchases/PurchasesPanel';
import PreferencesPanel from './components/preferences/PreferencesPanel';

function App() {
  return (
    <div className="flex flex-col items-center h-full">
        <h1 className='text-3xl mt-20 mb-10'>Steam Analytics</h1>
        <div>
          <UserBehaviorPanel />
        </div>
        <div className='flex'>
          <PurchasesPanel />
          <PreferencesPanel />
        </div>
    </div>
  );
}

export default App;
