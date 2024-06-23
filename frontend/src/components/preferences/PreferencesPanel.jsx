import PreferencesCard from "../purchases/PurchasesCard";

const PreferencesPanel = () => {
    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>Genre popularity</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <PreferencesCard title="Genre 1" data1="data1" data2="data2" data3="data3" />
                </div>
                <div className="m-6">
                    <PreferencesCard title="Genre 2" data1="data1" data2="data2"  data3="data3" />
                </div>
                <div className="m-6">
                    <PreferencesCard title="Genre 3" data1="data1" data2="data2"  data3="data3" />
                </div>
            </div>
        </div>
    );
};

export default PreferencesPanel;