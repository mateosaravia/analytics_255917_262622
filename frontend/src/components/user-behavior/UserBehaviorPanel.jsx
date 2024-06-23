import UserBehaviorCard from "./UserBehaviorCard";

const userBehaviorPanel = () => {
    return (
        <div className="flex flex-col m-6">
            <div className="text-2xl">
                <h1>User behavior</h1>
            </div>
            <div className="flex justify-center">
                <div className="m-6">
                    <div className="mb-6">
                        <UserBehaviorCard title="Total sessions duration" description="data" />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard title="Average sessions duration" description="data" />
                    </div>
                </div>
                <div>
                    <div className="m-6">
                        <UserBehaviorCard title="Top 5 prefered genres" description="data" />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard title="Top 5 purchase preferences" description="data" />
                    </div>
                </div>
                <div className="m-6">
                    <div className="mb-6">
                        <UserBehaviorCard title="Total social interactions" description="data" />
                    </div>
                    <div className="mt-12">
                        <UserBehaviorCard title="Average social interaction" description="data" />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default userBehaviorPanel;