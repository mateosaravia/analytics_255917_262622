import { getAllTransactionsByGenre } from "../../services/transactions/transactions";
import { getSessionsDurationByGenre } from "../../services/users/user-behavior";
import { getAvgReviewByGenre } from "../../services/users/user-preferences";
import PreferencesCard from "./PreferencesCard";
import { useEffect, useState } from "react";

const PreferencesPanel = () => {
    const [data, setData] = useState({
        actionReviews: null,
        actionTransactions: null,
        actionSessionDuration: null,
        adventureReviews: null,
        adventureTransactions: null,
        adventureSessionDuration: null,
        racingReviews: null,
        racingTransactions: null,
        racingSessionDuration: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    actionReviews,
                    actionTransactions,
                    actionSessionDuration,
                    adventureReviews,
                    adventureTransactions,
                    adventureSessionDuration,
                    racingReviews,
                    racingTransactions,
                    racingSessionDuration,
                ] = await Promise.all([
                    getAvgReviewByGenre(1),
                    getAllTransactionsByGenre(1),
                    getSessionsDurationByGenre(1),
                    getAvgReviewByGenre(2),
                    getAllTransactionsByGenre(2),
                    getSessionsDurationByGenre(2),
                    getAvgReviewByGenre(10),
                    getAllTransactionsByGenre(10),
                    getSessionsDurationByGenre(10),
                ]);

                setData({
                    actionReviews,
                    actionTransactions,
                    actionSessionDuration,
                    adventureReviews,
                    adventureTransactions,
                    adventureSessionDuration,
                    racingReviews,
                    racingTransactions,
                    racingSessionDuration,
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };  
        fetchData();
    }, []);

    const stringActionReviews = data.actionReviews ? `Average review: ${data.actionReviews.average_review}` : "No reviews available";
    const stringActionTransactions = data.actionTransactions ? `Transactions: ${data.actionTransactions.total_amount}` : "No transactions available";
    const stringActionSessionDuration = data.actionSessionDuration ? `Session duration: ${data.actionSessionDuration.total_duration_seconds}` : "No session duration available";
    const stringAdventureReviews = data.adventureReviews ? `Average review: ${data.adventureReviews.average_review}` : "No reviews available";
    const stringAdventureTransactions = data.adventureTransactions ? `Transactions: ${data.adventureTransactions.total_amount}` : "No transactions available";
    const stringAdventureSessionDuration = data.adventureSessionDuration ? `Session duration: ${data.adventureSessionDuration.total_duration_seconds}` : "No session duration available";
    const stringRacingReviews = data.racingReviews ? `Average review: ${data.racingReviews.average_review}` : "No reviews available";
    const stringRacingTransactions = data.racingTransactions ? `Transactions: ${data.racingTransactions.total_amount}` : "No transactions available";
    const stringRacingSessionDuration = data.racingSessionDuration ? `Session duration: ${data.racingSessionDuration.total_duration_seconds}` : "No session duration available";

    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>Genre popularity</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <PreferencesCard title="Action" data1={stringActionReviews} data2={stringActionTransactions} data3={stringActionSessionDuration} />
                </div>
                <div className="m-6">
                    <PreferencesCard title="Adventure" data1={stringAdventureReviews} data2={stringAdventureTransactions}  data3={stringAdventureSessionDuration} />
                </div>
                <div className="m-6">
                    <PreferencesCard title="Racing" data1={stringRacingReviews} data2={stringRacingTransactions}  data3={stringRacingSessionDuration} />
                </div>
            </div>
        </div>
    );
};

export default PreferencesPanel;