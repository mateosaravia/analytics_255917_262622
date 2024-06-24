import { getAllTransactionsByRegion } from "../../services/transactions/transactions";
import PurchasesCard from "../purchases/PurchasesCard";
import { useEffect, useState } from "react";

const PurchasesPanel = () => {
    const [data, setData] = useState({
        transactionsSouthAmerica: null,
        transactionsEurope: null,
        transactionsAsia: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    transactionsSouthAmerica,
                    transactionsEurope,
                    transactionsAsia,
                ] = await Promise.all([
                    getAllTransactionsByRegion(4),
                    getAllTransactionsByRegion(2),
                    getAllTransactionsByRegion(3),
                ]);

                setData({
                    transactionsSouthAmerica,
                    transactionsEurope,
                    transactionsAsia,
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };  
        fetchData();
    }, []);

    const stringSouthAmerica = data.transactionsSouthAmerica ? `Transactions: ${data.transactionsSouthAmerica.total_amount}` : "No transactions available";
    const stringEurope = data.transactionsEurope ? `Transactions: ${data.transactionsEurope.total_amount}` : "No transactions available";
    const stringAsia = data.transactionsAsia ? `Transactions: ${data.transactionsAsia.total_amount}` : "No transactions available";

    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>Trends by regions</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <PurchasesCard title="South America" data1={stringSouthAmerica} data2="" />
                </div>
                <div className="m-6">
                    <PurchasesCard title="Europe" data1={stringEurope} data2="" />
                </div>
                <div className="m-6">
                    <PurchasesCard title="Asia" data1={stringAsia} data2="" />
                </div>
            </div>
        </div>
    );
};

export default PurchasesPanel;