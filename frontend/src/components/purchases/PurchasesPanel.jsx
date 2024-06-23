import PurchasesCard from "../purchases/PurchasesCard";

const PurchasesPanel = () => {
    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>Trends by regions</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <PurchasesCard title="Region 1" data1="data1" data2="data2" />
                </div>
                <div className="m-6">
                    <PurchasesCard title="Region 2" data1="data1" data2="data2" />
                </div>
                <div className="m-6">
                    <PurchasesCard title="Region 3" data1="data1" data2="data2" />
                </div>
            </div>
        </div>
    );
};

export default PurchasesPanel;