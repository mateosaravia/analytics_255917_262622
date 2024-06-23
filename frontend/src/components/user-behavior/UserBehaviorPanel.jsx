import React, { useState, useEffect } from "react";
import UserBehaviorCard from "./UserBehaviorCard";
import { getAllSocialInteractions, getAverageSessionsDuration, getAverageSocialInteractions, getTotalSessionsDuration } from "../../services/users/user-behavior";
import { getTopPurchasePreferences } from "../../services/users/user-preferences";

const UserBehaviorPanel = () => {
    const [data, setData] = useState({
        totalSessionsDuration: null,
        averageSessionsDuration: null,
        topPreferredGenres: null,
        topPurchasePreferences: null,
        totalSocialInteractions: null,
        averageSocialInteraction: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    totalSessionsDuration,
                    averageSessionsDuration,
                    topPreferredGenres,
                    topPurchasePreferences,
                    totalSocialInteractions,
                    averageSocialInteraction,
                ] = await Promise.all([
                    getTotalSessionsDuration(),
                    getAverageSessionsDuration(),
                    Promise.resolve("Data not available"),
                    Promise.resolve("Data not available"),
                    getAllSocialInteractions(),
                    getAverageSocialInteractions(),
                    //getTopPurchasePreferences(),
                    //getAllSocialInteractions(),
                    //getAverageSocialInteractions(),
                ]);

                setData({
                    totalSessionsDuration,
                    averageSessionsDuration,
                    topPreferredGenres,
                    topPurchasePreferences,
                    totalSocialInteractions,
                    averageSocialInteraction,
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>User behavior</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <div className="mb-6">
                        <UserBehaviorCard 
                            title="Total sessions duration" 
                            description={data.totalSessionsDuration || "Loading..."} 
                        />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard 
                            title="Average sessions duration" 
                            description={data.averageSessionsDuration || "Loading..."} 
                        />
                    </div>
                </div>
                <div>
                    <div className="m-6">
                        <UserBehaviorCard 
                            title="Top 5 preferred genres" 
                            description={data.topPreferredGenres || "Loading..."} 
                        />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard 
                            title="Top 5 purchase preferences" 
                            description={data.topPurchasePreferences || "Loading..."} 
                        />
                    </div>
                </div>
                <div className="m-6">
                    <div className="mb-6">
                        <UserBehaviorCard 
                            title="Total social interactions" 
                            description={data.totalSocialInteractions || "Loading..."} 
                        />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard 
                            title="Average social interaction" 
                            description={data.averageSocialInteraction || "Loading..."} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBehaviorPanel;
